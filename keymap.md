![Keymap](/keymap.png)

| Modifiers                 | Method               |
| ------------------------- | -------------------- |
| <kbd>ctrl</kbd>           | <kbd>*main*</kbd>    |
| <kbd>alt</kbd>            | <kbd>*main²*</kbd>   |
| <kbd>ctrl-shift</kbd>     | <kbd>*select*</kbd>  |
| <kbd>alt-shift</kbd>      | <kbd>*select²*</kbd> |
| <kbd>ctrl-alt</kbd>       | <kbd>*delete*</kbd>  |
| <kbd>ctrl-alt-shift</kbd> | <kbd>*delete²*</kbd> |

# Main
| Statement                               | Keystroke         | Command                                        |
| --------------------------------------- | ----------------- | ---------------------------------------------- |
| <kbd>*main*</kbd> + <kbd>*←*</kbd>      | <kbd>ctrl-j</kbd> | core:move-left                                 |
| <kbd>*main*</kbd> + <kbd>*⇇*</kbd>      | <kbd>ctrl-u</kbd> | editor:move-to-beginning-of-word               |
| <kbd>*main*</kbd> + <kbd>*⇇²*</kbd>     | <kbd>alt-u</kbd>  | editor:move-to-previous-subword-boundary       |
| <kbd>*main*</kbd> + <kbd>*⇤*</kbd>      | <kbd>ctrl-h</kbd> | editor:move-to-first-character-of-line         |
| <kbd>*main*</kbd> + <kbd>*⇤²*</kbd>     | <kbd>alt-h</kbd>  | editor:move-to-beginning-of-line               |
| <kbd>*main*</kbd> + <kbd>*→*</kbd>      | <kbd>ctrl-;</kbd> | core:move-right                                |
| <kbd>*main*</kbd> + <kbd>*⇉*</kbd>      | <kbd>ctrl-p</kbd> | editor:move-to-end-of-word                     |
| <kbd>*main*</kbd> + <kbd>*⇉²*</kbd>     | <kbd>alt-p</kbd>  | editor:move-to-next-subword-boundary           |
| <kbd>*main*</kbd> + <kbd>*⇥*</kbd>      | <kbd>ctrl-'</kbd> | editor:move-to-end-of-line                     |
| <kbd>*main*</kbd> + <kbd>*↑*</kbd>      | <kbd>ctrl-k</kbd> | core:move-up                                   |
| <kbd>*main*</kbd> + <kbd>*↑²*</kbd>     | <kbd>alt-k</kbd>  | editor:move-to-beginning-of-previous-paragraph |
| <kbd>*main*</kbd> + <kbd>*↑³*</kbd>     | <kbd>cmd-k</kbd>  | editor:move-line-up                            |
| <kbd>*main*</kbd> + <kbd>*↑*</kbd>      | <kbd>ctrl-k</kbd> | advanced-open-file:move-cursor-up              |
| <kbd>*main*</kbd> + <kbd>*↑²*</kbd>     | <kbd>alt-k</kbd>  | advanced-open-file:move-cursor-top             |
| <kbd>*main*</kbd> + <kbd>*⇈*</kbd>      | <kbd>ctrl-i</kbd> | core:page-up                                   |
| <kbd>*main*</kbd> + <kbd>*⇈²*</kbd>     | <kbd>alt-i</kbd>  | core:move-to-top                               |
| <kbd>*main*</kbd> + <kbd>*⇈*</kbd>      | <kbd>ctrl-i</kbd> | advanced-open-file:move-cursor-top             |
| <kbd>*main*</kbd> + <kbd>*↓*</kbd>      | <kbd>ctrl-l</kbd> | core:move-down                                 |
| <kbd>*main*</kbd> + <kbd>*↓²*</kbd>     | <kbd>alt-l</kbd>  | editor:move-to-beginning-of-next-paragraph     |
| <kbd>*main*</kbd> + <kbd>*↓³*</kbd>     | <kbd>cmd-l</kbd>  | editor:move-line-down                          |
| <kbd>*main*</kbd> + <kbd>*⇊*</kbd>     | <kbd>ctrl-o</kbd> | core:page-down                                 |
| <kbd>*main*</kbd> + <kbd>*⇊²*</kbd>    | <kbd>alt-o</kbd>  | core:move-to-bottom                            |
| <kbd>*main*</kbd> + <kbd>*⤵*</kbd>      | <kbd>ctrl-[</kbd> | core:paste                                     |
| <kbd>*main*</kbd> + <kbd>*⤴*</kbd>      | <kbd>ctrl-y</kbd> | core:copy                                      |
| <kbd>*main*</kbd> + <kbd>*THIS*</kbd>   | <kbd>ctrl-n</kbd> | editor:duplicate-lines                         |
| <kbd>*main*</kbd> + <kbd>*SETUP*</kbd>  | <kbd>ctrl-]</kbd> | go-to-line:toggle                              |

