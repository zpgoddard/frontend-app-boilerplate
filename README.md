# Module Manager App

## Setup

```bash
npm install
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server (choose platform in terminal or Expo Go) |
| `npm run web` | Run in browser |
| `npm run android` | Run on Android device/emulator |
| `npm run ios` | Run on iOS simulator (Mac only) |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Jest tests |

For mobile, use [Expo Go](https://expo.dev/go) on your device or an emulator/simulator.

## Translations

UI strings live in `src/i18n/locales/` (e.g. `en.json`, `es.json`). Use the `useTranslation()` hook for `t('key')` and `setLocale()`. Add new languages by adding a JSON file and registering it in `src/i18n/index.ts`.