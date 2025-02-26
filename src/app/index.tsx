import { ListCategories } from '@/components/category/listCategories'
import { Link } from '@/components/links/link'
import { LinkModal } from '@/components/links/linkModal'
import { colors } from '@/constants/colors'
import { globalStyles } from '@/theme/global'
import { categories } from '@/utils/categories'
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [category, setCategory] = useState(categories[0].name)

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
        data={['1', '2', '3']}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        style={{ borderTopWidth: 1, borderTopColor: colors.gray.medium }}
        renderItem={() => (
          <Link name="Link quaquer" url="http://localhost:3000/docs" onOpen={() => setIsVisible(!isVisible)} />
        )}
      />

      <LinkModal
        transparent
        visible={isVisible}
        animationType="slide"
        name="teste"
        url="seila"
        onClose={() => setIsVisible(!isVisible)}
      />
    </View>
  )
}
