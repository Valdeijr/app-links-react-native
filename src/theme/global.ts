import { fonts } from '@/constants/fonts'
import { geometries } from '@/constants/geometries'
import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: geometries.spacing.compact,
    paddingHorizontal: geometries.spacing.medium,
  },
  contentCol: {
    flexDirection: 'column',
    paddingHorizontal: geometries.spacing.medium,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: geometries.spacing.compact,
    paddingHorizontal: geometries.spacing.medium,
  },
  text: {
    fontFamily: fonts.style.regular,
  },
})
