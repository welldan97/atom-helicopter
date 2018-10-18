'use babel';

import buildStatements from './buildStatements';
import statementToKeymap from './statementToKeymap';
import keys from './keys';
import normalizeKeys from './normalizeKeys';
import statements from './statements';

export default function generateKeymap(currentKeymap, packages) {
  const { context, ...justStatements } = statements(packages);
  const builtStatements = buildStatements(justStatements, context);
  const normalizedKeys = normalizeKeys(keys, currentKeymap);
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
