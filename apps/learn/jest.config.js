/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageConfig = require('@repo/jest-config/app');

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

process.env.TZ = 'GMT';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  // Indicates whether the coverage information should be collected while executing the test
  ...packageConfig,

  moduleNameMapper: {
    '^@/src/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};

module.exports = createJestConfig(config);
