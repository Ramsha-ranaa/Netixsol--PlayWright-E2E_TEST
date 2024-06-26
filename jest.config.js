module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: ['**/dashboard.test.js'],
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/dashboard.test.js',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
};
