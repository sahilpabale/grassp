import { Command } from "@oclif/core";
import { getToken } from "../utils/token";
import { getUserInterests } from "../utils/userAuth";
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { getCardsFromModule, getModulesByInterest } from "../utils/modules";
import Cards from "../components/cards";
import { render } from "ink";
import React from "react";
import { markModuleAsCompleted } from "../utils/modules";

export default class Learn extends Command {
  static description = "select a module and start learning!";

  static examples = ["$ grassp learn"];

  async run(): Promise<void> {
    const { platform } = this.config;
    const token = getToken(platform);

    try {
      const resp = await getUserInterests(token);

      const interests = resp.map((interest: { title: any; name: any }) => {
        return { name: interest.title, value: interest.name };
      });

      this.log(
        chalk.green(figlet.textSync("Let's Learn", { font: "Larry 3D" }))
      );

      const answer = await inquirer.prompt([
        {
          name: "interest",
          type: "list",
          message: "Select any one interest amongst these 5: ",
          prefix: chalk.green("•"),
          choices: interests,
        },
      ]);
      const { interest } = answer;
      const modules = await getModulesByInterest(interest, token);

      if (!modules) {
        this.log(
          chalk.yellow(
            `\nSorry we don't have any module for ${interest} yet. Check again later!`
          )
        );
      } else {
        const selectedModule = await inquirer.prompt([
          {
            name: "module",
            type: "list",
            message: "Select the module you want to learn: ",
            prefix: chalk.green("•"),
            choices: modules.map((module: any) => {
              return {
                name: `${module.title} (${module.difficulty})`,
                value: module.id,
              };
            }),
          },
        ]);

        const moduleId = selectedModule.module;

        const cards = await getCardsFromModule(moduleId, token);
        if (cards) {
          render(<Cards cards={cards} />);
          await markModuleAsCompleted(moduleId, token);
        } else {
          this.log(
            chalk.yellow(
              "Sorry we don't have content for this module yet! Check again later :)"
            )
          );
        }
      }
    } catch (error) {
      if (error.response.data.data.code === "NOT_AUTH") {
        this.log(chalk.red(`>> Server Error! Failed to authorize you.`));
      } else {
        this.log(chalk.red(`>> Server Error! ${error.response.data.message}`));
      }
    }
  }
}
