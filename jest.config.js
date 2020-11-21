// const { jsWithTs: tsjPreset } = require('ts-jest/presets')
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/**/__tests__/*.test.js'],
  // transform: {
  //   ...tsjPreset.transform
  // },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'node',
};