# Select

| Statement                               | Keystroke               | Command                                          |
| --------------------------------------- | ----------------------- | ------------------------------------------------ |
| <kbd>*select*</kbd> + <kbd>*←*</kbd>    | <kbd>ctrl-shift-J</kbd> | core:select-left                                 |
| <kbd>*select*</kbd> + <kbd>*⇇*</kbd>    | <kbd>ctrl-shift-U</kbd> | editor:select-to-beginning-of-word               |
| <kbd>*select*</kbd> + <kbd>*⇇²*</kbd>   | <kbd>alt-shift-U</kbd>  | editor:select-to-previous-subword-boundary       |
| <kbd>*select*</kbd> + <kbd>*⇤*</kbd>    | <kbd>ctrl-shift-H</kbd> | editor:select-to-first-character-of-line         |
| <kbd>*select*</kbd> + <kbd>*⇤²*</kbd>   | <kbd>alt-shift-H</kbd>  | editor:select-to-beginning-of-line               |
| <kbd>*select*</kbd> + <kbd>*→*</kbd>    | <kbd>ctrl-:</kbd>       | core:select-right                                |
| <kbd>*select*</kbd> + <kbd>*⇉*</kbd>    | <kbd>ctrl-shift-P</kbd> | editor:select-to-end-of-word                     |
| <kbd>*select*</kbd> + <kbd>*⇉²*</kbd>   | <kbd>alt-shift-P</kbd>  | editor:select-to-next-subword-boundary           |
| <kbd>*select*</kbd> + <kbd>*⇥*</kbd>    | <kbd>ctrl-"</kbd>       | editor:select-to-end-of-line                     |
| <kbd>*select*</kbd> + <kbd>*↑*</kbd>    | <kbd>ctrl-shift-K</kbd> | core:select-up                                   |
| <kbd>*select*</kbd> + <kbd>*↑²*</kbd>   | <kbd>alt-shift-K</kbd>  | editor:select-to-beginning-of-previous-paragraph |
| <kbd>*select*</kbd> + <kbd>*⇈*</kbd>    | <kbd>ctrl-shift-I</kbd> | core:select-page-up                              |
| <kbd>*select*</kbd> + <kbd>*⇈²*</kbd>   | <kbd>alt-shift-I</kbd>  | core:select-to-top                               |
| <kbd>*select*</kbd> + <kbd>*↓*</kbd>    | <kbd>ctrl-shift-L</kbd> | core:select-down                                 |
| <kbd>*select*</kbd> + <kbd>*↓²*</kbd>   | <kbd>alt-shift-L</kbd>  | editor:select-to-beginning-of-next-paragraph     |
| <kbd>*select*</kbd> + <kbd>*⇊*</kbd>   | <kbd>ctrl-shift-O</kbd> | core:select-page-down                            |
| <kbd>*select*</kbd> + <kbd>*⇊²*</kbd>  | <kbd>alt-shift-O</kbd>  | core:select-to-bottom                            |
| <kbd>*select*</kbd> + <kbd>*THIS*</kbd> | <kbd>ctrl-shift-N</kbd> | editor:select-line                               |
| <kbd>*select*</kbd> + <kbd>*ALL*</kbd>  | <kbd>ctrl-shift-?</kbd> | core:select-all                                  |

# Delete

