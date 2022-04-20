module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

// for removing cache in expo fro plugin issues while using drawer navigator

// expo r -c

// copy paste the above line command in terminal for removing cache in expo
