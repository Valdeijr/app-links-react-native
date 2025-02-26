import { colors } from '@/constants/colors'
import { globalStyles } from '@/theme/global'
import { FontAwesome } from '@expo/vector-icons'
import { Pressable, type PressableProps, Text, View } from 'react-native'

type CategoryProps = PressableProps & {
  title: string
  isSelect: boolean
  icon: keyof typeof FontAwesome.glyphMap
}

export function Category({ title, icon, isSelect, ...rest }: CategoryProps) {
  const color = isSelect ? colors.success : colors.gray.medium
  return (
    <View style={globalStyles.container}>
      <Pressable style={[globalStyles.contentRow, { gap: 8 }]} {...rest}>
        <FontAwesome name={icon} size={20} color={color} />
        <Text style={[globalStyles.text, { color }]}>{title}</Text>
      </Pressable>
    </View>
  )
}
