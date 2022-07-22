import { Command, Flags } from "@oclif/core";
import axios from "axios";
import chalk from "chalk";
import inquirer from "inquirer";
import config from "../config";
import { UserSignUp } from "../interfaces/auth.interface";
import { signupUser } from "../utils/userAuth";

export default class SignUp extends Command {
  static description = "create an account on grassp.";

  static examples = ["$ grassp signup"];

  async run(): Promise<void> {
    // const { args, flags } = await this.parse(SignUp);

    if (process.env.SESSIONNAME) {
      this.log(chalk.blue.bold("\n» Create an account on Grassp.\n"));
    }
    this.log(chalk.blue.bold("\n 👨🏻‍💻 Create an account on Grassp.\n"));

    const confirmPassword = async (input: any, answers: any) => {
      if (input === answers.password) {
        return true;
      } else {
        return "Passwords don't match";
      }
    };

    const validateFiveInterests = async (input: string[]) => {
      return input.length > 5 ? "Please select only 5 interests!" : true;
    };

    const checkIfEmailExists = async (input: any) => {
      try {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
          const emailExists = await axios.get(
            `${config.API_URL}/api/auth/exists/${input}`
          );
          if (emailExists.data.data)
            return "Email already exists, try a new one!";
          else return true;
        } else return "Cannot parse that email :(";
      } catch (error) {
        return "Server error :(";
      }
    };

    inquirer
      .prompt([
        {
          type: "input",
          name: "fullName",
          message: "Full Name: ",
          prefix: chalk.green("•"),
        },
        {
          type: "input",
          name: "email",
          message: "Email Id: ",
          validate: checkIfEmailExists,
          prefix: chalk.green("•"),
        },
        {
          type: "password",
          name: "password",
          message: "Password: ",
          prefix: chalk.green("•"),
        },
        {
          type: "password",
          name: "c_password",
          message: "Confirm Password: ",
          validate: confirmPassword,
          prefix: chalk.green("•"),
        },
        {
          type: "checkbox",
          name: "interests",
          message: "Select top 5 interests: ",
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
        },
      ])
      .then(async (answers: UserSignUp) => {
        try {
          const { fullName, email, password, interests } = answers;

          const data = await signupUser({
            fullName,
            email,
            password,
            interests,
          });

          this.log(data);

          if (!data) {
            this.error("Internal Server Error!!");
          } else {
            if (process.env.SESSIONNAME) {
              this.log(chalk.green(`\n»  Welcome to grassp, ${fullName}!\n`));
              this.log(
                chalk.yellow(
                  "»  We've sent you a verification link to confirm your account."
                )
              );
              this.log(
                `»  After getting verified, ${chalk.bold.yellow(
                  "$ grassp login"
                )} to start using grassp.`
              );
            } else {
              this.log(chalk.green(`\n🎉   Welcome to grassp, ${fullName}!\n`));
              this.log(
                chalk.yellow(
                  "📦   We've sent you a verification link to confirm your account."
                )
              );
              this.log(
                `🚀   After getting verified, ${chalk.bold.yellow(
                  "$ grassp login"
                )} to start using grassp.`
              );
            }
          }
        } catch (error) {
          this.log("await error");
          this.log(error);
        }
      })
      .catch((error) => {
        this.log("inquirer");
        this.log(error);
      });
  }
}
