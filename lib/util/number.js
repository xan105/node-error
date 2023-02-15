/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

const cast = (n) => new Uint32Array([n])[0]; //cast signed to unsigned
const toHexString = (n) => `0x${n.toString(16).toUpperCase()}`;
export { cast, toHexString };