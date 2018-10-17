'use babel';
import KeyboardLayout from 'keyboard-layout';

import generateKeymap from './generateKeymap';

const SOURCE = 'jkl';
let subscription;

function updateKeymap() {
  atom.keymaps.removeBindingsFromSource(SOURCE);
  const currentKeymap = KeyboardLayout.getCurrentKeymap();
  const keymap = generateKeymap(currentKeymap);
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
