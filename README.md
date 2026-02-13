# frontend-app-boilerplate

React Native + TypeScript app that runs on **web**, **iOS**, and **Android** using Expo. Uses Tamagui for UI, React Navigation for routing, and a simple i18n setup for translations.

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

## Routes

- **`/`** — Home
- **`/details`** — Details screen (optional param: **`/details/:id`**)

## Project structure

```
src/
  App.tsx              # Root: Tamagui, i18n, NavigationContainer
  api/                 # API client and request helpers
  components/         # Reusable UI components
  hooks/              # Custom React hooks
  i18n/               # Translations: t(), setLocale, locales (en, es, fr, de)
  navigation/         # React Navigation stack, linking, param types
  screens/            # Screen components (HelloScreen, DetailsScreen)
  utils/              # Shared utilities
```

## Translations

UI strings live in `src/i18n/locales/` (e.g. `en.json`, `es.json`). Use the `useTranslation()` hook for `t('key')` and `setLocale()`. Add new languages by adding a JSON file and registering it in `src/i18n/index.ts`.

## Stack

- **Expo** (SDK 54) — build and dev tooling  
- **React Native** + **Tamagui** — UI and theming (light/dark)  
- **React Navigation** — stack navigator with URL linking  
- **TypeScript** — types throughout  
- **ESLint** (eslint-config-expo) — linting  
- **Jest** (jest-expo) — unit tests  
