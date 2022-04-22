module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};

// for removing cache in expo for plugin issues while using drawer navigator

// expo r -c

// copy paste the above line command in terminal for removing cache in expo
