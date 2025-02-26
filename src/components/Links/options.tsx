import { colors } from '@/constants/colors'
import { fonts } from '@/constants/fonts'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native'

type OptionsProps = TouchableOpacityProps & {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: 'primary' | 'secondary'
}

export function Options({ name, icon, variant = 'primary', ...rest }: OptionsProps) {
  return (
    <TouchableOpacity style={local.container} {...rest}>
      <MaterialIcons name={icon} size={20} color={variant === 'primary' ? colors.main : colors.gray.medium} />
      <Text style={variant === 'primary' ? local.primaryTitle : local.secondaryTitle}>{name}</Text>
    </TouchableOpacity>
  )
}

const local = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  primaryTitle: {
    color: colors.main,
    fontSize: fonts.size.compact,
    fontFamily: fonts.style.regular,
    fontWeight: '600',
  },
  secondaryTitle: {
    color: colors.gray.medium,
    fontSize: fonts.size.compact,
    fontFamily: fonts.style.regular,
  },
})
