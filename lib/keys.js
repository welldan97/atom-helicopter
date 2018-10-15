'use babel';

export default {
  operators: {
    ctrl: 'main',
    'ctrl-shift': 'select',
    'ctrl-alt': 'delete',
    //alt: 'alternative',
    //'ctrl-alt-shift': 'delete-alternative',
    //'alt-shift': 'select-alternative',

    'ctrl-u': 'search',
    'ctrl-i': 'bookmarks',

    'ctrl-p': 'transpose',

    'ctrl-j': 'undo',
    'ctrl-k': 'file',
    'ctrl-x': 'panes',
  },

  prefixes: ['ctrl', '', 'alt'],

  operands: {
    d: 'LEFT3',
    h: 'LEFT',
    t: 'UP',
    n: 'DOWN',
    s: 'RIGHT',
    '-': 'RIGHT3',

    f: 'EXPORT',
    g: 'LEFT2',
    c: 'UP2',
    r: 'DOWN2',
    l: 'RIGHT2',
    '/': 'IMPORT',
    '@': 'SETUP',

    b: 'ALL',
    v: 'CREATE',
    //w: 'EXPORT',
    //m: 'SETUP',
    //'*': 'UP4',
    //')': 'UP3',
    //'+': 'DOWN3',
    //']': 'DOWN4',
  },

  alternatives: 'dhtns-fgcrl/@\\vwm',
};
