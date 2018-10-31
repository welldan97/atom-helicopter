'use babel';
import qwerty from './layouts/qwerty.json';

function normalizeKey(key, currentKeymap) {
  const code = Object.entries(qwerty).find(
    ([k, { unmodified }]) => unmodified === key,
  )[0];

  return currentKeymap[code].unmodified;
}

export default function normalizeKeys(keys, currentKeymap) {
  return {
    ...keys,
    args: Object.entries(keys.args).reduce(
      (args, [k, v]) => ({
        ...args,
        [normalizeKey(k, currentKeymap)]: v,
      }),
      {},
    ),
    methods: Object.entries(keys.methods).reduce((methods, [k, v]) => {
      const splitKeys = k.split('-');
      let resultKey;
      if (splitKeys.length > 1 && splitKeys[1].length === 1)
        resultKey = [
          splitKeys[0],
          normalizeKey(splitKeys[1], currentKeymap),
        ].join('-');
      else resultKey = splitKeys.join('-');
      return { ...methods, [resultKey]: v };
    }, {}),
    alternatives: keys.alternatives
      .split('')
      .map(k => normalizeKey(k, currentKeymap))
      .join(''),
  };
}
