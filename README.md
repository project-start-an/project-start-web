# Project-start-web

This is the official repo for the company website of WeDecodeIT

# Technologies

These are the core technologies:

1. React.js with TS
2. Vite
3. Styled components
4. Eslint, Prettier

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

### Use before commiting

Before do a commit, you can use the precommit script to check code quality and if project can be built.

```bash
node .\tools\precommit.js
```

# DevOps

The project uses GitHub actions to create automated workflows which help automate different processes like code quality checking on commit to the repo.

## Dependabot package upgrade

Dependabot is used to upgrade packages' versions from time to time so that we stay up-to-date with recent package upgrades.

# Packages

Checkout [Packages list](../../wiki/Packages-list) for more info.

# Roadmap

Check out the Roadmap of the project [here](../../wiki/Roadmap)

# Icons for MD docs

https://gist.github.com/rxaviers/7360908
