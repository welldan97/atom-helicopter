'use babel';
import qwerty from './qwerty.json';

function normalizeKey(key, currentKeymap) {
  console.log(key);
  const code = Object.entries(qwerty).find(
    ([k, { unmodified }]) => unmodified === key,
  )[0];

  return currentKeymap[code].unmodified;
}

export default function normalizeKeys(keys, currentKeymap) {
  return {
    ...keys,
    operands: Object.entries(keys.operands).reduce(
      (operands, [k, v]) => ({
        ...operands,
        [normalizeKey(k, currentKeymap)]: v,
      }),
      {},
    ),
    operators: Object.entries(keys.operators).reduce((operators, [k, v]) => {
      const splitKeys = k.split('-');
      let resultKey;
      if (splitKeys.length > 1 && splitKeys[1].length === 1)
        resultKey = [
          splitKeys[0],
          normalizeKey(splitKeys[1], currentKeymap),
        ].join('-');
      else resultKey = splitKeys.join('-');
      return { ...operators, [resultKey]: v };
    }, {}),
    alternatives: keys.alternatives
      .split('')
      .map(k => normalizeKey(k, currentKeymap))
      .join(''),
  };
}
