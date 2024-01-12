// precommit.js

import { execSync } from "child_process";

// Function to run npm commands
const runNpmScript = (scriptText, script) => {
  console.log(`=============== ${scriptText} ===============`);
  execSync(`npm run ${script}`, { stdio: "inherit" });
};

const runNpmCommand = (commandText, command) => {
  console.log(`=============== ${commandText} ===============`);
  execSync(`npm ${command}`, { stdio: "inherit" });
};

console.log("=============== Start ===============");

// Run npm commands
runNpmCommand("Check for vulnerabilties in npm packages", "audit fix");

// Run npm scripts
runNpmScript("Check formatting", "format:fix");
runNpmScript("Check linting", "lint");
runNpmScript("Check css linting", "lint-css:fix");
runNpmScript("Check build", "build");

// If all commands pass, the script will reach this point
console.log("=============== Result ===============");
console.log("Pre-commit checks passed successfully!");
console.log("It's time to push 🚀");
