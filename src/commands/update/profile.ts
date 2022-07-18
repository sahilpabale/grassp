import { Command } from "@oclif/core";
import chalk from "chalk";

export default class Profile extends Command {
  static description = "update your profile details.";

  static examples = ["$ grassp update profile"];

  async run(): Promise<void> {
    const { platform } = this.config;
    this.log(chalk.yellow("🏗   work in progress."));
  }
}
