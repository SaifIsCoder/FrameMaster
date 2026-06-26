const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Ensure the input path matches the exact location of your global CSS file
module.exports = withNativeWind(config, { input: "./global.css" });
