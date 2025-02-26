import { categories } from '@/utils/categories'
import { FlatList } from 'react-native'
import { Category } from './category'

export function ListCategories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      horizontal
      style={{ maxHeight: 52 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Category title={item.name} icon={item.icon} isSelect={false} />}
    />
  )
}
