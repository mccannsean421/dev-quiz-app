// jest.config.js
module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
   '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
}
