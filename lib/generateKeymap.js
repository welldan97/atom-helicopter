'use babel';

import buildStatements from './buildStatements';
import statementToKeymap from './statementToKeymap';
import keys from './keys';
import normalizeKeys from './normalizeKeys';
import statements from './statements';

export default function generateKeymap(currentKeymap) {
  const { context, ...justStatements } = statements;
  const builtStatements = buildStatements(justStatements, context);
  const normalizedKeys = normalizeKeys(keys, currentKeymap);
  console.log(normalizedKeys);
  const keymap = builtStatements.reduce(
    //(keymap, s) => ({ ...keymap, ...statementToKeymap(s, keys) }),
    (keymap, s) => {
      const [[key, value]] = Object.entries(
        statementToKeymap(s, normalizedKeys, currentKeymap),
      );
      return { ...keymap, [key]: { ...keymap[key], ...value } };
    },
    {},
  );
  return keymap;
}
