/**
 * @license
 * Copyright 2016 Google Inc.
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

'use strict';

const path = require('path');
const minimist = require('minimist');
const glob = require('glob');
const {parseDefines} = require('./esbuild-cli');
const {createEntryPointFile, getCommonPlugins} = require('./esbuild');

const getEntryPoint = exports.getEntryPoint = (testPattern) => {
  const argv = minimist(process.argv, {string: ['pattern']});
  let userPattern = argv['pattern'];
  let testPaths = glob.sync(testPattern);
  const userCwd = process.env.INIT_CWD || process.cwd();
  if (userPattern !== undefined) {
    const userPaths = new Set(glob.sync(path.resolve(userCwd, userPattern)));
    testPaths = testPaths.filter(x => userPaths.has(x));
  }
  return createEntryPointFile('test', undefined, testPaths);
};

exports.getEntryPointConfig = (testPattern, preprocessors = []) => {
  const entryPoint = getEntryPoint(testPattern);
  return {
    files: [{
      pattern: entryPoint,
      watched: true,
      type: 'js',
    }],
    preprocessors: {
      [entryPoint]: ['esbuild', ...preprocessors],
    },
  };
};

exports.getEsbuildConfig = () => {
  const argv = minimist(process.argv, {string: ['define']});
  return {
    target: 'es2019',
    plugins: getCommonPlugins(),
    loader: {
      '.json': 'json',
      '.dat': 'binary',
      '.npy': 'binary',
    },
    define: parseDefines(argv.define),
  };
};
