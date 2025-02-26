import type { FontAwesome } from '@expo/vector-icons'

type Category = {
  id: string
  name: string
  icon: keyof typeof FontAwesome.glyphMap
}

export const categories: Category[] = [
  { id: '1', name: 'Cursos', icon: 'code' },
  { id: '2', name: 'Projetos', icon: 'android' },
  { id: '3', name: 'Estudos', icon: 'newspaper-o' },
  { id: '4', name: 'Trabalhos', icon: 'tv' },
  { id: '5', name: 'Games', icon: 'gamepad' },
]
