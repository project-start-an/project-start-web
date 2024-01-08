# Project-start-web

This is the official repo for the company website of WeDecodeIT

# Technologies

These are the core technologies:

1. [NPM](https://www.npmjs.com/)
2. [React.js](https://react.dev/)
3. [TypeScript](https://www.typescriptlang.org/)
4. [Vite](https://vitejs.dev/)
5. [Styled components](https://styled-components.com/)
6. [Eslint](https://eslint.org/)
7. [Prettier](https://prettier.io/)

# Development

## Install or update local packages

```bash
npm run install
```

## Run the project

```bash
npm run dev
```

## Build the project

```bash
npm run build
```

## Check code quality and style

To ensure code quality and seamless development, eslint and prettier are integrated in the codebase.

### Code quality (linter)

```bash
npm run eslint
```

### Code style/formatting (prettier)

```bash
npm run format
```

#### Fix formatting

```bash
npm run format:fix
```

#### Check css style quality

```bash
npm run lint-css
```

#### Fix css style issues

```bash
npm run lint-css:fix
```

### Pre-commit

Use before committing

Before do a commit, you can use the pre-commit script to check code quality and if the project can be built.

```bash
npm run precommit
```

#### Pre-commit on Linux

```bash
npm run precommit-linux
```

# DevOps

The project uses GitHub actions to create automated workflows that help automate processes like code quality checking on commits to the repo.

## Workflows (CI/CD)

We use workflows to automate CI/CD processes. Check [workflows](.github/workflows/).

## Dependabot package upgrade

Dependabot is used to upgrade packages' versions occasionally so that we stay up-to-date with recent package upgrades. Check [dependabot config](.github/dependabot.yml). For more info look at [config options](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)

## Issue templates

We use specific templates for issue creation to make issues consistent and easy to follow. Check [config](.github/ISSUE_TEMPLATE/).

# Packages

Checkout [Packages list](../../wiki/Packages-list) for more info.

# Roadmap

Check out the Roadmap of the project [here](../../wiki/Roadmap)

# Icons for MD docs

https://gist.github.com/rxaviers/7360908
