import type { LinkStorage } from '@/types/linkStorage'
import AsyncStorage from '@react-native-async-storage/async-storage'

export class StorageManager {
  private static LINKS_STORAGE_KEY = 'linkStorage'

  private static instance: StorageManager

  private constructor() {}

  public static GetInstance(): StorageManager {
    if (!StorageManager.instance) StorageManager.instance = new StorageManager()
    return StorageManager.instance
  }

  private async GetDataStorage(): Promise<LinkStorage[]> {
    try {
      const storedLinks = await AsyncStorage.getItem(StorageManager.LINKS_STORAGE_KEY)
      const data: LinkStorage[] = storedLinks ? JSON.parse(storedLinks) : []
      return data
    } catch (error) {
      console.error('Erro ao acessar os dados:', error)
      return []
    }
  }

  public async AddLinkStorage(newLink: LinkStorage): Promise<void> {
    try {
      const data = await this.GetDataStorage()
      data.push(newLink)
      //const newData = [...data, newLink]
      await AsyncStorage.setItem(StorageManager.LINKS_STORAGE_KEY, JSON.stringify(data))
    } catch (error) {
      console.error('Erro ao salvar novo link:', error)
    }
  }

  public async RemoveLinkStorage(linkRemoved: LinkStorage): Promise<void> {
    try {
      let data = await this.GetDataStorage()
      data = data.filter(link => link.id === linkRemoved.id)
      await AsyncStorage.setItem(StorageManager.LINKS_STORAGE_KEY, JSON.stringify(data))
    } catch (error) {
      console.error('Erro ao remover p link:', error)
    }
  }

  public async clearUserData(): Promise<void> {
    try {
      await AsyncStorage.removeItem(StorageManager.LINKS_STORAGE_KEY)
    } catch (error) {
      console.error('Erro ao limpar os dados:', error)
    }
  }

  public async GetLinkFromCategory(category: string): Promise<LinkStorage[]> {
    try {
      let data = await this.GetDataStorage()
      data = data.filter(link => link.category === category)
      return data
    } catch (error) {
      console.error('Erro ao filtar os dados:', error)
      return []
    }
  }

  public async LogAsyncStorage(): Promise<void> {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const items = await AsyncStorage.multiGet(keys)
      console.log('Async Storage Items: ', items)
    } catch (error) {
      console.error('Falha ao carregar dados do Async Storage: ', error)
    }
  }
}
