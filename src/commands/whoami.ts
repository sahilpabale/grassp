import { Command } from "@oclif/core";
import chalk from "chalk";
import { getUser } from "../utils/userAuth";

export default class Whoami extends Command {
  static description = "know who you are.";

  static examples = ["$ grassp whoami"];

  async run(): Promise<void> {
    const { platform } = this.config;

    const user = await getUser(platform);

    if (!user) {
      this.log(chalk.red("•   No one's logged in :/"));
    } else {
      const { email, fullName, createdAt } = user;
      const interests: any[] = user.interests;
      this.log(chalk.yellow.bold("\n»   Account Information: \n"));
      this.log(chalk.green("Email Id:"), email);
      this.log(chalk.green("Full Name:"), fullName);
      const date = new Date(createdAt);
      this.log(
        chalk.green("Created At:"),
        `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
      );
      this.log(chalk.green("Interests: "));

      interests.forEach((item, index) => {
        this.log(`${index + 1}. ${item.title}`);
      });
    }
  }
}
