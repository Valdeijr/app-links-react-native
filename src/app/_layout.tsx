import { colors } from '@/constants/colors'
import {
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  useFonts,
} from '@expo-google-fonts/ubuntu'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function Layout() {
  const backgroundColor = colors.background
  const [loadFonts] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  })

  return (
    <>
      <StatusBar backgroundColor={colors.background} />
      <Stack
        screenOptions={{
          headerShown: false,
          // animation: 'slide_from_right',
          contentStyle: { backgroundColor },
        }}
      />
    </>
  )
}
