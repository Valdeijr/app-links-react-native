import type { FontAwesome } from '@expo/vector-icons'

type Category = {
  id: string
  name: string
  icon: keyof typeof FontAwesome.glyphMap
}

export const categories: Category[] = [
  { id: '1', name: 'Curso', icon: 'code' },
  { id: '2', name: 'Curso', icon: 'code' },
  { id: '3', name: 'Curso', icon: 'code' },
  { id: '4', name: 'Curso', icon: 'code' },
  { id: '5', name: 'Curso', icon: 'code' },
]