| Statement                                | Keystroke                   | Command                               |
| ---------------------------------------- | --------------------------- | ------------------------------------- |
| <kbd>*delete*</kbd> + <kbd>*←*</kbd>     | <kbd>ctrl-alt-j</kbd>       | core:backspace                        |
| <kbd>*delete*</kbd> + <kbd>*⇇*</kbd>     | <kbd>ctrl-alt-u</kbd>       | editor:delete-to-beginning-of-word    |
| <kbd>*delete*</kbd> + <kbd>*⇇²*</kbd>    | <kbd>ctrl-alt-shift-U</kbd> | editor:delete-to-beginning-of-subword |
| <kbd>*delete*</kbd> + <kbd>*⇤*</kbd>     | <kbd>ctrl-alt-h</kbd>       | editor:delete-to-beginning-of-line    |
| <kbd>*delete*</kbd> + <kbd>*→*</kbd>     | <kbd>ctrl-alt-;</kbd>       | core:delete                           |
| <kbd>*delete*</kbd> + <kbd>*⇉*</kbd>     | <kbd>ctrl-alt-p</kbd>       | editor:delete-to-end-of-word          |
| <kbd>*delete*</kbd> + <kbd>*⇉²*</kbd>    | <kbd>ctrl-alt-shift-P</kbd> | editor:delete-to-end-of-subword       |
| <kbd>*delete*</kbd> + <kbd>*⇥*</kbd>     | <kbd>ctrl-alt-'</kbd>       | editor:delete-to-end-of-line          |
| <kbd>*delete*</kbd> + <kbd>*⇈*</kbd>     | <kbd>ctrl-alt-i</kbd>       | core:delete-to-top                    |
| <kbd>*delete*</kbd> + <kbd>*⇊*</kbd>    | <kbd>ctrl-alt-o</kbd>       | core:delete-to-bottom                 |
| <kbd>*delete*</kbd> + <kbd>*THIS*</kbd>  | <kbd>ctrl-alt-n</kbd>       | editor:delete-line                    |
| <kbd>*delete*</kbd> + <kbd>*THIS²*</kbd> | <kbd>ctrl-alt-shift-N</kbd> | core:cut                              |

# Undo

| Statement                          | Keystroke                                                               | Command   |
| ---------------------------------- | ----------------------------------------------------------------------- | --------- |
| <kbd>*undo*</kbd> + <kbd>*↑*</kbd> | <kbd>ctrl-t</kbd> <kbd>ctrl-k</kbd>                                     | core:undo |
| <kbd>*undo*</kbd> + <kbd>*↑*</kbd> | <kbd>ctrl-t</kbd> <kbd>ctrl-t</kbd> <kbd>ctrl-k</kbd> <kbd>ctrl-h</kbd> | core:undo |
| <kbd>*undo*</kbd> + <kbd>*↓*</kbd> | <kbd>ctrl-t</kbd> <kbd>ctrl-l</kbd>                                     | core:redo |
| <kbd>*undo*</kbd> + <kbd>*↓*</kbd> | <kbd>ctrl-t</kbd> <kbd>ctrl-t</kbd> <kbd>ctrl-l</kbd> <kbd>ctrl-h</kbd> | core:redo |

# Move

| Statement                          | Keystroke                                                               | Command                      |
| ---------------------------------- | ----------------------------------------------------------------------- | ---------------------------- |
| <kbd>*move*</kbd> + <kbd>*→*</kbd> | <kbd>ctrl-r</kbd> <kbd>ctrl-;</kbd>                                     | atomic-emacs:transpose-chars |
| <kbd>*move*</kbd> + <kbd>*→*</kbd> | <kbd>ctrl-r</kbd> <kbd>ctrl-r</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-h</kbd> | atomic-emacs:transpose-chars |
| <kbd>*move*</kbd> + <kbd>*⇉*</kbd> | <kbd>ctrl-r</kbd> <kbd>ctrl-p</kbd>                                     | atomic-emacs:transpose-words |
| <kbd>*move*</kbd> + <kbd>*⇉*</kbd> | <kbd>ctrl-r</kbd> <kbd>ctrl-r</kbd> <kbd>ctrl-p</kbd> <kbd>ctrl-h</kbd> | atomic-emacs:transpose-words |
| <kbd>*move*</kbd> + <kbd>*↑*</kbd> | <kbd>ctrl-r</kbd> <kbd>ctrl-k</kbd>                                     | editor:move-line-up          |
| <kbd>*move*</kbd> + <kbd>*↑*</kbd> | <kbd>ctrl-r</kbd> <kbd>ctrl-r</kbd> <kbd>ctrl-k</kbd> <kbd>ctrl-h</kbd> | editor:move-line-up          |
| <kbd>*move*</kbd> + <kbd>*↓*</kbd> | <kbd>ctrl-r</kbd> <kbd>ctrl-l</kbd>                                     | editor:move-line-down        |
| <kbd>*move*</kbd> + <kbd>*↓*</kbd> | <kbd>ctrl-r</kbd> <kbd>ctrl-r</kbd> <kbd>ctrl-l</kbd> <kbd>ctrl-h</kbd> | editor:move-line-down        |

# Search

