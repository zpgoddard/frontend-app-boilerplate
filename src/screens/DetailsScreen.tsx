import { Pressable } from 'react-native';
import { useNavigation, useRoute, type RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { YStack, Text } from 'tamagui';
import type { RootStackParamList } from '../navigation/types';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailsNavProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

export function DetailsScreen() {
  const navigation = useNavigation<DetailsNavProp>();
  const route = useRoute<DetailsRouteProp>();
  const id = route.params?.id;

  return (
    <YStack flex={1} bg="$background" p="$4" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text fontFamily="$body" fontSize="$5" color="$color" mb="$4">
        {id ? `Details for id: ${id}` : 'You navigated to Details.'}
      </Text>
      <Pressable onPress={() => navigation.goBack()} style={{ opacity: 1 }}>
        {({ pressed }) => (
          <YStack
            bg="$accentBackground"
            px="$4"
            py="$3"
            style={{ borderRadius: 8, opacity: pressed ? 0.9 : 1 }}
          >
            <Text fontFamily="$body" fontSize="$3" color="$accentColor" fontWeight="600">
              Go back
            </Text>
          </YStack>
        )}
      </Pressable>
    </YStack>
  );
}
