/** @type {import('ts-jest').JestConfigWithTsJest} */

const config = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', '@testing-library/jest-dom/extend-expect'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/path/to/dir/',
    '!<rootDir>/src/pages/_app.tsx',
    '!<rootDir>/src/pages/_document.tsx',
    '!<rootDir>/src/pages/index.tsx',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/.next/',
    '<rootDir>/src/components/Svg',
    '<rootDir>/src/configs/seo',
    '<rootDir>/src/pages/_app.tsx',
    '<rootDir>/src/pages/_document.tsx',
    '<rootDir>/src/pages/index.tsx',
  ],
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
};

module.exports = config;
