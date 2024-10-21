module.exports = {
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  collectCoverageFrom: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
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
  // reporters: [
  //   'default',
  //   [
  //     'jest-junit',
  //     { outputDirectory: 'coverage/junit', outputName: 'junit-report.xml' },
  //   ],
  // ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  coverageReporters: ['json', 'lcov', 'text', 'html'],

  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 45,
      lines: 45,
    },
  },
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  testTimeout: 10000,
};
