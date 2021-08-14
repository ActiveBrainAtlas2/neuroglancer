// import fetch from 'cross-fetch';

// class HttpError extends Error {
//         url: string;
//         status: number;
//         statusText: string;
      
//         constructor(url: string, status: number, statusText: string) {
//           let message = `Fetching ${JSON.stringify(url)} resulted in HTTP error ${status}`;
//           if (statusText) {
//             message += `: ${statusText}`;
//           }
//           message += '.';
//           super(message);
//           this.name = 'HttpError';
//           this.message = message;
//           this.url = url;
//           this.status = status;
//           this.statusText = statusText;
//         }
      
//         static fromResponse(response: Response) {
//           return new HttpError(response.url, response.status, response.statusText);
//         }
      
//         static fromRequestError(input: RequestInfo, error: unknown) {
//           if (error instanceof TypeError) {
//             let url: string;
//             if (typeof input === 'string') {
//               url = input;
//             } else {
//               url = input.url;
//             }
//             return new HttpError(url, 0, 'Network or CORS error');
//           }
//           return error;
//         }
//       }

// async function fetchOk(input: RequestInfo, init?: RequestInit): Promise<Response> {
//     let response: Response;
//     try {
//       response = await fetch(input, init);
//     } catch (error) {
//       throw HttpError.fromRequestError(input, error);
//     }
//     if (!response.ok) throw HttpError.fromResponse(response);
//     return response;
//   }


// // interface TransformJSON {
// //     rotation: Array<Array<number>>;
// //     translation: Array<Array<number>>;
// // }

// // async function get_rotation() : Promise<number[][]> {
// //     const transformURL = `http://localhost:8000/rotation/DK39/2/2`;

// // try {
// //     const transformJSON:TransformJSON = await fetchOk(transformURL, {
// //     method: 'GET',
// //     }).then(response => {
// //     return response.json();
// //     });
// //     const {rotation, translation} = transformJSON;
// //     console.log(translation)
// //     return rotation
// // }
// // catch(e){ return e.message}
// // finally{}
// // }

// // const rotation = get_rotation()
// // console.log(rotation)

// // get_rotation().then((result) => {
// //         console.log(result)
// //       });

// interface LandmarkListJSON {
//     land_marks: Array<string>,
//   }

// async function run() {
//     let result = await get_landmarks();
//     return result;
// }

// async function get_landmarks(){
//     try {
//     const landmarkURL = `http://localhost:8000/landmark_list`;
//     const landmarkListJSON:LandmarkListJSON = await fetchOk(landmarkURL, {
//     method: 'GET',
//     }).then(response => {
//     return response.json();});
//     const {land_marks} = landmarkListJSON;
//     return land_marks;
// }
//     catch (error) {
//         return error.message
//     }
// }


// const ld = run()
// console.log(ld)

// const promiseB = process.binding('util').getPromiseDetails(get_landmarks())[1]

// console.log(promiseB)

// // console.log(get_landmarks())



// // const land_marks = get_landmarks().then(response => {
// //     console.log(response)
// //     // var n_landmark = response.length
// //     // var list:string[] = []
// //     // for (let i = 0; i < n_landmark; i++){
// //     //     // const landmarki = response[i];
// //     //     list.push('1')}
// //     return '1';});
    
// // console.log(land_marks)

// // console.log(get_landmarks())

// // get_landmarks().then((result) => {
// //     console.log(result)
// //   });

