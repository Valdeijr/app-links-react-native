import { colors } from '@/constants/colors'
import { geometries } from '@/constants/geometries'
import { StorageManager } from '@/core/StorageManager'
import { globalStyles } from '@/theme/global'
import type { LinkStorage } from '@/types/linkStorage'
import { FontAwesome } from '@expo/vector-icons'
import { Alert, Linking, Modal, type ModalProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Options } from './options'

type LinkModalProps = ModalProps & {
  link: LinkStorage
  onClose: () => void
}

export function LinkModal({ link, onClose, ...rest }: LinkModalProps) {
  const handleOpen = async (url: string) => {
    try {
      await Linking.openURL(url)
      onClose()
    } catch (error) {
      Alert.alert('Erro', 'Faha ao abrir o link')
      console.error('Erro ao abrir o link:', error)
    }
  }
  const handleRemove = async (id: string) => {
    try {
      Alert.alert('Confirmação', 'Deseja excluir o link', [
        { style: 'cancel', text: 'Não' },
        {
          text: 'Sim',
          onPress: async () => {
            await StorageManager.GetInstance().RemoveLinkStorage(id)
            onClose()
          },
        },
      ])
    } catch (error) {
      Alert.alert('Erro', 'Faha ao excluir o link')
      console.error('Erro ao remover o link:', error)
    }
  }
  return (
    <Modal {...rest}>
      <View style={[globalStyles.container, { justifyContent: 'flex-end' }]}>
        <View style={local.content}>
          <View style={local.header}>
            <Text style={globalStyles.title}>{link.category}</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesome name="close" size={20} color={colors.gray.medium} />
            </TouchableOpacity>
          </View>
          <Text style={[globalStyles.text, globalStyles.title]} numberOfLines={1}>
            {link.name}
          </Text>
          <Text style={[globalStyles.text, globalStyles.url]} numberOfLines={1}>
            {link.url}
          </Text>
          <View style={local.footer}>
            <Options name="Excluir" icon="delete" variant="secondary" onPress={() => handleRemove(link.id)} />
            <Options name="Abrir" icon="language" onPress={() => handleOpen(link.url)} />
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
