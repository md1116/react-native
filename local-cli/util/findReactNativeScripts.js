/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
'use strict';

const path = require('path');
const fs = require('fs');

function findReactNativeScripts(): ?string {
  const executablePath = path.resolve(
    'node_modules',
    '.bin',
    'react-native-scripts'
  );
  if (fs.existsSync(executablePath)) {
    return executablePath;
  }
  return null;
}

module.exports = findReactNativeScripts;
