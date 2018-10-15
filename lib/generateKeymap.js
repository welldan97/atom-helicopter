'use babel';

import buildStatements from './buildStatements';
import statementToKeymap from './statementToKeymap';
import keys from './keys';
import statements from './statements';

export default function main() {
  const { context, ...justStatements } = statements;
  const builtStatements = buildStatements(justStatements, context);
  const keymap = builtStatements.reduce(
    //(keymap, s) => ({ ...keymap, ...statementToKeymap(s, keys) }),
    (keymap, s) => {
      const [[key, value]] = Object.entries(statementToKeymap(s, keys));
      return { ...keymap, [key]: { ...keymap[key], ...value } };
    },
    {},
  );
  return keymap;
}
