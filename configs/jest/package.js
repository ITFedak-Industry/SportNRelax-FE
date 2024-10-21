module.exports = {
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  collectCoverageFrom: ['**/*.{js,ts}', '!**/node_modules/**', '!**/vendor/**'],
  coverageReporters: [
    'cobertura',
    'json-summary',
    'text',
    'text-summary',
    'lcov',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  maxWorkers: '50%',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  // reporters: [
  //   'default',
  //   [
  //     'jest-junit',
  //     { outputDirectory: 'coverage/junit', outputName: 'junit-report.xml' },
  //   ],
  // ],
  // Override the default 5000 timeout for all tests
  testTimeout: 10000,
};
