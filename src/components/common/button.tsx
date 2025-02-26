import { colors } from '@/constants/colors'
import { fonts } from '@/constants/fonts'
import { geometries } from '@/constants/geometries'
import { StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={local.container} {...rest}>
      <Text style={local.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const local = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    backgroundColor: colors.main,
    borderRadius: geometries.rounded.regular,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.background,
    fontSize: fonts.size.regular,
    fontFamily: fonts.style.regular,
    fontWeight: '600',
  },
})
