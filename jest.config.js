/** @type {import('ts-jest').JestConfigWithTsJest} */

const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/.next/', '<rootDir>/src/components/Svg', '<rootDir>/src/configs/seo'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 50, // It should be in 95
      functions: 57, // It should be in 95
      lines: 60, // It should be in 95
      statements: 60, // It should be in 95
    },
  },
  verbose: true,
  transformIgnorePatterns: ['/node_modules/(?!(vest|@hookform/resolvers))'],
  maxWorkers: 6,
};

module.exports = config;
