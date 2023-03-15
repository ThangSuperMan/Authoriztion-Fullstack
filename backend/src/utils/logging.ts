import chalk from "chalk";

const currentDatetime = new Date().toLocaleString();

const logging = {
  success: (args1: String, args2: any = null) => {
    console.log(
      chalk.bold.green(`[SUCCESS] [${currentDatetime}]`),
      chalk.greenBright(args1)
    );
    console.log(args2 ? args2 : "");
  },
  error: (args1: String, args2: any = null) =>
    console.log(
      chalk.bold.red(`\n[ERROR] [${currentDatetime}] `),
      chalk.redBright(args1),
      args2 ? chalk.redBright(`\n${args2}`) : ""
    ),
};

export default logging;
