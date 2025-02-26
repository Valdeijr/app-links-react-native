import { colors } from '@/constants/colors'
import { globalStyles } from '@/theme/global'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

type LinkProps = {
  name: string
  url: string
  onOpen: () => void
}

export function Link({ name, url, onOpen }: LinkProps) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.contentRow}>
        <View style={{ flex: 1 }}>
          <Text style={[globalStyles.text, globalStyles.title]} numberOfLines={1}>
            {name}
          </Text>
          <Text style={[globalStyles.text, globalStyles.url]} numberOfLines={1}>
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
