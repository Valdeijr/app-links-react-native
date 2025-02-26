import { ListCategories } from '@/components/category/listCategories'
import { Link } from '@/components/links/link'
import { LinkModal } from '@/components/links/linkModal'
import { colors } from '@/constants/colors'
import { StorageManager } from '@/core/StorageManager'
import { globalStyles } from '@/theme/global'
import type { LinkStorage } from '@/types/linkStorage'
import { categories } from '@/utils/categories'
import { FontAwesome } from '@expo/vector-icons'
import { useFocusEffect, useRouter } from 'expo-router'
import React, { useCallback, useState } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [category, setCategory] = useState(categories[0].name)
  const [links, setLinks] = useState<LinkStorage[]>([])
  const [selectedLink, setSelectedLink] = useState<LinkStorage>({} as LinkStorage)

  useFocusEffect(
    useCallback(() => {
      const LoadData = async () => {
        const response = await StorageManager.GetInstance().GetLinkFromCategory(category)
        setLinks(response)
      }
      LoadData()
    }, [category])
  )

  const handleVisibleDetais = (item: LinkStorage) => {
    setIsVisible(true)
    setSelectedLink(item)
  }

  const handleAddLink = () => {
    router.navigate('/addLink')
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Image source={require('@/assets/images/splash-icon.png')} style={{ width: 30, height: 30 }} />
        <TouchableOpacity onPress={handleAddLink}>
          <FontAwesome name="plus" size={30} color={colors.main} />
        </TouchableOpacity>
      </View>
      <ListCategories onChange={setCategory} selected={category} />

      <FlatList
        data={links}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={{ borderTopWidth: 1, borderTopColor: colors.gray.medium }}
        renderItem={({ item }) => <Link name={item.name} url={item.url} onOpen={() => handleVisibleDetais(item)} />}
      />

      <LinkModal
        transparent
        visible={isVisible}
        animationType={'slide'}
        name={selectedLink.name}
        url={selectedLink.url}
        onClose={() => setIsVisible(false)}
      />
    </View>
  )
}
