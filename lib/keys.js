'use babel';

export default {
  methods: {
    ctrl: 'main',
    'ctrl-shift': 'select',
    'ctrl-alt': 'delete',
    //alt: 'alternative',
    //'ctrl-alt-shift': 'delete-alternative',
    //'alt-shift': 'select-alternative',

    'ctrl-f': 'search',
    'ctrl-g': 'bookmarks',

    'ctrl-r': 'transpose',

    'ctrl-t': 'undo',
    'ctrl-v': 'file',
    'ctrl-b': 'panes',
  },

  prefixes: ['ctrl', '', 'alt', 'cmd'],

  args: {
    h: 'LEFT3',
    j: 'LEFT',
    k: 'UP',
    l: 'DOWN',
    ';': 'RIGHT',
    "'": 'RIGHT3',

    y: 'EXPORT',
    u: 'LEFT2',
    i: 'UP2',
    o: 'DOWN2',
    p: 'RIGHT2',
    '[': 'IMPORT',
    ']': 'SETUP',

    n: 'THIS',
    '/': 'ALL',
    //'.': 'CREATE',
    //w: 'EXPORT',
    //m: 'SETUP',
    //'*': 'UP4',
    //')': 'UP3',
    //'+': 'DOWN3',
    //']': 'DOWN4',
  },
  alternatives: "hjkl;'yuiop[nm./",
};