| Statement                                                   | Keystroke                                                                                                   | Command                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| <kbd>*srch*</kbd> + <kbd>*←*</kbd>                          | <kbd>ctrl-e</kbd> <kbd>ctrl-j</kbd>                                                                         | find-and-replace:find-previous            |
| <kbd>*srch*</kbd> + <kbd>*←*</kbd>                          | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-j</kbd> <kbd>ctrl-h</kbd>                                     | find-and-replace:find-previous            |
| <kbd>*srch*</kbd> + <kbd>*←²*</kbd>                         | <kbd>ctrl-e</kbd> <kbd>j</kbd>                                                                              | find-and-replace:find-previous-selected   |
| <kbd>*srch*</kbd> + <kbd>*←²*</kbd>                         | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-j</kbd> <kbd>ctrl-j</kbd>                                     | find-and-replace:find-previous-selected   |
| <kbd>*srch*</kbd> + <kbd>*→*</kbd>                          | <kbd>ctrl-e</kbd> <kbd>ctrl-;</kbd>                                                                         | find-and-replace:find-next                |
| <kbd>*srch*</kbd> + <kbd>*→*</kbd>                          | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-h</kbd>                                     | find-and-replace:find-next                |
| <kbd>*srch*</kbd> + <kbd>*→²*</kbd>                         | <kbd>ctrl-e</kbd> <kbd>;</kbd>                                                                              | find-and-replace:find-next-selected       |
| <kbd>*srch*</kbd> + <kbd>*→²*</kbd>                         | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-j</kbd>                                     | find-and-replace:find-next-selected       |
| <kbd>*srch*</kbd> + <kbd>*→³*</kbd>                         | <kbd>ctrl-e</kbd> <kbd>alt-;</kbd>                                                                          | find-and-replace:replace-next             |
| <kbd>*srch*</kbd> + <kbd>*→³*</kbd>                         | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-k</kbd>                                     | find-and-replace:replace-next             |
| <kbd>*srch*</kbd> + <kbd>*ALL*</kbd>                        | <kbd>ctrl-e</kbd> <kbd>ctrl-/</kbd>                                                                         | find-and-replace:find-all                 |
| <kbd>*srch*</kbd> + <kbd>*ALL*</kbd>                        | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-/</kbd> <kbd>ctrl-h</kbd>                                     | find-and-replace:find-all                 |
| <kbd>*srch*</kbd> + <kbd>*ALL²*</kbd>                       | <kbd>ctrl-e</kbd> <kbd>/</kbd>                                                                              | find-and-replace:select-all               |
| <kbd>*srch*</kbd> + <kbd>*ALL²*</kbd>                       | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-/</kbd> <kbd>ctrl-j</kbd>                                     | find-and-replace:select-all               |
| <kbd>*srch*</kbd> + <kbd>*ALL³*</kbd>                       | <kbd>ctrl-e</kbd> <kbd>alt-/</kbd>                                                                          | find-and-replace:replace-all              |
| <kbd>*srch*</kbd> + <kbd>*ALL³*</kbd>                       | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-/</kbd> <kbd>ctrl-k</kbd>                                     | find-and-replace:replace-all              |
| <kbd>*srch*</kbd> + <kbd>*SETUP*</kbd>                      | <kbd>ctrl-e</kbd> <kbd>ctrl-]</kbd>                                                                         | find-and-replace:show                     |
| <kbd>*srch*</kbd> + <kbd>*SETUP*</kbd>                      | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-]</kbd> <kbd>ctrl-h</kbd>                                     | find-and-replace:show                     |
| <kbd>*srch*</kbd> + <kbd>*SETUP²*</kbd>                     | <kbd>ctrl-e</kbd> <kbd>]</kbd>                                                                              | find-and-replace:show-replace             |
| <kbd>*srch*</kbd> + <kbd>*SETUP²*</kbd>                     | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-]</kbd> <kbd>ctrl-j</kbd>                                     | find-and-replace:show-replace             |
| <kbd>*srch*</kbd> + <kbd>*SETUP³*</kbd>                     | <kbd>ctrl-e</kbd> <kbd>alt-]</kbd>                                                                          | find-and-replace:toggle-regex-option      |
| <kbd>*srch*</kbd> + <kbd>*SETUP³*</kbd>                     | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-]</kbd> <kbd>ctrl-k</kbd>                                     | find-and-replace:toggle-regex-option      |
| <kbd>*srch*</kbd> + <kbd>*SETUP⁴*</kbd>                     | <kbd>ctrl-e</kbd> <kbd>cmd-]</kbd>                                                                          | find-and-replace:toggle-case-option       |
| <kbd>*srch*</kbd> + <kbd>*SETUP⁴*</kbd>                     | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-]</kbd> <kbd>ctrl-l</kbd>                                     | find-and-replace:toggle-case-option       |
| <kbd>*srch*</kbd> + <kbd>*SETUP⁵*</kbd>                     | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-]</kbd> <kbd>ctrl-;</kbd>                                     | find-and-replace:toggle-selection-option  |
| <kbd>*srch*</kbd> + <kbd>*SETUP⁶*</kbd>                     | <kbd>ctrl-e</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-]</kbd> <kbd>ctrl-'</kbd>                                     | find-and-replace:toggle-whole-word-option |
| <kbd>*srch*</kbd> + <kbd>*select*</kbd> + <kbd>*→*</kbd>    | <kbd>ctrl-e</kbd> <kbd>ctrl-:</kbd>                                                                         | find-and-replace:select-next              |
| <kbd>*srch*</kbd> + <kbd>*select*</kbd> + <kbd>*→²*</kbd>   | <kbd>ctrl-e</kbd> <kbd>alt-:</kbd>                                                                          | find-and-replace:select-skip              |
| <kbd>*srch*</kbd> + <kbd>*select*</kbd> + <kbd>*ALL*</kbd>  | <kbd>ctrl-e</kbd> <kbd>ctrl-shift-?</kbd>                                                                   | find-and-replace:select-all               |
| <kbd>*srch*</kbd> + <kbd>*select*</kbd> + <kbd>*ALL²*</kbd> | <kbd>ctrl-e</kbd> <kbd>alt-shift-?</kbd>                                                                    | find-and-replace:find-all                 |
| <kbd>*srch*</kbd> + <kbd>*undo*</kbd> + <kbd>*↑*</kbd>      | <kbd>ctrl-e</kbd> <kbd>ctrl-t</kbd> <kbd>ctrl-k</kbd>                                                       | find-and-replace:select-undo              |
| <kbd>*srch*</kbd> + <kbd>*undo*</kbd> + <kbd>*↑*</kbd>      | <kbd>ctrl-e</kbd> <kbd>ctrl-t</kbd> <kbd>ctrl-e</kbd> <kbd>ctrl-t</kbd> <kbd>ctrl-k</kbd> <kbd>ctrl-h</kbd> | find-and-replace:select-undo              |

