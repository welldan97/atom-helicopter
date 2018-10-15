'use babel';

import buildStatements from './buildStatements';
import statementToKeymap from './statementToKeymap';
import keys from './keys';
import statements from './statements';
//import fs from 'fs';
//import cson from 'cson';

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
  return {
    ...keymap,
    'atom-workspace atom-text-editor, body': {
      ...keymap['atom-workspace atom-text-editor, body'],
      'ctrl-space': 'command-palette:toggle',
      'ctrl-k': 'abort!',
    },
  };
  // const keymapCson = cson.createCSONString({
  //   ...keymap,
  //   'atom-workspace atom-text-editor, body': {
  //     ...keymap['atom-workspace atom-text-editor, body'],
  //     'ctrl-space': 'command-palette:toggle',
  //     'ctrl-k': 'abort!',
  //   },
  // });
  // fs.writeFileSync('keymap.cson', keymapCson);
}
