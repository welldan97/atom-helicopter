# [Helicopter](https://github.com/welldan97/atom-helicopter)

![Keymap](/keymap.png)

| Modifiers                 | Method               |
| ------------------------- | -------------------- |
| <kbd>ctrl</kbd>           | <kbd>*main*</kbd>    |
| <kbd>alt</kbd>            | <kbd>*main²*</kbd>   |
| <kbd>ctrl-shift</kbd>     | <kbd>*select*</kbd>  |
| <kbd>alt-shift</kbd>      | <kbd>*select²*</kbd> |
| <kbd>ctrl-alt</kbd>       | <kbd>*delete*</kbd>  |
| <kbd>ctrl-alt-shift</kbd> | <kbd>*delete²*</kbd> |


Helicopter is a keymap system with composability and ergonomics in mind. It provides a scalable way to define keybindings, making them easy to remember and easy to use.


## Core Principles

To make the Helicopter system effective and powerful it is based on top of a few core principles.

### 1. Composability

One of the main goals of the project is to give a composable way to define keystrokes in a way that it would be mentally easy to learn them. Each keystroke consists of 2 main elements - *method* and *argument*. The left hand is responsible for *methods* and the right hand is responsible for its *arguments*.

You can see a few examples of resulting keybindings:

| Statement                                                                      | Keystroke                                 | Command                           |
| ------------------------------------------------------------------------------ | ----------------------------------------- | --------------------------------- |
| <kbd>*main*</kbd> + <kbd>*→*</kbd> = *move right*                              | <kbd>ctrl-;</kbd>                         | `core:move-right`                 |
| <kbd>*select*</kbd> + <kbd>*→*</kbd> = *select right*                          | <kbd>ctrl-shift-;</kbd>                   | `core:select-right`               |
| <kbd>*delete*</kbd> + <kbd>*→*</kbd> = *delete right*                          | <kbd>ctrl-alt-;</kbd>                     | `core:delete`                     |
| <kbd>*file*</kbd> + <kbd>*→*</kbd> = *next tab*                                | <kbd>ctrl-v</kbd> <kbd>ctrl-;</kbd>       | `pane:show-next-item`             |
| <kbd>*srch*</kbd> + <kbd>*→*</kbd> = *find next*                               | <kbd>ctrl-e</kbd> <kbd>ctrl-;</kbd>       | `find-and-replace:find-next`      |
| <kbd>*srch*</kbd> + <kbd>*select*</kbd> + <kbd>*→*</kbd> = *select next found* | <kbd>ctrl-e</kbd> <kbd>ctrl-shift-;</kbd> | `find-and-replace:select-next`    |
| <kbd>*bkmk*</kbd> + <kbd>*→*</kbd> = *next bookmark*                           | <kbd>ctrl-w</kbd> <kbd>ctrl-;</kbd>       | `bookmarks:jump-to-next-bookmark` |
| <kbd>*pane*</kbd> + <kbd>*→*</kbd> = *focus right pane*                        | <kbd>ctrl-c</kbd> <kbd>ctrl-;</kbd>       | `window:focus-pane-on-right`      |
| <kbd>*pane*</kbd> + <kbd>*→²*</kbd> = *split pane right*                       | <kbd>ctrl-c</kbd> <kbd>;</kbd>            | `pane:split-right`                |

The defined keymap works via regular key events. There is no need for entering mode, like in vim. Although, mode as an addition might be added in a future.

You can see the whole keymap [**here**](https://github.com/welldan97/atom-helicopter/blob/master/keymap.md).

### 2. Ergonomics & Semantics

All the keystrokes are defined with ergonomics in mind. The navigation keys lie literally at your fingertips. And the more common the action you want to make, the easier it is to access.

Each key has a semantics behind it. So you don't have to memorize all the weird keybindings, you just have to remember the base keys and next time you use it you will feel that it make sense. Many times you are going to guess the keybindings without ever using them.

The whole list of user experience principles you can see [**here**](https://github.com/welldan97/atom-helicopter/blob/master/ux_principles.md)

### 3. Different keyboard layouts support

From day one, we have supported different keyboard layouts. No matter which keyboard layout you use, the keys stay at the same place. Me myself using programmer dvorak, I see how it can be important to have support for different keyboards.

### 4. Customizability

All the keybindings should be customizable. If the defaults don't make sense for you, you would be able to change it. If you want to have the search button on another key — you should be able to do it. And of course nothing stops you to define your own keybindings in a usual way.

You can see how the keybindings are structured [**here**](https://github.com/welldan97/atom-helicopter/blob/master/lib/keys.js). And [**here**](https://github.com/welldan97/atom-helicopter/blob/master/lib/statements.js) is a resolving file for actions.

### 5. Scalability

Helicopter is not just a keymap, it is actually a system to define one. It gives you an ability to add new *methods* and *arguments* easily. There are still a lot of unbound keys left. So you can add support for your favorite packages without a problem.

Right now it can be used only on Atom. But it's in the plans to support other platforms too.

## Usage

There are two main concepts in the Helicopter system: *methods* and *arguments*.
The combination of two results in a keybinding. *Method* is responsible for a context in which you want to use the action and the action itself. I.e. <kbd>*file*</kbd>, <kbd>*pane*</kbd> could be a context and <kbd>*delete*</kbd> could be an action. *Argument* can be used only once, and usually it defines the direction <kbd>*←*</kbd>(LEFT) or <kbd>*→*</kbd>(RIGHT), but it also can define a more abstract concept like <kbd>*SETUP*</kbd> or <kbd>*⤴*</kbd>(EXPORT).


Some of the keys support alternatives, and they can be addressed either via modified version of keystroke, or via evoking method keybinding twice. I.e.
`core:save-as` is a third variation of <kbd>*file*</kbd> + <kbd>*⤴*</kbd>(EXPORT). And it can be accessed either via <kbd>alt</kbd> key, or it can be accessed via double press of <kbd>ctrl-v</kbd> and then choosing the version of the third version of keybinding(via <kbd>k</kbd> key).

| Statement                           | Keystroke                                                               | Command        |
| ----------------------------------- | ----------------------------------------------------------------------- | -------------- |
| <kbd>*file*</kbd> + <kbd>*⤴³*</kbd> | <kbd>ctrl-v</kbd> <kbd>alt-y</kbd>                                      | `core:save-as` |
| <kbd>*file*</kbd> + <kbd>*⤴³*</kbd> | <kbd>ctrl-v</kbd> <kbd>ctrl-v</kbd> <kbd>ctrl-y</kbd> <kbd>ctrl-k</kbd> | `core:save-as` |


Keybinding version keys go in order of homerow: `hjkl:'`

You can always consult the list of all keybindings: [**here**](https://github.com/welldan97/atom-helicopter/blob/master/keymap.md).


## Plans for the project

Helicopter is still hugely work in progress. And many of the things could be implemented with your contribution.

1. There should be defined more actions and functions which atom is missing
2. Make complete support for default atom keybindings
3. See if other units would make sense - word borders etc. What else can be inherited from vim&co.
4. Make it customizable for real.
5. Much more...
