/** @type {import('ts-jest').JestConfigWithTsJest} */

const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', '@testing-library/jest-dom/extend-expect'],
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
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
};

module.exports = config;
