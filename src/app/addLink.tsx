import { ListCategories } from '@/components/category/listCategories'
import { Button } from '@/components/common/button'
import { Input } from '@/components/common/input'
import { colors } from '@/constants/colors'
import { fonts } from '@/constants/fonts'
import { geometries } from '@/constants/geometries'
import { StorageManager } from '@/core/StorageManager'
import { globalStyles } from '@/theme/global'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function AddLink() {
  const router = useRouter()
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  const handleBack = () => {
    router.back()
  }

  const handleAddLink = async () => {
    try {
      if (!category) return Alert.alert('Erro', 'Selecione uma categoria.')
      if (!name.trim() || !url) return Alert.alert('Erro', 'Preencha todos os campos.')

      await StorageManager.GetInstance().AddLinkStorage({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      })
      Alert.alert('Pronto', 'Link adicionado com sucesso.', [{ text: 'Ok', onPress: () => router.back() }])
    } catch (error) {
      Alert.alert('Erro', 'Faha ao salvar o link')
      console.error('Erro ao salvar novo link:', error)
    }
  }

  return (
    <View style={[globalStyles.container, { paddingTop: geometries.spacing.immense }]}>
      <View style={globalStyles.header}>
        <TouchableOpacity onPress={handleBack}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray.medium} />
        </TouchableOpacity>
        <Text style={local.title}>Adicionar novo</Text>
      </View>
      <View style={[globalStyles.content, { gap: 16 }]}>
        <Text style={local.label}>Selecione a categoria</Text>
        <ListCategories onChange={setCategory} selected={category} />

        <Input placeholder="Nome" placeholderTextColor={colors.gray.light} onChangeText={setName} />
        <Input
          placeholder="Url"
          placeholderTextColor={colors.gray.light}
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Cadastrar" onPress={handleAddLink} />
      </View>
    </View>
  )
}

const local = StyleSheet.create({
  title: {
    color: colors.gray.medium,
    fontSize: fonts.size.regular,
    fontFamily: fonts.style.regular,
    fontWeight: '600',
  },
  label: {
    alignSelf: 'center',
    color: colors.gray.dark,
    fontSize: fonts.size.compact,
    fontFamily: fonts.style.regular,
    paddingTop: geometries.spacing.large,
  },
})
