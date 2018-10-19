'use babel';
const exceptions = [':', '"'];

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
        const withShift = Object.values(currentKeymap).find(
          key => key.unmodified === keys[keys.length - 1],
        ).withShift;
        if (exceptions.includes(withShift)) keys[keys.length - 1] = withShift;
        else keys[keys.length - 1] = `shift-${withShift}`;

        return keys.filter(k => k !== 'shift').join('-');
      }

      return keys.join('-');
    })
    .join(' ');
}
