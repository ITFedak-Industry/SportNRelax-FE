module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react', { runtime: 'automatic' }], // Ensure the automatic runtime is enabled
    ['@babel/preset-typescript'],
  ],
};
