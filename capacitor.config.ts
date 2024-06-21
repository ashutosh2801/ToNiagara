import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.ionic.toniagara',
  appName: 'ToNiagara',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
      SplashScreen: {
          "launchShowDuration": 1000,
          "launchAutoHide": true,
          "androidScaleType": "CENTER_CROP",
          "splashImmersive": true,
          "backgroundColor": "#ffffff"
      }
  },
};

export default config;
