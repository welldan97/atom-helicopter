'use babel';
const shiftKeys = {
  '-': '_',
  '/': '?',
  '@': '^',
  '\\': 'shift-|',

  '*': '0',
  ')': '2',
  '+': '4',
  ']': '6',
};

export default function fixShift(key) {
  return key
    .split(' ')
    .map(k => {
      const keys = k.split('-');
      if (keys[keys.length - 1] === '') {
        keys.length = keys.length - 1;
        keys[keys.length - 1] = '-';
      }

      const shiftIndex = keys.indexOf('shift');

      if (shiftIndex >= 0 && keys[keys.length - 1] in shiftKeys) {
        keys[keys.length - 1] = shiftKeys[keys[keys.length - 1]];
        return keys.filter(k => k !== 'shift').join('-');
      }

      return keys.join('-');
    })
    .join(' ');
}
