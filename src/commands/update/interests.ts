import { Command } from "@oclif/core";
import chalk from "chalk";
import inquirer from "inquirer";
import { updateInterests } from "../../utils/update";

export default class Interests extends Command {
  static description = "update your profile interests.";

  static examples = ["$ grassp update interests"];

  async run(): Promise<void> {
    const { platform } = this.config;

    const validateFiveInterests = async (input: string[]) => {
      return input.length > 5 || input.length < 5
        ? "Please select your 5 interests!"
        : true;
    };

    inquirer
      .prompt([
        {
          type: "confirm",
          name: "confirm",
          message: "Do you want to update your interests? ",
          prefix: chalk.green("•"),
        },
        {
          type: "checkbox",
          name: "interests",
          message: "Select new updated 5 interests: ",
          prefix: chalk.green("•"),
          choices: [
            { name: "Web 3", value: "web3" },
            { name: "Frontend Dev", value: "frontend" },
            { name: "Backend Dev", value: "backend" },
            { name: "DevOps", value: "devops" },
            { name: "Blockchain", value: "blockchain" },
            { name: "App Dev", value: "app" },
            { name: "Machine Learning", value: "ml" },
            { name: "Artificial Intelligence", value: "ai" },
          ],
          validate: validateFiveInterests,
          loop: false,
          when: async (answer) => {
            return answer.confirm ? true : false;
          },
        },
      ])
      .then(async (answers) => {
        if (answers.confirm) {
          const update = await updateInterests(answers.interests, platform);
          if (!update) {
            this.log(chalk.red("\n⛔️   Failed to update your interests."));
          } else {
            this.log(
              chalk.green("\n🎉   Successfully updated your interests.")
            );
          }
        }
      })
      .catch((error) => this.log(error));
  }
}
