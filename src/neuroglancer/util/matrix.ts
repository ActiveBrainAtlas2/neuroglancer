/**
 * @license
 * Copyright 2019 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {TypedArray} from 'neuroglancer/util/array';

/**
 * Sets the `m * k` matrix `c` to the product of `m * n` matrix `a` and `n * k` matrix `b`.
 *
 * `a`, `b` and `c` are column-major with column strides of `lda`, `ldb`, and `ldc`, respectively.
 * `c` must not overlap `a` or `b`.
 */
export function multiply<T extends TypedArray>(
    c: T, ldc: number, a: T, lda: number, b: T, ldb: number, m: number, n: number, k: number): T {
  for (let mIndex = 0; mIndex < m; ++mIndex) {
    for (let kIndex = 0; kIndex < k; ++kIndex) {
      let sum = 0;
      for (let nIndex = 0; nIndex < n; ++nIndex) {
        sum += a[mIndex + lda * nIndex] * b[nIndex + ldb * kIndex];
      }
      c[mIndex + ldc * kIndex] = sum;
    }
  }
  return c;
}

export function identity<T extends TypedArray>(a: T, lda: number, n: number): T {
  for (let i = 0; i < n; ++i) {
    const start = lda * i;
    a.fill(0, start, start + n);
    a[start + i] = 1;
  }
  return a;
}

export function createIdentity<T extends TypedArray>(
    c: {new (n: number): T}, rows: number, cols: number = rows): T {
  return identity(new c(rows * cols), rows, Math.min(rows, cols));
}

export function createHomogeneousScaleMatrix<T extends TypedArray>(
    c: {new (length: number): T}, scales: ArrayLike<number>, square = true): T {
  const rank = scales.length;
  const stride = square ? rank + 1 : rank;
  const m = new c(stride * (rank + 1));
  if (square) {
    m[m.length - 1] = 1;
  }
  for (let i = 0; i < rank; ++i) {
    m[(stride + 1) * i] = scales[i];
  }
  return m;
}

export function isIdentity<T extends TypedArray>(a: T, lda: number, n: number) {
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (a[i * lda + j] != ((i === j) ? 1 : 0)) return false;
    }
  }
  return true;
}

export function copy<T extends TypedArray>(
    b: T, ldb: number, a: T, lda: number, m: number, n: number): T {
  for (let col = 0; col < n; ++col) {
    const aOff = col * lda;
    const bOff = col * ldb;
    for (let row = 0; row < m; ++row) {
      b[bOff + row] = a[aOff + row];
    }
  }
  return b;
}

export function extendHomogeneousTransform<T extends TypedArray>(
    b: T, bRank: number, a: T, aRank: number) {
  copy(b, bRank + 1, a, aRank + 1, aRank, aRank);
  for (let i = 0; i < aRank; ++i) {
    b[(bRank + 1) * bRank + i] = a[(aRank + 1) * aRank + i];
  }
  b[b.length - 1] = 1;
  for (let i = aRank; i < bRank; ++i) {
    b[(bRank + 1) * i + i] = 1;
  }
  return b;
}


let pivots: Uint32Array|undefined;

/**
 * Computes the inverse of a square matrix in place, and returns the determinant.
 */
export function inverseInplace<T extends TypedArray>(a: T, lda: number, n: number): number {
  let determinant = 1;
  // Use Gauss-Jordan elimination with partial pivoting to compute inverse.
  if (pivots === undefined || pivots.length < n) {
    pivots = new Uint32Array(n);
  }
  for (let i = 0; i < n; ++i) {
    pivots[i] = i;
  }
  for (let k = 0; k < n; ++k) {
    const kColOff = lda * k;
    // Find best pivot (row >= `k` with maximum-magnitude element in column `k`).
    let pivotRow = k;
    {
      let bestPivot = Math.abs(a[kColOff + k]);
      for (let row = k + 1; row < n; ++row) {
        const mag = Math.abs(a[kColOff + row]);
        if (mag > bestPivot) {
          bestPivot = mag;
          pivotRow = row;
        }
      }
    }
    // Swap rows `k` and `pivotRow`.
    if (k !== pivotRow) {
      determinant *= -1;
      for (let col = 0; col < n; ++col) {
        const off = lda * col;
        const temp = a[off + k];
        a[off + k] = a[off + pivotRow];
        a[off + pivotRow] = temp;
      }

      // Swap `pivots[k]` with `pivots[pivotRow]`.
      {
        const tempPivot = pivots[k];
        pivots[k] = pivots[pivotRow];
        pivots[pivotRow] = tempPivot;
      }
    }
    // Eliminate.
    const pivotValue = a[kColOff + k];
    const pivotInv = 1.0 / pivotValue;

    // Divide row `k` by the pivot element.
    determinant *= pivotValue;
    for (let j = 0; j < n; ++j) {
      a[lda * j + k] *= pivotInv;
    }
    // Convert `a(k, k)` to contain the inverse element.
    a[kColOff + k] = pivotInv;

    // Subtract a suitable multiple of row `k` from all other rows to ensure column `k` becomes `0`.
    for (let row = 0; row < n; ++row) {
      if (row === k) continue;
      const factor = -a[lda * k + row];
      for (let j = 0; j < n; ++j) {
        const jColOff = lda * j;
        a[jColOff + row] += factor * a[jColOff + k];
      }
      // Convert element in column `k` to contain the inverse element.
      a[lda * k + row] = factor * pivotInv;
    }
  }
  // Permute columns back to correct order.
  for (let col = 0; col < n; ++col) {
    let targetCol = pivots[col];
    while (targetCol !== col) {
      const colOff = lda * col;
      const targetColOff = lda * targetCol;
      for (let i = 0; i < n; ++i) {
        const off1 = colOff + i;
        const off2 = targetColOff + i;
        const temp = a[off1];
        a[off1] = a[off2];
        a[off2] = temp;
      }
      const temp = pivots[col] = pivots[targetCol];
      pivots[targetCol] = targetCol;
      targetCol = temp;
    }
  }
  return determinant;
}

