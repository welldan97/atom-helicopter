'use babel';

export default function fixShift(currentKeymap, key) {
  return key
    .split(' ')
    .map(k => {
      const keys = k.split('-');
      if (keys[keys.length - 1] === '') {
        keys.length = keys.length - 1;
        keys[keys.length - 1] = '-';
      }

      const shiftIndex = keys.indexOf('shift');
      if (shiftIndex >= 0) {
        keys[keys.length - 1] = `shift-${
          Object.values(currentKeymap).find(
            key => key.unmodified === keys[keys.length - 1],
          ).withShift
        }`;

        return keys.filter(k => k !== 'shift').join('-');
      }

      return keys.join('-');
    })
    .join(' ');
}
