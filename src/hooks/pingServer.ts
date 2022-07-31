import { Hook } from "@oclif/core";
import axios from "axios";
import chalk from "chalk";
import { exit } from "process";
import config from "../config";

const hook: Hook<"init"> = async (options) => {
  try {
    await axios.get(`${config.API_URL}/api`);
  } catch (error) {
    options.config.windows
      ? console.log(chalk.red(`>>   Failed to communicate with server!`))
      : console.log(chalk.red(`⛔️   Failed to communicate with server!`));
    exit(0);
  }
};

export default hook;
