oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
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
grassp/0.0.0 darwin-x64 node-v16.13.1
$ grassp --help [COMMAND]
USAGE
  $ grassp COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`grassp hello PERSON`](#grassp-hello-person)
* [`grassp hello world`](#grassp-hello-world)
* [`grassp help [COMMAND]`](#grassp-help-command)
* [`grassp plugins`](#grassp-plugins)
* [`grassp plugins:install PLUGIN...`](#grassp-pluginsinstall-plugin)
* [`grassp plugins:inspect PLUGIN...`](#grassp-pluginsinspect-plugin)
* [`grassp plugins:install PLUGIN...`](#grassp-pluginsinstall-plugin-1)
* [`grassp plugins:link PLUGIN`](#grassp-pluginslink-plugin)
* [`grassp plugins:uninstall PLUGIN...`](#grassp-pluginsuninstall-plugin)
* [`grassp plugins:uninstall PLUGIN...`](#grassp-pluginsuninstall-plugin-1)
* [`grassp plugins:uninstall PLUGIN...`](#grassp-pluginsuninstall-plugin-2)
* [`grassp plugins update`](#grassp-plugins-update)

## `grassp hello PERSON`

Say hello

```
USAGE
  $ grassp hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/sahilpabale/grassp/blob/v0.0.0/dist/commands/hello/index.ts)_

## `grassp hello world`

Say hello world

```
USAGE
  $ grassp hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

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

## `grassp plugins`

List installed plugins.

```
USAGE
  $ grassp plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ grassp plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `grassp plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ grassp plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ grassp plugins add

EXAMPLES
  $ grassp plugins:install myplugin 

  $ grassp plugins:install https://github.com/someuser/someplugin

  $ grassp plugins:install someuser/someplugin
```

## `grassp plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ grassp plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ grassp plugins:inspect myplugin
```

## `grassp plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ grassp plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ grassp plugins add

EXAMPLES
  $ grassp plugins:install myplugin 

  $ grassp plugins:install https://github.com/someuser/someplugin

  $ grassp plugins:install someuser/someplugin
```

## `grassp plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ grassp plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ grassp plugins:link myplugin
```

## `grassp plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ grassp plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ grassp plugins unlink
  $ grassp plugins remove
```

## `grassp plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ grassp plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ grassp plugins unlink
  $ grassp plugins remove
```

## `grassp plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ grassp plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ grassp plugins unlink
  $ grassp plugins remove
```

## `grassp plugins update`

Update installed plugins.

```
USAGE
  $ grassp plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
