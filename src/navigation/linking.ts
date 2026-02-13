import type { LinkingOptions } from '@react-navigation/native';
import type { RootStackParamList } from './types';

/**
 * Maps URLs to screens so that:
 *   /         → Home
 *   /details  → Details
 *   /details/123 → Details with id "123"
 */
export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [],
  config: {
    screens: {
      Home: '',
      Details: 'details/:id?',
    },
  },
};
