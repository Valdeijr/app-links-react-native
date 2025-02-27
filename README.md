# Gerenciador de Links - Aplicativo Mobile

![React Native](https://img.shields.io/badge/React_Native-2D336B?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Este projeto é um aplicativo mobile para gerenciamento de links. Com ele, você pode salvar e organizar URLs por categoria, como vídeos do YouTube que deseja assistir mais tarde ou artigos importantes para leitura futura.

## Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento mobile.
- **[Expo](https://expo.dev/)**: Ambiente de desenvolvimento simplificado para React Native.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e produtividade.
- **[Expo Router](https://expo.github.io/router/docs/)**: Navegação otimizada para aplicações mobile.
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/usage/)**: Persistência de dados local no dispositivo.
- **[StyleSheet](https://reactnative.dev/docs/stylesheet)**: Estilização do aplicativo de forma eficiente.

## Estrutura do Projeto

No projeto, foi implementada uma abordagem baseada em **Programação Orientada a Objetos (POO)** para o gerenciamento do armazenamento local. A classe `StorageManager.ts`, em `./src/core/`, foi desenvolvida para encapsular as operações de leitura e escrita no **AsyncStorage**, garantindo maior segurança e evitando instâncias desnecessárias.

### Características da implementação:
- Métodos privados para leitura e escrita dos dados.
- Sistema de proteção de instância para evitar múltiplas instâncias desnecessárias.

## Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Valdeijr/app-links-react-native
   cd app-links-react-native

2. Instale as dependências com **npm**:
   ```bash
   npm install

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npx expo start

4. Escaneie o QR Code com o aplicativo Expo Go ou rode no emulador:
- Android:
   ```bash
    npm run android

- iOS (MacOS necessário):
   ```bash
    npm run ios


## Funcionalidades Principais

### Tela Inicial
Exibe a lista de links salvos.  
Permite filtrar os links por categoria (ex.: vídeos, artigos, tutoriais).

### Adicionar Novo Link
Formulário para cadastrar um novo link com título e categoria.  
Validação dos campos utilizando **TypeScript**.

### Edição e Exclusão
Permite editar informações do link salvo.  
Possibilidade de excluir um link da lista.

### Persistência de Dados
Armazena os links localmente no dispositivo utilizando **AsyncStorage**.  
Gerenciamento otimizado via **StorageManager**.

## Certificado de Conclusão e Considerações Finais

Este projeto foi desenvolvido durante um curso da [Rocketseat](https://app.rocketseat.com.br) de **Desenvolvimento Mobile com React Native e Expo**. O certificado de conclusão pode ser acessado no seguinte link: **[Certificado de Conclusão](https://app.rocketseat.com.br/certificates/ee94f64f-5b72-45e7-bf17-ee884622ce64)**

Este projeto explora conceitos essenciais de **React Native, Expo, navegação avançada, gerenciamento de estado, persistência de dados e boas práticas de organização de código**.

**Autor:** [Valdeijr](https://github.com/Valdeijr)  

