import { ListCategories } from '@/components/Category/listCategories'
import { Link } from '@/components/Links/link'
import { LinkModal } from '@/components/Links/linkModal'
import { colors } from '@/constants/colors'
import { globalStyles } from '@/theme/global'
import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'

export default function Index() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Image source={require('@/assets/images/splash-icon.png')} style={{ width: 30, height: 30 }} />
        <TouchableOpacity>
          <FontAwesome name="plus" size={30} color={colors.success} />
        </TouchableOpacity>
      </View>
      <ListCategories />

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
