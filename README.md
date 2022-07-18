# grassp-cli
=================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

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
grassp/0.1.0 darwin-x64 node-v16.13.1
$ grassp --help [COMMAND]
USAGE
  $ grassp COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`grassp help [COMMAND]`](#grassp-help-command)
* [`grassp login`](#grassp-login)
* [`grassp signup`](#grassp-signup)
* [`grassp test`](#grassp-test)

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

## `grassp login`

login to grassp.

```
USAGE
  $ grassp login

DESCRIPTION
  login to grassp.

EXAMPLES
  $ grassp signup
```

_See code: [dist/commands/login.ts](https://github.com/sahilpabale/grassp/blob/v0.1.0/dist/commands/login.ts)_

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

_See code: [dist/commands/signup.ts](https://github.com/sahilpabale/grassp/blob/v0.1.0/dist/commands/signup.ts)_

## `grassp test`

Grassp is the first ever CLI based Micro Learning Tool!

```
USAGE
  $ grassp test

DESCRIPTION
  Grassp is the first ever CLI based Micro Learning Tool!
```

_See code: [dist/commands/test.ts](https://github.com/sahilpabale/grassp/blob/v0.1.0/dist/commands/test.ts)_
<!-- commandsstop -->
- [# grassp-cli](#-grassp-cli)
- [Usage](#usage)
- [Commands](#commands)
