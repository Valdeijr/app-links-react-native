import { colors } from '@/constants/colors'
import { geometries } from '@/constants/geometries'
import { globalStyles } from '@/theme/global'
import { FontAwesome } from '@expo/vector-icons'
import { Modal, type ModalProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Options } from './options'

type LinkModalProps = ModalProps & {
  name: string
  url: string
  onClose: () => void
}

export function LinkModal({ name, url, onClose, ...rest }: LinkModalProps) {
  return (
    <Modal {...rest}>
      <View style={[globalStyles.container, { justifyContent: 'flex-end' }]}>
        <View style={local.content}>
          <View style={local.header}>
            <Text style={globalStyles.title}>teste</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesome name="close" size={20} color={colors.gray.medium} />
            </TouchableOpacity>
          </View>
          <Text style={[globalStyles.text, globalStyles.title]} numberOfLines={1}>
            {name}
          </Text>
          <Text style={[globalStyles.text, globalStyles.url]} numberOfLines={1}>
            {url}
          </Text>
          <View style={local.footer}>
            <Options name="Excluir" icon="delete" variant="secondary" />
            <Options name="Abrir" icon="language" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const local = StyleSheet.create({
  content: {
    padding: geometries.spacing.large,
    backgroundColor: colors.gray.dark,
    paddingBottom: geometries.spacing.immense,
    borderTopLeftRadius: geometries.rounded.medium,
    borderTopRightRadius: geometries.rounded.medium,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: geometries.spacing.compact,
  },
  footer: {
    width: '100%',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: colors.gray.medium,
    marginTop: geometries.spacing.medium,
    paddingTop: geometries.spacing.compact,
  },
})
