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
    try {
      const user = await getUser(platform);

      if (user) {
        this.log(chalk.redBright("You're already logged in!"));
        this.log(
          `\nUse ${chalk.yellow("$ grassp whoami")} to get your profile.`
        );
        process.exit();
      }
    } catch (error) {
      this.log(error);
    }

    if (process.env.SESSIONNAME) {
      this.log(chalk.blue.bold("\n » Login to Grassp.\n"));
    }
    this.log(chalk.blue.bold("\n 👨🏻‍💻 Login to Grassp.\n"));

    const parseEmail = async (input: any) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
        const emailExists = await axios.get(
          `${config.API_URL}/api/auth/exists/${input}`
        );
        if (!emailExists.data.data)
          return chalk.redBright(
            ">   You don't have an account with us :(\n    Please create one and come here :D"
          );
        else return true;
      } else return "Cannot parse that email :(";
    };

    inquirer
      .prompt([
        {
          type: "input",
          name: "email",
          validate: parseEmail,
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
        } catch (error) {
          this.log(error);
        }
      })
      .catch((error) => this.log(error));
  }
}
