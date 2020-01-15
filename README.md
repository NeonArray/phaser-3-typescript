# Phaser 3 Starter with TypeScript

Use the official one instead https://github.com/photonstorm/phaser3-typescript-project-template

This is a simple starter pack for Phaser 3 that incorporates Webpack and TypeScript. 


## Getting Started

```bash
// Clone the repo
git clone https://github.com/ocularrhythm/phaser-3-typescript && cd ./phaser-3-typescript

// Install node_modules
yarn install

// Execute `develop` script
yarn develop
```

### Phaser Typings

When the project is initially built, the Phaser 3 Types are imported from the Phaser 3 docs node module, into the root `typings` directory. This is because the typings are *not* included in the main Phaser module currently. Also, since they are not annoted in the `@types` format that TypeScript uses, they are not picked up automatically. 

I couldn't find an easy solution to this problem. In the end I was beginning to spend far too much time attempting to elegantly include these types through the TypeScript configurations. I decided to just simply copy the file through the use of a `predevelop` npm hook instead. 


