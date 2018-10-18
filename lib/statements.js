'use babel';

export default function({ nuclideQuickOpen, advancedOpenFile }) {
  return {
    context: 'atom-workspace atom-text-editor, body',
    main: {
      LEFT: 'core:move-left',
      LEFT2: [
        'editor:move-to-beginning-of-word',
        'editor:move-to-previous-subword-boundary',
      ],
      LEFT3: [
        'editor:move-to-first-character-of-line',
        'editor:move-to-beginning-of-line',
      ],
      RIGHT: {
        default: 'core:move-right',
        '.platform-darwin .tree-view': 'tree-view:expand-item',
      },
      RIGHT2: [
        'editor:move-to-end-of-word',
        'editor:move-to-next-subword-boundary',
      ],
      RIGHT3: 'editor:move-to-end-of-line',
      UP: {
        default: [
          'core:move-up',
          'editor:move-to-beginning-of-previous-paragraph',
          'editor:move-line-up',
        ],
        '.advanced-open-file atom-text-editor': [
          'advanced-open-file:move-cursor-up',
          'advanced-open-file:move-cursor-top',
        ],
      },
      UP2: {
        default: ['core:page-up', 'core:move-to-top'],
        '.advanced-open-file atom-text-editor':
          'advanced-open-file:move-cursor-top',
      },
      DOWN: {
        default: [
          'core:move-down',
          'editor:move-to-beginning-of-next-paragraph',
          'editor:move-line-down',
        ],
        '.advanced-open-file atom-text-editor': [
          'advanced-open-file:move-cursor-down',
          'advanced-open-file:move-cursor-bottom',
        ],
      },
      DOWN2: {
        default: ['core:page-down', 'core:move-to-bottom'],
        '.advanced-open-file atom-text-editor':
          'advanced-open-file:move-cursor-bottom',
      },
      IMPORT: 'core:paste',
      EXPORT: [
        'core:copy',
        'editor:duplicate-lines',
        'api-docs:search-under-cursor',
      ],
      SETUP: ['go-to-line:toggle', 'jumpy:toggle'],
    },

    select: {
      LEFT: 'core:select-left',
      LEFT2: [
        'editor:select-to-beginning-of-word',
        'editor:select-to-previous-subword-boundary',
      ],
      LEFT3: [
        'editor:select-to-first-character-of-line',
        'editor:select-to-beginning-of-line',
      ],
      RIGHT: 'core:select-right',
      RIGHT2: [
        'editor:select-to-end-of-word',
        'editor:select-to-next-subword-boundary',
      ],
      RIGHT3: 'editor:select-to-end-of-line',
      UP: [
        'core:select-up',
        'editor:select-to-beginning-of-previous-paragraph',
      ],
      UP2: ['core:select-page-up', 'core:select-to-top'],
      DOWN: [
        'core:select-down',
        'editor:select-to-beginning-of-next-paragraph',
      ],
      DOWN2: ['core:select-page-down', 'core:select-to-bottom'],
      EXPORT: 'editor:select-line',
      ALL: 'core:select-all',
    },

    delete: {
      LEFT: 'core:backspace',
      LEFT2: [
        'editor:delete-to-beginning-of-word',
        'editor:delete-to-beginning-of-subword',
      ],
      LEFT3: 'editor:delete-to-beginning-of-line',
      RIGHT: 'core:delete',
      RIGHT2: [
        'editor:delete-to-end-of-word',
        'editor:delete-to-end-of-subword',
      ],
      RIGHT3: 'editor:delete-to-end-of-line',

      UP2: 'core:delete-to-top',
      DOWN2: 'core:delete-to-bottom',

      EXPORT: [
        'editor:delete-line',
        'core:cut' /*, 'editor:toggle-line-comments'*/,
      ],
    },

    transpose: {
      RIGHT: 'atomic-emacs:transpose-chars',
      RIGHT2: 'atomic-emacs:transpose-words',
      UP: 'editor:move-line-up',
      DOWN: 'editor:move-line-down',
    },

    file: {
      LEFT: 'pane:show-previous-item',
      LEFT2: 'pane:show-item-1',
      LEFT3: 'pane:show-item-1',
      RIGHT: 'pane:show-next-item',
      RIGHT2: 'pane:show-item-9',
      RIGHT3: 'pane:show-item-9',

      IMPORT: [
        ...(nuclideQuickOpen
          ? ['nuclide-quick-open:find-anything-via-omni-search']
          : []),
        ...(!advancedOpenFile ? ['application:open-file'] : []),
        ...(advancedOpenFile ? ['advanced-open-file:toggle'] : []),
        'application:new-file',
        'pane:reopen-closed-item',
      ],

      EXPORT: [
        'core:save',
        'tree-view:duplicate',
        'core:save-as',
        'nuclide-clipboard-path:copy-absolute-path',
        'nuclide-clipboard-path:copy-project-relative-path',
        'copy-filepath-with-line-numbers:relative',
        'nuclide-clipboard-path:copy-basename-of-current-path',
        'nuclide-clipboard-path:copy-hostname-of-current-path',
        'nuclide-clipboard-path:copy-repository-relative-path',
      ],
      SETUP: ['tree-view:rename', 'fuzzy-finder:toggle-buffer-finder'],
      delete: {
        LEFT: ['core:close', 'tree-view:remove'],
        LEFT2: 'tabs:close-tabs-to-right',
        LEFT3: 'tabs:close-tabs-to-right',
        RIGHT: ['core:close', 'tree-view:remove'],
        RIGHT2: 'tabs:close-tabs-to-right',
        RIGHT3: 'tabs:close-tabs-to-right',

        EXPORT: ['core:close', 'tree-view:remove'],
        ALL: ['tabs:close-other-tabs', 'tabs:close-all-tabs'],
      },
    },

    search: {
      LEFT: [
        'find-and-replace:find-previous',
        'find-and-replace:find-previous-selected',
      ],
      RIGHT: [
        'find-and-replace:find-next',
        'find-and-replace:find-next-selected',
        'find-and-replace:replace-next',
      ],
      ALL: [
        'find-and-replace:find-all',
        'find-and-replace:select-all',
        'find-and-replace:replace-all',
      ],
      SETUP: [
        'find-and-replace:show',
        'find-and-replace:show-replace',
        'find-and-replace:toggle-regex-option',
        'find-and-replace:toggle-case-option',
        'find-and-replace:toggle-selection-option',
        'find-and-replace:toggle-whole-word-option',
      ],
      //find-and-replace:select-undo
      select: {
        RIGHT: ['find-and-replace:select-next', 'find-and-replace:select-skip'],
        ALL: ['find-and-replace:select-all', 'find-and-replace:find-all'],
      },
      undo: {
        UP: 'find-and-replace:select-undo',
      },
    },

    undo: {
      UP: 'core:undo',
      DOWN: 'core:redo',
    },

    panes: {
      LEFT: [
        'window:focus-pane-on-left',
        'pane:split-left-and-copy-active-item',
        'window:toggle-left-dock',
      ],

      RIGHT: {
        default: [
          'window:focus-pane-on-right',
          'pane:split-right-and-copy-active-item',
          'window:toggle-right-dock',
        ],
        '.tree-view': [
          'tree-view:unfocus',
          'pane:split-right-and-copy-active-item',
          'window:toggle-right-dock',
        ],
      },
      UP: ['window:focus-pane-above', 'pane:split-up-and-copy-active-item'],
      DOWN: [
        'window:focus-pane-below',
        'pane:split-down-and-copy-active-item',
        'window:toggle-bottom-dock',
      ],

      EXPORT: 'hey-pane:toggle-focus-of-active-pane',
      delete: {
        LEFT: 'core:close',
        RIGHT: 'core:close',
        EXPORT: 'core:close',
      },
      // "ctrl-x shift-s": 'outline-view:toggle'
      // "ctrl-x ctrl-x ctrl-n ctrl-h": 'lcov-info:toggle'
      // "ctrl-x ctrl-x ctrl-s ctrl-n": 'minimap:toggle'
    },

    bookmarks: {
      DOWN: 'bookmarks:jump-to-next-bookmark',
      UP: 'bookmarks:jump-to-previous-bookmark',
      EXPORT: 'bookmarks:toggle-bookmark',
      delete: {
        ALL: 'bookmarks:clear-bookmarks',
      },
      SETUP: 'bookmarks:view-all',
    },
    //
    //
    // "ctrl-i ctrl-n": 'diagnostics:go-to-next-diagnostic'
    // "ctrl-i ctrl-t": 'diagnostics:go-to-previous-diagnostic'
    // "ctrl-i ctrl-w": 'diagnostics:go-to-first-diagnostic'
    // "ctrl-i ctrl-v": 'diagnostics:go-to-last-diagnostic'
    // "ctrl-i ctrl-g": 'diagnostics:show-actions-at-position'
    //
    // # misc
    // "ctrl-y": 'abort!'
    // "ctrl-y ctrl-h": 'linter-eslint:fix-file'
    // "ctrl-y h": 'prettier:format'
    // "ctrl-y ctrl-t": 'editor:toggle-line-comments'
    // "ctrl-y ctrl-s": 'command-palette:toggle'
  };
}