/**
 * Computes the inverse and returns the determinant.
 */
export function inverse<T extends TypedArray>(
    b: T, ldb: number, a: T, lda: number, n: number): number {
  copy(b, ldb, a, lda, n, n);
  return inverseInplace(b, ldb, n);
}


export function equal<T extends TypedArray>(
    a: T, lda: number, b: T, ldb: number, m: number, n: number) {
  for (let j = 0; j < n; ++j) {
    const offA = lda * j;
    const offB = ldb * j;
    for (let i = 0; i < m; ++i) {
      if (a[offA + i] !== b[offB + i]) return false;
    }
  }
  return true;
}

export function transpose<T extends TypedArray>(
    b: T, ldb: number, a: T, lda: number, m: number, n: number) {
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      b[j + i * ldb] = a[i + j * lda];
    }
  }
  return b;
}

export function
transformPoint<Out extends TypedArray, Matrix extends TypedArray, Vector extends TypedArray>(
    out: Out, mat: Matrix, matrixStride: number, vec: Vector, rank: number): Out {
  for (let i = 0; i < rank; ++i) {
    let sum = mat[matrixStride * rank + i];
    for (let j = 0; j < rank; ++j) {
      sum += mat[matrixStride * j + i] * vec[j];
    }
    out[i] = sum;
  }
  return out;
}

export function
transformVector<Out extends TypedArray, Matrix extends TypedArray, Vector extends TypedArray>(
    out: Out, mat: Matrix, matrixStride: number, vec: Vector, rank: number): Out {
  for (let i = 0; i < rank; ++i) {
    let sum = 0;
    for (let j = 0; j < rank; ++j) {
      sum += mat[matrixStride * j + i] * vec[j];
    }
    out[i] = sum;
  }
  return out;
}

/* START OF CHANGE: matrix functions */
export function rotateMatrix(matrix: Float64Array, xAngle: number, yAngle: number, zAngle: number) {
  let rollRot = rotHelper('roll', xAngle);
  let pitchRot = rotHelper('pitch', yAngle);
  let yawRot = rotHelper('yaw', zAngle);

  let temp1 = new Float64Array(16);
  multiply(temp1, 4, yawRot, 4, pitchRot, 4, 4, 4, 4);
  let temp2 = new Float64Array(16);
  multiply(temp2, 4, temp1, 4, rollRot, 4, 4, 4, 4);
  let temp3 = new Float64Array(16);
  multiply(temp3, 4, matrix, 4, temp2, 4, 4, 4, 4);

  return temp3;
}

export function scaleMatrix(matrix: Float64Array, xScale: number, yScale: number, zScale:number) {
  let scale_mat = createIdentity(Float64Array, 4);
  scale_mat[0] = scale_mat[0] * xScale;
  scale_mat[5] = scale_mat[5] * yScale;
  scale_mat[10] = scale_mat[10] * zScale;
  scale_mat[15] = 0;

  let scaledMat = new Float64Array(16);
  multiply(scaledMat, 4, matrix, 4, scale_mat, 4, 4, 4, 4);

  return scaledMat;
}

export function rotHelper(direction: string,  degree: number) {
  let rotMat = new Float64Array(16);

  let idxs: number[];
  if (direction === 'yaw') {
    idxs = [0, 1, 4, 5, 10, 15];
  }
  else if (direction === 'roll') {
    idxs = [5, 6, 9, 10, 0, 15];
  }
  else if (direction === 'pitch') {
    idxs = [0, 8, 2, 10, 5, 15];
  }
  else {
    return rotMat;
  }

  let sin_deg = Math.sin(degree * Math.PI / 180);
  let cos_deg = Math.cos(degree * Math.PI / 180);

  rotMat[idxs[0]] = cos_deg;
  rotMat[idxs[1]] = sin_deg;
  rotMat[idxs[2]] = -1*sin_deg;
  rotMat[idxs[3]] = cos_deg;
  rotMat[idxs[4]] = 1;
  rotMat[idxs[5]] = 0;

  return rotMat;
}

export function offsetMatrix(matrix: Float64Array, rotPoint: Float64Array, scale_x: number, scale_y: number, scale_z: number) {
  let rot_new = new Float64Array(3);
  rot_new[0] = rotPoint[0] * scale_x;
  rot_new[1] = rotPoint[1] * scale_y;
  rot_new[2] = rotPoint[2] * scale_z;

  let offset = calcOffset(matrix, rot_new);
  matrix[12] = offset[0] / scale_x;
  matrix[13] = offset[1] / scale_y;
  matrix[14] = offset[2] / scale_z;

  return matrix;
}

export function calcOffset<T extends TypedArray>(rotMat: T, rotPoint:Float64Array){
  // New offset is going to be (I-R)*rotPoint
  // Here R is the rotation matrix

  const eye = identity(new Float64Array(16), 4, 16);
  const diffMat = eye.map((a, i) => (a - rotMat[i]));
  const offset = new Float64Array(4);

  let point = new Float64Array(4);
  point[0] = rotPoint[0]; point[1] = rotPoint[1]; point[2] = rotPoint[2];
  point[3] = 1;

  return multiply(offset, 4, diffMat, 4, point, 4, 4, 4, 1);
}
/* END OF CHANGE: matrix functions */
