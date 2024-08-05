# Aplicação de Quiz em Next.js

Este projeto é uma aplicação de quiz desenvolvida com Next.js e TypeScript. O quiz apresenta perguntas obtidas de uma API do Next.js, oferecendo quatro opções de resposta para cada pergunta. Se nenhuma resposta for selecionada, o quiz avança automaticamente para a próxima pergunta após um temporizador de 20 segundos. Os usuários podem pular perguntas ou respondê-las. Quando uma resposta é selecionada, o cartão gira com um efeito 3D para mostrar se a resposta está correta ou incorreta. A cor de fundo muda para vermelho em caso de respostas incorretas e verde para respostas corretas. O quiz avança para a próxima pergunta 2 segundos após uma resposta ser selecionada. Na décima e última pergunta, aparece um botão "Finalizar", e selecionar uma resposta leva o usuário à tela de resultados após 2 segundos.

A tela de resultados exibe o número total de perguntas, o número de respostas corretas e a porcentagem de acertos. Existem dois botões: um para retornar ao menu e outro para tentar o quiz novamente.

## Funcionalidades

- **Temporizador de Perguntas**: Cada pergunta tem um temporizador de 20 segundos. Se nenhuma resposta for selecionada, o quiz avança automaticamente para a próxima pergunta.
- **Opções de Resposta**: Cada pergunta possui quatro opções de resposta.
- **Efeito de Giro 3D**: Quando uma resposta é selecionada, o cartão gira para revelar a resposta correta com um efeito 3D.
- **Mudança de Cor de Fundo**: A cor de fundo muda para vermelho em caso de respostas incorretas e verde para respostas corretas.
- **Navegação Automática**: O quiz avança automaticamente para a próxima pergunta 2 segundos após uma resposta ser selecionada.
- **Tela de Resultados**: Exibe o número total de perguntas, o número de respostas corretas e a porcentagem de acertos. Inclui botões para retornar ao menu ou tentar o quiz novamente.
- **Design Responsivo**: A aplicação foi projetada para funcionar tanto em dispositivos PC quanto em dispositivos móveis.

## Implantação

Esta aplicação foi implantada na Vercel e pode ser acessada publicamente em:(https://quiznext-two.vercel.app/)

## Capturas de Tela

### Versão para PC

![Captura de Tela da Versão para PC]
<div align="center">
  <img src="![projetoQuizNext2](https://github.com/user-attachments/assets/8cd621ac-2d4f-4348-a10b-3391f378a6a3)" width='700px">
</div>

### Versão para Mobile

![Captura de Tela da Versão para Mobile](link-para-captura-de-tela-mobile)

## Instalação e Configuração

Para começar a usar o projeto localmente, siga estas etapas:

1. Clone o repositório:

```bash
git clone https://github.com/lukaznata/Next--Quiz.git
```

2. Navegue até o diretório do projeto:

```bash
cd Quiz
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Tecnologias Utilizadas

- **Next.js**: Um framework React para renderização do lado do servidor e geração de sites estáticos.
- **TypeScript**: Um superconjunto de JavaScript que adiciona tipagem estática ao idioma.
- **Vercel**: Plataforma para implantação de aplicações front-end.

