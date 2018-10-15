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

function resultToKeymap({ result, variation }, statement, keys) {
  // console.log({ result, variation, statement, keys });
  const { operators, operands } = statement;
  const operatorKey = valuesToKeys(operators, keys.operators);
  const baseOperandKey = valuesToKeys(operands, keys.operands).join(' ');
  //console.log({ operatorKey, result });
  const operandKey = keyWithPrefix(baseOperandKey, keys.prefixes[variation]);
  const mainOperandKey = keyWithPrefix(baseOperandKey, keys.prefixes[0]);
  const alternativesKey = keyWithPrefix(
    keys.alternatives[variation],
    keys.prefixes[0],
  );

  if (modifiers.some(m => operatorKey.includes(m))) {
    //console.log({ operatorKey, result, variation, statement });
    if (modifiers.includes(operatorKey[0])) {
      if (variation === 2) {
        //  console.log('0');
        const newOperatorKey = [...operatorKey];
        newOperatorKey[operatorKey.length - 1] = 'cmd';
        return {
          [fixShift(`${newOperatorKey.join(' ')}-${baseOperandKey}`)]: result,
        };
      } else if (variation === 1) {
        //  console.log('0');
        const newOperatorKey = [...operatorKey];
        newOperatorKey[operatorKey.length - 1] =
          modifiersMap[newOperatorKey[operatorKey.length - 1]];
        return {
          [fixShift(`${newOperatorKey.join(' ')}-${baseOperandKey}`)]: result,
        };
      } else {
        console.log('1');
        return {
          [fixShift(`${operatorKey.join(' ')}-${baseOperandKey}`)]: result,
        };
      }
    }
    const newOperatorKey = [...operatorKey];
    newOperatorKey[operatorKey.length - 1] =
      modifiersMap[newOperatorKey[operatorKey.length - 1]];
    if (variation === 1) {
      //  console.log('2');
      return {
        [fixShift(`${newOperatorKey.join(' ')}-${baseOperandKey}`)]: result,
        /*[fixShift(
        `${operatorKey.join(' ')} ${operatorKey.join(
          ' ',
        )} ${mainOperandKey} ${alternativesKey}`,
      )]: result,*/
      };
    }
    //  console.log('3');
    return {
      [fixShift(`${operatorKey.join(' ')}-${baseOperandKey}`)]: result,
      /*[fixShift(
      `${operatorKey.join(' ')} ${operatorKey.join(
        ' ',
      )} ${mainOperandKey} ${alternativesKey}`,
    )]: result,*/
    };
  }
  //  console.log('4');
  return {
    [fixShift(`${operatorKey.join(' ')} ${operandKey}`)]: result,
    [fixShift(
      `${operatorKey.join(' ')} ${operatorKey.join(
        ' ',
      )} ${mainOperandKey} ${alternativesKey}`,
    )]: result,
  };

  //
  // const simpleKeys = ['ctrl', 'shift'];
  // if (simpleKeys.indexOf(modifierKey) > -1)
  //   return [fixShift(`${modifierKey}-${objectKey}`)];
  // else
  //   return [
  //     fixShift(`${modifierKey} ${objectKey}`),
  //     ...simpleKeys.map(k => fixShift(`${modifierKey} ${k}-${objectKey}`)),
  //   ];
}

export default function(statement, keys) {
  return {
    [statement.context]: statement.results.reduce(
      (keymap, result, variation) => {
        console.log(resultToKeymap({ result, variation }, statement, keys));
        return {
          ...keymap,
          ...resultToKeymap({ result, variation }, statement, keys),
        };
      },
      {},
    ),
  };
}
