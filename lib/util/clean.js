/*
Based on https://github.com/sindresorhus/clean-stack (MIT License)
Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
cf: https://github.com/sindresorhus/clean-stack/blob/main/license
*/

function filterStackTrace(stack, filter = []){

  if (typeof stack !== 'string') return undefined;
  
  const at = /\s+at.*[(\s](.*)\)?/;
  const internal = /^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/;
  
  const electron = [
    ".app/Contents/Resources/electron.asar",
    ".app/Contents/Resources/default_app.asar"
  ];
  
  const ignore = electron.concat(filter);

  return stack
         .replace(/\\/g, '/')
         .split('\n')
         .filter(line => {
            const extract = line.match(at);
            if (extract === null || !extract[1]) return true;
            const match = extract[1];
            if (ignore.some(el => match.includes(el))) return false;
            return !internal.test(match);
         })
         .filter(line => line.trim() !== '')
         .join('\n');   
}

export { filterStackTrace };