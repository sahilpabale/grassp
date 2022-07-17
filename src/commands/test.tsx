import { Command, Flags } from "@oclif/core";
import { render } from "ink";
import React from "react";
import RedText from "../components/RedText";

export default class Index extends Command {
  static description =
    "Grassp is the first ever CLI based Micro Learning Tool!";

  static examples = [];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Index);

    render(<RedText text={"Welcome to Grassp!"} />).unmount();
  }
}
