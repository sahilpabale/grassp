import { Command } from "@oclif/core";
import chalk from "chalk";
import inquirer from "inquirer";
import { revokeToken } from "../utils/token";

export default class Logout extends Command {
  static description = "logout from grassp.";

  static examples = ["$ grassp logout"];

  async run(): Promise<void> {
    const { platform } = this.config;

    inquirer
      .prompt([
        {
          name: "confirmation",
          type: "confirm",
          message: "Do you really want to logout?",
          prefix: chalk.green("•"),
        },
      ])
      .then((answers) => {
        if (answers.confirmation) {
          this.log(chalk.yellow("😔   Sorry to see you go :("));
          revokeToken(platform);
        } else {
          process.exit();
        }
      });
  }
}
