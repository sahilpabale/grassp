import { Command } from "@oclif/core";
import axios from "axios";
import chalk from "chalk";
import inquirer from "inquirer";
import config from "../config";
import { setToken } from "../utils/token";
import { getUser, loginUser } from "../utils/userAuth";

export default class Login extends Command {
  static description = "login to grassp.";

  static examples = ["$ grassp login"];

  async run(): Promise<void> {
    // const { args, flags } = await this.parse(Login);
    const { platform } = this.config;

    const user = await getUser(platform);

    if (user) {
      this.log(chalk.redBright("You're already logged in!"));
      this.log(`\nUse ${chalk.yellow("$ grassp whoami")} to get your profile.`);
      process.exit();
    }

    if (process.env.SESSIONNAME) {
      this.log(chalk.blue.bold("\n » Login to Grassp.\n"));
    }
    this.log(chalk.blue.bold("\n 👨🏻‍💻 Login to Grassp.\n"));

    const checkIfEmailExists = async (input: any) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
        return true;
      } else return "Cannot parse that email :(";
    };

    inquirer
      .prompt([
        {
          type: "input",
          name: "email",
          validate: checkIfEmailExists,
          message: "Email Id: ",
          prefix: chalk.green("•"),
        },
        {
          type: "password",
          name: "password",
          message: "Password: ",
          prefix: chalk.green("•"),
        },
      ])
      .then(async (answers) => {
        try {
          const emailExists = await axios.get(
            `${config.API_URL}/api/auth/exists/${answers.email}`
          );
          if (!emailExists.data.data) {
            this.log(
              chalk.redBright(
                ">   You don't have an account with us :(\n    Please create one and come here :D"
              )
            );
          } else {
            const token = await loginUser(answers);
            const { platform } = this.config;

            if (!token) {
              this.log(
                chalk.redBright(
                  "\n⛔️   You have entered an invalid email or password"
                )
              );
            } else {
              this.log(chalk.green("\n🎉   You're now logged in!"));
              setToken(token.data, platform);
            }
          }
        } catch (error) {
          this.log(error);
        }
      })
      .catch((error) => this.log(error));
  }
}
