'use babel';

import JklView from './jkl-view';
import { CompositeDisposable } from 'atom';

export default {
  jklView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.jklView = new JklView(state.jklViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.jklView.getElement(),
      visible: false,
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'jkl:toggle': () => this.toggle(),
      }),
    );
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.jklView.destroy();
  },

  serialize() {
    return {
      jklViewState: this.jklView.serialize(),
    };
  },

  toggle() {
    console.log(atom.keymaps);
    return;
    console.log('Jkl was toggled!');
    return this.modalPanel.isVisible()
      ? this.modalPanel.hide()
      : this.modalPanel.show();
  },
};
