import path from "path";
import os from "os";
import fs from "fs";
import chalk from "chalk";

export const setToken = (token: string, platform: string) => {
  const tokenFile = path.join(
    os.homedir(),
    platform === "win32" ? "\\.grsp" : "/.grsp"
  );

  if (checkFile(tokenFile)) {
    // file exists, now set the token!
    fs.writeFileSync(tokenFile, token);
    console.log(chalk.greenBright("\nToken added successfully!"));
  } else {
    // create file and set the token!
    fs.writeFileSync(tokenFile, token);
    console.log(chalk.greenBright("\nToken added successfully!"));
  }
};

export const revokeToken = (platform: string) => {
  const tokenFile = path.join(
    os.homedir(),
    platform === "win32" ? "\\.grsp" : "/.grsp"
  );

  if (checkFile(tokenFile)) {
    fs.unlink(tokenFile, (err) => {
      if (err) {
        console.log(chalk.redBright("\nFailed to log out!"));
      } else {
        console.log(chalk.greenBright("\nSuccessfully logged out!"));
      }
    });
  } else {
    console.log(chalk.yellow("\nYou weren't logged in!"));
  }
};

export const getToken = (platform: string) => {
  const tokenFile = path.join(
    os.homedir(),
    platform === "win32" ? "\\.grsp" : "/.grsp"
  );
  try {
    const token = fs.readFileSync(tokenFile, { encoding: "utf-8" });
    return token;
  } catch (error) {
    return null;
  }
};

const checkFile = (file: string) => {
  try {
    fs.accessSync(file);
    return true;
  } catch (error) {
    return false;
  }
};
