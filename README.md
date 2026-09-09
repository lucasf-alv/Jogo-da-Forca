# 🎮 Jogo da Forca

Aplicativo mobile desenvolvido em **React Native com Expo**, simulando o clássico jogo da forca.

O jogador informa uma palavra para iniciar a partida e tenta descobri-la utilizando as letras disponíveis na tela. A cada letra errada, um erro é contabilizado. Ao atingir **5 erros**, o jogador perde. Caso descubra todas as letras antes disso, vence a partida.

---

## 🚀 Tecnologias utilizadas

* **React Native** — desenvolvimento da interface mobile
* **Expo** — ambiente e ferramentas para desenvolvimento React Native
* **TypeScript** — tipagem estática do projeto
* **React** — criação dos componentes e gerenciamento da interface
* **React Navigation** — gerenciamento da navegação entre telas
* **Expo Navigation Bar** — controle da barra de navegação do Android

---

## 📚 Bibliotecas utilizadas

### React Navigation

Responsável pela navegação entre as telas do aplicativo.

```bash
@react-navigation/native
@react-navigation/native-stack
```

Instalação:

```bash
npm install @react-navigation/native @react-navigation/native-stack
```

Dependências utilizadas pelo React Navigation:

```bash
npx expo install react-native-screens react-native-safe-area-context
```

---

### Expo Navigation Bar

Utilizada para controlar a barra de navegação do sistema Android durante a utilização do aplicativo.

```bash
expo-navigation-bar
```

Instalação:

```bash
npx expo install expo-navigation-bar
```

---

## 📱 Telas do aplicativo

O aplicativo possui três telas principais:

### 🏠 Home

Tela inicial do aplicativo.

Possui:

* Título do jogo
* Descrição
* Botão para iniciar uma partida
* Modal para informar a palavra

---

### 🎮 Game

Tela onde acontece a partida.

Possui:

* Palavra escondida
* Letras descobertas
* Contador de erros
* Teclado com as letras do alfabeto
* Sistema de acerto e erro

O jogador possui no máximo **5 erros**.

---

### 🏆 Result

Tela apresentada ao final da partida.

Pode apresentar dois resultados:

**Vitória**

Quando o jogador consegue descobrir todas as letras da palavra.

**Derrota**

Quando o jogador atinge 5 erros.

Também existe a opção de iniciar uma nova partida.

---

## 🧩 Componentes

O projeto utiliza componentes separados para facilitar a organização e reutilização do código.

### `ButtonLetter`

Componente responsável pelos botões das letras.

Exemplo:

```text
[A] [B] [C] [D] [E] ...
```

Cada botão envia a letra selecionada para a tela do jogo.

---

### `InputLetter`

Responsável por exibir cada letra da palavra.

Enquanto uma letra não for descoberta:

```text
_
```

Quando for descoberta:

```text
A
```

---

### `ModalInitGame`

Modal utilizado para iniciar uma nova partida.

O jogador informa a palavra que deseja utilizar e o aplicativo valida se o campo foi preenchido.

---

## 📂 Estrutura do projeto

A estrutura principal do projeto é:

```text
JogoForca/
│
├── assets/
│
├── modals/
│   └── ModalInitGame.tsx
│
├── screens/
│   ├── Home.tsx
│   ├── Game.tsx
│   └── Result.tsx
│
├── components/
│   ├── ButtonLetter.tsx
│   └── InputLetter.tsx
│
├── App.tsx
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Como executar o projeto

### 1. Pré-requisitos

É necessário ter instalado:

* **Node.js**
* **npm**
* **Expo**
* Um celular Android ou iPhone

Não é necessário utilizar Android Studio ou um emulador para testar o aplicativo.

---

## 📥 Clonando o projeto

Clone o repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta:

```bash
cd JogoForca
```

---

## 📦 Instalando as dependências

Execute:

```bash
npm install
```

Caso as bibliotecas ainda não estejam instaladas:

```bash
npm install @react-navigation/native @react-navigation/native-stack
```

```bash
npx expo install react-native-screens react-native-safe-area-context expo-navigation-bar
```

---

# 📱 Como testar no celular

O projeto utiliza **Expo Go**, permitindo testar o aplicativo diretamente no celular sem precisar configurar um emulador Android.

### 1. Instale o Expo Go

No celular, instale o aplicativo **Expo Go**.

### Android

Acesse a **Google Play Store** e procure por:

```text
Expo Go
```

### iPhone

Acesse a **App Store** e procure por:

```text
Expo Go
```

---

### 2. Inicie o projeto

Dentro da pasta do projeto:

```bash
npx expo start
```

O Expo irá iniciar o servidor de desenvolvimento e exibirá um **QR Code** no terminal.

---

### 3. Conecte o celular

Certifique-se de que:

* O computador e o celular estão conectados à mesma rede Wi-Fi.
* O Expo Go está instalado no celular.

Depois, abra o **Expo Go** e escaneie o QR Code exibido pelo Expo.

O aplicativo será carregado diretamente no celular.

---

## 🔄 Executando novamente

Sempre que quiser iniciar o projeto:

```bash
cd JogoForca
```

Depois:

```bash
npx expo start
```

---

## 🎯 Regras do jogo

1. O jogador inicia uma nova partida.
2. Uma palavra é informada.
3. A palavra é escondida.
4. O jogador escolhe letras através dos botões.
5. Se a letra existir na palavra, ela é revelada.
6. Se a letra não existir, o contador de erros aumenta.
7. Ao atingir **5 erros**, o jogador perde.
8. Se todas as letras forem descobertas antes dos 5 erros, o jogador vence.

---

## 🧠 Conceitos utilizados

Durante o desenvolvimento foram utilizados conceitos importantes do React Native e React:

* Componentização
* Props
* State
* `useState`
* `useEffect`
* Renderização condicional
* Eventos de clique
* Formulários
* `TextInput`
* `Modal`
* `StyleSheet`
* Navegação entre telas
* Parâmetros de navegação
* TypeScript
* Tipagem das rotas
* Organização de componentes

---

## 🗺️ Fluxo de navegação

```text
             ┌─────────────┐
             │    HOME     │
             └──────┬──────┘
                    │
                    │ Iniciar jogo
                    ▼
          ┌───────────────────┐
          │ ModalInitGame     │
          │                   │
          │ Digitar palavra   │
          └─────────┬─────────┘
                    │
                    │ Começar
                    ▼
             ┌─────────────┐
             │    GAME     │
             └──────┬──────┘
                    │
          ┌─────────┴─────────┐
          │                   │
       5 erros          Palavra descoberta
          │                   │
          └─────────┬─────────┘
                    ▼
             ┌─────────────┐
             │   RESULT    │
             └──────┬──────┘
                    │
                    │ Jogar novamente
                    ▼
             ┌─────────────┐
             │    HOME     │
             └─────────────┘
```

---

## 🛠️ Comandos principais

### Instalar dependências

```bash
npm install
```

### Iniciar o Expo

```bash
npx expo start
```

### Verificar o projeto

```bash
npx expo doctor
```

### Limpar o cache do Expo

Caso aconteça algum problema durante o desenvolvimento:

```bash
npx expo start -c
```

---

## 👨‍💻 Autor

**Lucas Alvarenga**

Projeto desenvolvido para estudos de **React Native, TypeScript, Expo e React Navigation**.
