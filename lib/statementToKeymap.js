'use babel';

import fixShift from './fixShift';
const modifiers = [
  'ctrl',
  'alt',
  'shift',
  'ctrl-alt',
  'ctrl-shift',
  'alt-shift',
  'ctrl-alt-shift',
];

const modifiersMap = {
  ctrl: 'alt',
  'ctrl-shift': 'alt-shift',
  'ctrl-alt': 'ctrl-alt-shift',
};

function valuesToKeys(values, keys) {
  return values.map(
    value => Object.entries(keys).find(([k, v]) => v === value)[0],
  );
}

function keyWithPrefix(key, prefix) {
  if (prefix === '') return key;
  return `${prefix}-${key}`;
}

function resultToKeymap({ result, variation }, statement, keys, currentKeymap) {
  // console.log({ result, variation, statement, keys });
  const { methods, args } = statement;
  const methodKey = valuesToKeys(methods, keys.methods);
  const baseArgKey = valuesToKeys(args, keys.args).join(' ');
  //console.log({ methodKey, result });
  const argKey = keyWithPrefix(baseArgKey, keys.prefixes[variation]);
  const mainArgKey = keyWithPrefix(baseArgKey, keys.prefixes[0]);
  const alternativesKey = keyWithPrefix(
    keys.alternatives[variation],
    keys.prefixes[0],
  );

  if (modifiers.some(m => methodKey.includes(m))) {
    //console.log({ methodKey, result, variation, statement });
    if (modifiers.includes(methodKey[0])) {
      if (variation === 2) {
        //  console.log('0');
        const newMethodKey = [...methodKey];
        newMethodKey[methodKey.length - 1] = 'cmd';
        return {
          [fixShift(
            currentKeymap,
            `${newMethodKey.join(' ')}-${baseArgKey}`,
          )]: result,
        };
      } else if (variation === 1) {
        //  console.log('0');
        const newMethodKey = [...methodKey];
        newMethodKey[methodKey.length - 1] =
          modifiersMap[newMethodKey[methodKey.length - 1]];
        return {
          [fixShift(
            currentKeymap,
            `${newMethodKey.join(' ')}-${baseArgKey}`,
          )]: result,
        };
      } else {
        //console.log('1');
        return {
          [fixShift(
            currentKeymap,
            `${methodKey.join(' ')}-${baseArgKey}`,
          )]: result,
        };
      }
    }
    const newMethodKey = [...methodKey];
    newMethodKey[methodKey.length - 1] =
      modifiersMap[newMethodKey[methodKey.length - 1]];
    if (variation === 1) {
      //  console.log('2');
      return {
        [fixShift(
          currentKeymap,
          `${newMethodKey.join(' ')}-${baseArgKey}`,
        )]: result,
        /*[fixShift(currentKeymap,
        `${methodKey.join(' ')} ${methodKey.join(
          ' ',
        )} ${mainArgKey} ${alternativesKey}`,
      )]: result,*/
      };
    }
    //  console.log('3');
    return {
      [fixShift(
        currentKeymap,
        `${methodKey.join(' ')}-${baseArgKey}`,
      )]: result,
      /*[fixShift(currentKeymap,
      `${methodKey.join(' ')} ${methodKey.join(
        ' ',
      )} ${mainArgKey} ${alternativesKey}`,
    )]: result,*/
    };
  }
  //  console.log('4');
  return {
    [fixShift(currentKeymap, `${methodKey.join(' ')} ${argKey}`)]: result,
    [fixShift(
      currentKeymap,
      `${methodKey.join(' ')} ${methodKey.join(
        ' ',
      )} ${mainArgKey} ${alternativesKey}`,
    )]: result,
  };

  //
  // const simpleKeys = ['ctrl', 'shift'];
  // if (simpleKeys.indexOf(modifierKey) > -1)
  //   return [fixShift(currentKeymap, `${modifierKey}-${objectKey}`)];
  // else
  //   return [
  //     fixShift(currentKeymap, `${modifierKey} ${objectKey}`),
  //     ...simpleKeys.map(k => fixShift(currentKeymap, `${modifierKey} ${k}-${objectKey}`)),
  //   ];
}

export default function(statement, keys, currentKeymap) {
  return {
    [statement.context]: statement.results.reduce(
      (keymap, result, variation) => {
        //console.log(resultToKeymap({ result, variation }, statement, keys));
        return {
          ...keymap,
          ...resultToKeymap(
            { result, variation },
            statement,
            keys,
            currentKeymap,
          ),
        };
      },
      {},
    ),
  };
}
