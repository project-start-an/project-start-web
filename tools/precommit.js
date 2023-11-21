// precommit.js

import { execSync } from "child_process";

// Function to run npm commands
const runNpmCommand = (commandText, command) => {
  console.log(`=============== ${commandText} ===============`);
  execSync(`npm run ${command}`, { stdio: "inherit" });
};

console.log("=============== Start ===============");
// Run npm commands
runNpmCommand("Check formatting", "format:fix");
runNpmCommand("Check linting", "lint");
runNpmCommand("Check build", "build");

// If all commands pass, the script will reach this point
console.log("=============== Result ===============");
console.log("Pre-commit checks passed successfully!");
console.log("It's time to push 🚀");
