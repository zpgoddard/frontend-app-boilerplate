/**
 * Param lists for each navigator – use these for typed navigation.
 */

export type RootStackParamList = {
  Home: undefined;
  Details: { id?: string };
};

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- React Navigation type augmentation
    interface RootParamList extends RootStackParamList {}
  }
}
