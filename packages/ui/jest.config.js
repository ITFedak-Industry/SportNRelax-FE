// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageConfig = require('@repo/jest-config/package.');

// eslint-disable-next-line import/no-default-export
module.exports = {
  ...packageConfig,
  moduleNameMapper: {
    // if your using tsconfig.paths thers is no harm in telling jest
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@/(.*)$': '<rootDir>/src/$1',

    // mocking assests and styling
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/fileMock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/tests/mocks/styleMock.ts',
    /* mock models and services folder */
    '(assets|models|services)': '<rootDir>/tests/mocks/fileMock.ts',
  },
  // to obtain access to the matchers.
  setupFilesAfterEnv: ['./tests/setupTests.ts'],

  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transform JS/JSX using babel-jest
    '^.+\\.tsx?$': 'babel-jest', // Transform TS/TSX using babel-jest for TypeScript projects
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
};
