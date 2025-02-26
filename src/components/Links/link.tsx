import { colors } from '@/constants/colors'
import { fonts } from '@/constants/fonts'
import { globalStyles } from '@/theme/global'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type LinkProps = {
  name: string
  url: string
  onOpen: () => void
}

export function Link({ name, url, onOpen }: LinkProps) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.contentRow}>
        <View style={globalStyles.content}>
          <Text style={[globalStyles.text, local.title]} numberOfLines={1}>
            {name}
          </Text>
          <Text style={[globalStyles.text, local.url]} numberOfLines={1}>
            {url}
          </Text>
        </View>
        <TouchableOpacity onPress={onOpen}>
          <MaterialIcons name="more-vert" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const local = StyleSheet.create({
  title: {
    fontSize: fonts.size.regular,
    color: colors.white,
  },
  url: {
    fontSize: fonts.size.small,
    color: colors.gray.medium,
  },
})
