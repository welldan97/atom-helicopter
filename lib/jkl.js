'use babel';

import generateKeymap from './generateKeymap';
import { CompositeDisposable } from 'atom';

const source = 'jkl';
export default {
  jklView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    const keymap = generateKeymap();
    atom.keymaps.add(source, keymap);
  },

  deactivate() {
    atom.keymaps.removeBindingsFromSource(source);
  },

  serialize() {
    // TODO
  },
};
