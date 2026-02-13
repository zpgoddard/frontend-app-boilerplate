import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { YStack, Text, XStack } from 'tamagui';
import { useTranslation } from '../i18n';
import type { Locale } from '../i18n';
import type { RootStackParamList } from '../navigation/types';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const LOCALE_LABELS: Record<Locale, string> = { en: 'EN', es: 'ES', fr: 'FR', de: 'DE' };

export function HelloScreen() {
  const { t, locale, setLocale, supportedLocales } = useTranslation();
  const navigation = useNavigation<HomeNavProp>();

  return (
    <YStack flex={1} bg="$background" style={{ alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <YStack
        bg="$background"
        borderWidth={1}
        borderColor="$borderColor"
        p="$4"
        gap="$3"
        style={{ borderRadius: 16, maxWidth: 360, width: '100%' }}
      >
        <Text fontFamily="$heading" fontSize="$8" color="$color">
          {t('common.hello')}
        </Text>
        <Text fontFamily="$body" fontSize="$4" color="$color" lineHeight="$4">
          {t('home.title')}
        </Text>
        <Text fontFamily="$body" fontSize="$2" color="$colorMuted">
          {t('home.subtitle')}
        </Text>
        <Pressable
          onPress={() => navigation.navigate({ name: 'Details', params: {} })}
          style={{ width: '100%', marginBottom: 8 }}
        >
          {({ pressed }) => (
            <YStack
              bg="$accentBackground"
              px="$3"
              py="$2"
              style={{ borderRadius: 8, opacity: pressed ? 0.9 : 1, alignItems: 'center' }}
            >
              <Text fontFamily="$body" fontSize="$3" color="$accentColor" fontWeight="600">
                Go to Details
              </Text>
            </YStack>
          )}
        </Pressable>
        <XStack mt="$2" gap="$2" flexWrap="wrap">
          {supportedLocales.map((loc) => (
            <Pressable key={loc} onPress={() => setLocale(loc)} style={{ opacity: 1 }}>
              {({ pressed }) => (
                <YStack
                  bg={locale === loc ? '$accentBackground' : '$background'}
                  borderWidth={1}
                  borderColor="$borderColor"
                  px="$3"
                  py="$2"
                  style={{ borderRadius: 8, opacity: pressed ? 0.9 : 1 }}
                >
                  <Text
                    fontFamily="$body"
                    fontSize="$3"
                    color={locale === loc ? '$accentColor' : '$color'}
                    fontWeight={locale === loc ? '600' : undefined}
                  >
                    {LOCALE_LABELS[loc]}
                  </Text>
                </YStack>
              )}
            </Pressable>
          ))}
        </XStack>
      </YStack>
      <StatusBar style="auto" />
    </YStack>
  );
}