# File

| Statement                                                    | Keystroke                                                               | Command                                              |
| ------------------------------------------------------------ | ----------------------------------------------------------------------- | ---------------------------------------------------- |
| <kbd>*file*</kbd> + <kbd>*←*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-j</kbd>                                     | pane:show-previous-item                              |
| <kbd>*file*</kbd> + <kbd>*←*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-j</kbd> <kbd>ctrl-h</kbd> | pane:show-previous-item                              |
| <kbd>*file*</kbd> + <kbd>*⇇*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-u</kbd>                                     | pane:show-item-1                                     |
| <kbd>*file*</kbd> + <kbd>*⇇*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-u</kbd> <kbd>ctrl-h</kbd> | pane:show-item-1                                     |
| <kbd>*file*</kbd> + <kbd>*⇤*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-h</kbd>                                     | pane:show-item-1                                     |
| <kbd>*file*</kbd> + <kbd>*⇤*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-h</kbd> <kbd>ctrl-h</kbd> | pane:show-item-1                                     |
| <kbd>*file*</kbd> + <kbd>*→*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-;</kbd>                                     | pane:show-next-item                                  |
| <kbd>*file*</kbd> + <kbd>*→*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-h</kbd> | pane:show-next-item                                  |
| <kbd>*file*</kbd> + <kbd>*⇉*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-p</kbd>                                     | pane:show-item-9                                     |
| <kbd>*file*</kbd> + <kbd>*⇉*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-p</kbd> <kbd>ctrl-h</kbd> | pane:show-item-9                                     |
| <kbd>*file*</kbd> + <kbd>*⇥*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-'</kbd>                                     | pane:show-item-9                                     |
| <kbd>*file*</kbd> + <kbd>*⇥*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-'</kbd> <kbd>ctrl-h</kbd> | pane:show-item-9                                     |
| <kbd>*file*</kbd> + <kbd>*⤵*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-[</kbd>                                     | application:open-file                                |
| <kbd>*file*</kbd> + <kbd>*⤵*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-[</kbd> <kbd>ctrl-h</kbd> | application:open-file                                |
| <kbd>*file*</kbd> + <kbd>*⤵²*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>[</kbd>                                          | application:new-file                                 |
| <kbd>*file*</kbd> + <kbd>*⤵³*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-[</kbd> <kbd>ctrl-j</kbd> | application:new-file                                 |
| <kbd>*file*</kbd> + <kbd>*⤵³*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>alt-[</kbd>                                      | pane:reopen-closed-item                              |
| <kbd>*file*</kbd> + <kbd>*⤵³*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-[</kbd> <kbd>ctrl-k</kbd> | pane:reopen-closed-item                              |
| <kbd>*file*</kbd> + <kbd>*⤴*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd>                                     | core:save                                            |
| <kbd>*file*</kbd> + <kbd>*⤴*</kbd>                           | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd> <kbd>ctrl-h</kbd> | core:save                                            |
| <kbd>*file*</kbd> + <kbd>*⤴²*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>y</kbd>                                          | tree-view:duplicate                                  |
| <kbd>*file*</kbd> + <kbd>*⤴²*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd> <kbd>ctrl-j</kbd> | tree-view:duplicate                                  |
| <kbd>*file*</kbd> + <kbd>*⤴³*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>alt-y</kbd>                                      | core:save-as                                         |
| <kbd>*file*</kbd> + <kbd>*⤴³*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd> <kbd>ctrl-k</kbd> | core:save-as                                         |
| <kbd>*file*</kbd> + <kbd>*⤴⁴*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>cmd-y</kbd>                                      | tree-view:rename                                     |
| <kbd>*file*</kbd> + <kbd>*⤴⁴*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd> <kbd>ctrl-l</kbd> | tree-view:rename                                     |
| <kbd>*file*</kbd> + <kbd>*⤴⁵*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd> <kbd>ctrl-;</kbd> | nuclide-clipboard-path:copy-absolute-path            |
| <kbd>*file*</kbd> + <kbd>*⤴⁶*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd> <kbd>ctrl-'</kbd> | nuclide-clipboard-path:copy-project-relative-path    |
| <kbd>*file*</kbd> + <kbd>*⤴⁷*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd> <kbd>ctrl-y</kbd> | copy-filepath-with-line-numbers:relative             |
| <kbd>*file*</kbd> + <kbd>*⤴⁸*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd> <kbd>ctrl-u</kbd> | nuclide-clipboard-path:copy-basename-of-current-path |
| <kbd>*file*</kbd> + <kbd>*⤴⁹*</kbd>                          | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd> <kbd>ctrl-i</kbd> | nuclide-clipboard-path:copy-hostname-of-current-path |
| <kbd>*file*</kbd> + <kbd>*SETUP*</kbd>                       | <kbd>ctrl-v</kbd> <kbd>ctrl-]</kbd>                                     | fuzzy-finder:toggle-buffer-finder                    |
| <kbd>*file*</kbd> + <kbd>*SETUP*</kbd>                       | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-]</kbd> <kbd>ctrl-h</kbd> | fuzzy-finder:toggle-buffer-finder                    |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*←*</kbd>     | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-j</kbd>                                 | core:close                                           |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*←²*</kbd>    | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-shift-J</kbd>                           | tree-view:remove                                     |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*⇇*</kbd>     | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-u</kbd>                                 | tabs:close-tabs-to-right                             |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*⇤*</kbd>     | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-h</kbd>                                 | tabs:close-tabs-to-right                             |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*→*</kbd>     | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-;</kbd>                                 | core:close                                           |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*→²*</kbd>    | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-:</kbd>                                 | tree-view:remove                                     |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*⇉*</kbd>     | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-p</kbd>                                 | tabs:close-tabs-to-right                             |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*⇥*</kbd>     | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-'</kbd>                                 | tabs:close-tabs-to-right                             |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*THIS*</kbd>  | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-n</kbd>                                 | core:close                                           |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*THIS²*</kbd> | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-shift-N</kbd>                           | tree-view:remove                                     |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*ALL*</kbd>   | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-/</kbd>                                 | tabs:close-other-tabs                                |
| <kbd>*file*</kbd> + <kbd>*delete*</kbd> + <kbd>*ALL²*</kbd>  | <kbd>ctrl-v</kbd> <kbd>ctrl-alt-shift-?</kbd>                           | tabs:close-all-tabs                                  |

# Pane

| Statement                                                   | Keystroke                                                               | Command                               |
| ----------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------- |
| <kbd>*pane*</kbd> + <kbd>*←*</kbd>                          | <kbd>ctrl-c</kbd> <kbd>ctrl-j</kbd>                                     | window:focus-pane-on-left             |
| <kbd>*pane*</kbd> + <kbd>*←*</kbd>                          | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-j</kbd> <kbd>ctrl-h</kbd> | window:focus-pane-on-left             |
| <kbd>*pane*</kbd> + <kbd>*←²*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>j</kbd>                                          | pane:split-left-and-copy-active-item  |
| <kbd>*pane*</kbd> + <kbd>*←²*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-j</kbd> <kbd>ctrl-j</kbd> | pane:split-left-and-copy-active-item  |
| <kbd>*pane*</kbd> + <kbd>*←³*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>alt-j</kbd>                                      | window:toggle-left-dock               |
| <kbd>*pane*</kbd> + <kbd>*←³*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-j</kbd> <kbd>ctrl-k</kbd> | window:toggle-left-dock               |
| <kbd>*pane*</kbd> + <kbd>*→*</kbd>                          | <kbd>ctrl-c</kbd> <kbd>ctrl-;</kbd>                                     | window:focus-pane-on-right            |
| <kbd>*pane*</kbd> + <kbd>*→*</kbd>                          | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-h</kbd> | window:focus-pane-on-right            |
| <kbd>*pane*</kbd> + <kbd>*→²*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>;</kbd>                                          | pane:split-right-and-copy-active-item |
| <kbd>*pane*</kbd> + <kbd>*→²*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-j</kbd> | pane:split-right-and-copy-active-item |
| <kbd>*pane*</kbd> + <kbd>*→³*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>alt-;</kbd>                                      | window:toggle-right-dock              |
| <kbd>*pane*</kbd> + <kbd>*→³*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-k</kbd> | window:toggle-right-dock              |
| <kbd>*pane*</kbd> + <kbd>*→*</kbd>                          | <kbd>ctrl-c</kbd> <kbd>ctrl-;</kbd>                                     | tree-view:unfocus                     |
| <kbd>*pane*</kbd> + <kbd>*→*</kbd>                          | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-h</kbd> | tree-view:unfocus                     |
| <kbd>*pane*</kbd> + <kbd>*→²*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>;</kbd>                                          | pane:split-right-and-copy-active-item |
| <kbd>*pane*</kbd> + <kbd>*→²*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-j</kbd> | pane:split-right-and-copy-active-item |
| <kbd>*pane*</kbd> + <kbd>*→³*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>alt-;</kbd>                                      | window:toggle-right-dock              |
| <kbd>*pane*</kbd> + <kbd>*→³*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-k</kbd> | window:toggle-right-dock              |
| <kbd>*pane*</kbd> + <kbd>*↑*</kbd>                          | <kbd>ctrl-c</kbd> <kbd>ctrl-k</kbd>                                     | window:focus-pane-above               |
| <kbd>*pane*</kbd> + <kbd>*↑*</kbd>                          | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-k</kbd> <kbd>ctrl-h</kbd> | window:focus-pane-above               |
| <kbd>*pane*</kbd> + <kbd>*↑²*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>k</kbd>                                          | pane:split-up-and-copy-active-item    |
| <kbd>*pane*</kbd> + <kbd>*↑²*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-k</kbd> <kbd>ctrl-j</kbd> | pane:split-up-and-copy-active-item    |
| <kbd>*pane*</kbd> + <kbd>*↓*</kbd>                          | <kbd>ctrl-c</kbd> <kbd>ctrl-l</kbd>                                     | window:focus-pane-below               |
| <kbd>*pane*</kbd> + <kbd>*↓*</kbd>                          | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-l</kbd> <kbd>ctrl-h</kbd> | window:focus-pane-below               |
| <kbd>*pane*</kbd> + <kbd>*↓²*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>l</kbd>                                          | pane:split-down-and-copy-active-item  |
| <kbd>*pane*</kbd> + <kbd>*↓²*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-l</kbd> <kbd>ctrl-j</kbd> | pane:split-down-and-copy-active-item  |
| <kbd>*pane*</kbd> + <kbd>*↓³*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>alt-l</kbd>                                      | window:toggle-bottom-dock             |
| <kbd>*pane*</kbd> + <kbd>*↓³*</kbd>                         | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-l</kbd> <kbd>ctrl-k</kbd> | window:toggle-bottom-dock             |
| <kbd>*pane*</kbd> + <kbd>*THIS*</kbd>                       | <kbd>ctrl-c</kbd> <kbd>ctrl-n</kbd>                                     | hey-pane:toggle-focus-of-active-pane  |
| <kbd>*pane*</kbd> + <kbd>*THIS*</kbd>                       | <kbd>ctrl-c</kbd> <kbd>ctrl-c</kbd> <kbd>ctrl-n</kbd> <kbd>ctrl-h</kbd> | hey-pane:toggle-focus-of-active-pane  |
| <kbd>*pane*</kbd> + <kbd>*delete*</kbd> + <kbd>*←*</kbd>    | <kbd>ctrl-c</kbd> <kbd>ctrl-alt-j</kbd>                                 | core:close                            |
| <kbd>*pane*</kbd> + <kbd>*delete*</kbd> + <kbd>*→*</kbd>    | <kbd>ctrl-c</kbd> <kbd>ctrl-alt-;</kbd>                                 | core:close                            |
| <kbd>*pane*</kbd> + <kbd>*delete*</kbd> + <kbd>*THIS*</kbd> | <kbd>ctrl-c</kbd> <kbd>ctrl-alt-n</kbd>                                 | core:close                            |

# Bookmarks

| Statement                                                       | Keystroke                                                               | Command                             |
| --------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------- |
| <kbd>*bkmk*</kbd> + <kbd>*↓*</kbd>                         | <kbd>ctrl-w</kbd> <kbd>ctrl-l</kbd>                                     | bookmarks:jump-to-next-bookmark     |
| <kbd>*bkmk*</kbd> + <kbd>*↓*</kbd>                         | <kbd>ctrl-w</kbd> <kbd>ctrl-w</kbd> <kbd>ctrl-l</kbd> <kbd>ctrl-h</kbd> | bookmarks:jump-to-next-bookmark     |
| <kbd>*bkmk*</kbd> + <kbd>*→*</kbd>                         | <kbd>ctrl-w</kbd> <kbd>ctrl-;</kbd>                                     | bookmarks:jump-to-next-bookmark     |
| <kbd>*bkmk*</kbd> + <kbd>*→*</kbd>                         | <kbd>ctrl-w</kbd> <kbd>ctrl-w</kbd> <kbd>ctrl-;</kbd> <kbd>ctrl-h</kbd> | bookmarks:jump-to-next-bookmark     |
| <kbd>*bkmk*</kbd> + <kbd>*↑*</kbd>                         | <kbd>ctrl-w</kbd> <kbd>ctrl-k</kbd>                                     | bookmarks:jump-to-previous-bookmark |
| <kbd>*bkmk*</kbd> + <kbd>*↑*</kbd>                         | <kbd>ctrl-w</kbd> <kbd>ctrl-w</kbd> <kbd>ctrl-k</kbd> <kbd>ctrl-h</kbd> | bookmarks:jump-to-previous-bookmark |
| <kbd>*bkmk*</kbd> + <kbd>*←*</kbd>                         | <kbd>ctrl-w</kbd> <kbd>ctrl-j</kbd>                                     | bookmarks:jump-to-previous-bookmark |
| <kbd>*bkmk*</kbd> + <kbd>*←*</kbd>                         | <kbd>ctrl-w</kbd> <kbd>ctrl-w</kbd> <kbd>ctrl-j</kbd> <kbd>ctrl-h</kbd> | bookmarks:jump-to-previous-bookmark |
| <kbd>*bkmk*</kbd> + <kbd>*THIS*</kbd>                      | <kbd>ctrl-w</kbd> <kbd>ctrl-n</kbd>                                     | bookmarks:toggle-bookmark           |
| <kbd>*bkmk*</kbd> + <kbd>*THIS*</kbd>                      | <kbd>ctrl-w</kbd> <kbd>ctrl-w</kbd> <kbd>ctrl-n</kbd> <kbd>ctrl-h</kbd> | bookmarks:toggle-bookmark           |
| <kbd>*bkmk*</kbd> + <kbd>*delete*</kbd> + <kbd>*ALL*</kbd> | <kbd>ctrl-w</kbd> <kbd>ctrl-alt-/</kbd>                                 | bookmarks:clear-bookmarks           |
| <kbd>*bkmk*</kbd> + <kbd>*SETUP*</kbd>                     | <kbd>ctrl-w</kbd> <kbd>ctrl-]</kbd>                                     | bookmarks:view-all                  |
| <kbd>*bkmk*</kbd> + <kbd>*SETUP*</kbd>                     | <kbd>ctrl-w</kbd> <kbd>ctrl-w</kbd> <kbd>ctrl-]</kbd> <kbd>ctrl-h</kbd> | bookmarks:view-all                  |
