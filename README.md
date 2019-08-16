# Bike Bar Website

## Dependencies

You need [Node >=6](https://nodejs.org) and [Yarn >= 1.2.0](https://yarnpkg.com/en/docs/install) to run this project.

## Getting Started

From the root directory cd into web:

```sh
$ yarn
```

This will symlink all the local dependencies.

## Running Development Environment

```sh
$ yarn develop
```

## Running Production Environment

```sh
$ yarn build
```

## Linting Config 

### Troubleshooting

```
In development, ESLint should be running by default, as declared in the .vscode workspace settings. 
However, should it not be running, select shift+command+P to view the Command Palette, 
then search for ESLint: Enable ESLint. Click the command.

Future Prettier rules are to be added to .eslintrc. There is still a .prettierrc file, 
only because without it, stylelint throws an error.
```
