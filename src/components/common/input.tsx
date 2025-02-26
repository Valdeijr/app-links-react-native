import { colors } from '@/constants/colors'
import { fonts } from '@/constants/fonts'
import { geometries } from '@/constants/geometries'
import { StyleSheet, TextInput, type TextInputProps } from 'react-native'

export function Input({ ...rest }: TextInputProps) {
  return <TextInput style={local.container} {...rest} />
}

const local = StyleSheet.create({
  container: {
    width: '100%',
    height: geometries.spacing.large * 2,
    backgroundColor: colors.gray.dark,
    borderRadius: geometries.rounded.regular,
    borderWidth: 1,
    borderColor: colors.gray.medium,
    color: colors.gray.light,
    fontSize: fonts.size.compact,
    padding: geometries.spacing.compact,
  },
})
