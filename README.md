# parcel-jest-demo

This repo demostrates an issue of integration of [Parcel](https://parceljs.org/) absolute path import + jest.

Parcel supports absolute path style import `import A from '/components/A`. 
One way to teach Jest to parse this import style is to add `moduleNameMapper` in `jest.config.js`.

However, the module name mapper `'^/(.*)$': '<rootDir>/src/$1'` will bug the test, if the test involves mocking of an absolute path imported module.

## Getting Started

```bash
yarn

# run the bugged test
yarn test
```