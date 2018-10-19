'use babel';
import KeyboardLayout from 'keyboard-layout';

import generateKeymap from './generateKeymap';

const SOURCE = 'helicopter';
let subscription;

function updateKeymap() {
  atom.keymaps.removeBindingsFromSource(SOURCE);
  const currentKeymap = KeyboardLayout.getCurrentKeymap();
  const keymap = generateKeymap(currentKeymap, {
    nuclideQuickOpen: atom.packages.isPackageLoaded('nuclide-quick-open'),
    advancedOpenFile: atom.packages.isPackageLoaded('advanced-open-file'),
  });
  atom.keymaps.add(SOURCE, keymap);
}

export default {
  activate(state) {
    updateKeymap();
    subscription = KeyboardLayout.observeCurrentKeyboardLayout(updateKeymap);
  },

  deactivate() {
    atom.keymaps.removeBindingsFromSource(SOURCE);
    subscription.dispose();
  },

  serialize() {
    // TODO
  },
};
