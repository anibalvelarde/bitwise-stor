module.exports = {
  verbose: true,
  moduleDirectories: [ 'node_modules', 'src' ],
  testMatch: [ '**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)' ],
  testPathIgnorePatterns: [ ],
  transformIgnorePatterns: [ ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(css|scss|less)$': 'jest-css-modules'
  },
  rootDir: 'src/'
}
