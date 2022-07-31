# grassp-cli
## Grassp is the first ever CLI based Micro Learning Tool!


[![grassp](https://img.shields.io/badge/cli-grassp-green)](https://github.com/sahilpabale/grassp)
[![Version](https://img.shields.io/npm/v/grassp.svg)](https://npmjs.org/package/grassp)
[![Downloads/week](https://img.shields.io/npm/dw/grassp.svg)](https://npmjs.org/package/grassp)
[![License](https://img.shields.io/npm/l/grassp.svg)](https://github.com/sahilpabale/grassp/blob/main/package.json)

<!-- toc -->
* [grassp-cli](#grassp-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g grassp
$ grassp COMMAND
running command...
$ grassp (--version)
grassp/0.2.4 darwin-x64 node-v16.13.1
$ grassp --help [COMMAND]
USAGE
  $ grassp COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`grassp help [COMMAND]`](#grassp-help-command)
* [`grassp learn`](#grassp-learn)
* [`grassp login`](#grassp-login)
* [`grassp logout`](#grassp-logout)
* [`grassp signup`](#grassp-signup)
* [`grassp update interests`](#grassp-update-interests)
* [`grassp update profile`](#grassp-update-profile)
* [`grassp whoami`](#grassp-whoami)

## `grassp help [COMMAND]`

Display help for grassp.

```
USAGE
  $ grassp help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for grassp.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `grassp learn`

select a module and start learning!

```
USAGE
  $ grassp learn

DESCRIPTION
  select a module and start learning!

EXAMPLES
  $ grassp learn
```

_See code: [dist/commands/learn.ts](https://github.com/sahilpabale/grassp/blob/v0.2.4/dist/commands/learn.ts)_

## `grassp login`

login to grassp.

```
USAGE
  $ grassp login

DESCRIPTION
  login to grassp.

EXAMPLES
  $ grassp login
```

_See code: [dist/commands/login.ts](https://github.com/sahilpabale/grassp/blob/v0.2.4/dist/commands/login.ts)_

## `grassp logout`

logout from grassp.

```
USAGE
  $ grassp logout

DESCRIPTION
  logout from grassp.

EXAMPLES
  $ grassp logout
```

_See code: [dist/commands/logout.ts](https://github.com/sahilpabale/grassp/blob/v0.2.4/dist/commands/logout.ts)_

## `grassp signup`

create an account on grassp.

```
USAGE
  $ grassp signup

DESCRIPTION
  create an account on grassp.

EXAMPLES
  $ grassp signup
```

_See code: [dist/commands/signup.ts](https://github.com/sahilpabale/grassp/blob/v0.2.4/dist/commands/signup.ts)_

## `grassp update interests`

update your profile interests.

```
USAGE
  $ grassp update interests

DESCRIPTION
  update your profile interests.

EXAMPLES
  $ grassp update interests
```

## `grassp update profile`

update your profile details.

```
USAGE
  $ grassp update profile

DESCRIPTION
  update your profile details.

EXAMPLES
  $ grassp update profile
```

## `grassp whoami`

know who you are.

```
USAGE
  $ grassp whoami

DESCRIPTION
  know who you are.

EXAMPLES
  $ grassp whoami
```

_See code: [dist/commands/whoami.ts](https://github.com/sahilpabale/grassp/blob/v0.2.4/dist/commands/whoami.ts)_
<!-- commandsstop -->
- [# grassp-cli](#-grassp-cli)
- [Usage](#usage)
- [Commands](#commands)
