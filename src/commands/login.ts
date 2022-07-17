import { Command, Flags } from "@oclif/core";
import { render } from "ink";
import React from "react";

export default class Login extends Command {
  static description = "login to grassp.";

  static examples = [];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Login);
  }
}
