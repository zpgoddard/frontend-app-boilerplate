import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'tamagui';
import { HelloScreen } from '@/src/screens/HelloScreen';
import { DetailsScreen } from '@/src/screens/DetailsScreen';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: theme.background.get() },
        headerTintColor: theme.color.get(),
        headerShadowVisible: false,
        contentStyle: { backgroundColor: theme.background.get() },
        headerTitleStyle: {
          fontWeight: '600',
          color: theme.color.get(),
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HelloScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}
