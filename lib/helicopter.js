'use babel';
//import KeyboardLayout from 'keyboard-layout';
import layouts from './layouts/index';

import generateKeymap from './generateKeymap';

const SOURCE = 'helicopter';
let subscription;

function updateKeymap(value) {
  atom.keymaps.removeBindingsFromSource(SOURCE);
  //const currentKeymap = KeyboardLayout.getCurrentKeymap();
  const currentKeymap =
    layouts[
      {
        Qwerty: 'qwerty',
        Dvorak: 'dvorak',
        'Programmer Dvorak': 'programmerDvorak',
      }[value]
    ];
  const keymap = generateKeymap(currentKeymap, {
    nuclideQuickOpen: atom.packages.isPackageLoaded('nuclide-quick-open'),
    advancedOpenFile: atom.packages.isPackageLoaded('advanced-open-file'),
  });
  atom.keymaps.add(SOURCE, keymap);
}

export default {
  config: {
    keyboardLayout: {
      type: 'string',
      default: 'Qwerty',
      enum: ['Qwerty', 'Dvorak', 'Programmer Dvorak'],
    },
  },

  activate(state) {
    updateKeymap(atom.config.get('helicopter.keyboardLayout'));
    subscription = atom.config.observe(
      'helicopter.keyboardLayout',
      updateKeymap,
    );

    //subscription = KeyboardLayout.observeCurrentKeyboardLayout(updateKeymap);
  },

  deactivate() {
    atom.keymaps.removeBindingsFromSource(SOURCE);
    subscription.dispose();
  },

  serialize() {
    // TODO
  },
};
