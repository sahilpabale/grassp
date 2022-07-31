import { Command } from "@oclif/core";
import Cards from "../components/cards";
import { render } from "ink";
import React from "react";

export default class Test extends Command {
  async run() {
    render(<Cards cards={[]} />);
  }
}
