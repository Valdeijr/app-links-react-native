import { categories } from '@/utils/categories'
import { FlatList } from 'react-native'
import { Category } from './category'

type ListCategoriesProps = {
  selected: string
  onChange: (category: string) => void
}

export function ListCategories({ selected, onChange }: ListCategoriesProps) {
  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      horizontal
      style={{ maxHeight: 52 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Category
          title={item.name}
          icon={item.icon}
          isSelect={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
    />
  )
}
