# Ampulheta de Sarina

[![Licença MIT](https://img.shields.io/badge/Licença-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Versão](https://img.shields.io/badge/Versão-1.0.0-blue.svg)](https://github.com/shivinhazen/arkaiktimer)
[![Status](https://img.shields.io/badge/Status-Ativo-success.svg)](https://github.com/shivinhazen/arkaiktimer)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-brightgreen.svg)](https://shivinhazen.github.io/arkaiktimer/)

## 📑 Índice

- [📋 Descrição](#-descrição)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🌐 Demo](#-demo)
- [🔧 Instalação](#-instalação)
- [💻 Como Usar](#-como-usar)
- [🧩 Arquitetura](#-arquitetura)
- [🔍 Destaques Técnicos](#-destaques-técnicos)
- [🚀 Desafios Técnicos e Otimizações](#-desafios-técnicos-e-otimizações)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)
- [📞 Contato](#-contato)

## 📋 Descrição

Ampulheta de Sarina é uma aplicação web elegante e interativa para rastreamento de respawn de monstros em jogos MMORPG. Desenvolvida como uma Single Page Application (SPA) com foco em performance e experiência do usuário, a aplicação permite gerenciar timers de múltiplos monstros simultaneamente, com notificações sonoras e interface responsiva.

**[Acesse a aplicação online](https://shivinhazen.github.io/arkaiktimer/)**



## ✨ Funcionalidades

- **Bestiário Completo**: Catálogo de monstros com sprites animados e informações detalhadas
  - Implementado com renderização dinâmica e agrupamento por localização
  - Suporte para múltiplas instâncias do mesmo monstro em diferentes mapas
- **Sistema de Timers**: Rastreamento em tempo real do respawn de monstros
  - Atualização a cada segundo com cálculo preciso de tempo restante
  - Barra de progresso visual para acompanhamento intuitivo
- **Notificações Sonoras**: Alertas quando um monstro está pronto para ser caçado
  - Controle de volume ajustável com função de teste de som
  - Sistema de mute/unmute persistente entre sessões
- **Interface Responsiva**: Design adaptável para desktop e dispositivos móveis
  - Layout fluido baseado em CSS Grid e Flexbox
  - Suporte a gestos touch em dispositivos móveis
- **Personalização**: Reordenação de monstros por preferência do usuário
  - Implementado com a biblioteca SortableJS para drag-and-drop
  - Persistência da ordem personalizada via LocalStorage
- **Pesquisa Rápida**: Filtro instantâneo de monstros por nome
  - Implementado com event listeners para atualização em tempo real
  - Renderização otimizada durante a filtragem
- **Persistência de Dados**: Salvamento automático de timers e configurações
  - Implementado com LocalStorage API e tratamento de erros
  - Recuperação automática do estado na inicialização
- **Efeitos Visuais**: Animações 3D e efeitos de hover para melhor experiência
  - Efeito parallax 3D nos cards com transformações CSS
  - Gradiente dinâmico que segue o cursor com otimização via throttling

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação semântica do conteúdo com elementos modernos
- **CSS3**: Estilização avançada com variáveis CSS, flexbox, grid e animações
- **JavaScript (ES6+)**: Programação funcional e manipulação avançada do DOM
  - **IIFE (Immediately Invoked Function Expression)**: Para encapsulamento e proteção do escopo
  - **Arrow Functions**: Para melhor legibilidade e escopo léxico
  - **Template Literals**: Para construção dinâmica de HTML
  - **Destructuring**: Para manipulação eficiente de objetos e arrays
  - **Event Delegation**: Para gerenciamento eficiente de eventos
- **LocalStorage API**: Sistema robusto de persistência de dados no navegador
- **SortableJS**: Implementação de funcionalidade drag-and-drop para reordenação
- **Font Awesome**: Ícones vetoriais responsivos para melhor UX
- **Google Fonts**: Tipografia web otimizada (Inter e Poppins)

## 🌐 Demo

Você pode acessar a versão online da aplicação através do GitHub Pages:

**[https://shivinhazen.github.io/arkaiktimer/](https://shivinhazen.github.io/arkaiktimer/)**

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/shivinhazen/arkaiktimer.git

# Navegue até o diretório do projeto
cd arkaiktimer

# Abra o arquivo index.html no seu navegador ou use um servidor local
# Por exemplo, com o Python:
python -m http.server
```

## 💻 Como Usar

1. **Adicionar Timer**: Clique em um monstro no bestiário para iniciar um timer
   - Para monstros com múltiplas instâncias, selecione o mapa específico no modal
   - O sistema calcula automaticamente o tempo de respawn baseado nos dados do monstro
2. **Monitorar Respawn**: Acompanhe o progresso na seção "Surgindo"
   - A barra de progresso e o contador regressivo atualizam em tempo real
   - Os timers são ordenados automaticamente por tempo restante
3. **Receber Notificações**: Um alerta sonoro será emitido quando o monstro estiver pronto
   - O sistema move automaticamente o monstro para a seção "Prontos para o abate"
   - O histórico de timers expirados é mantido com timestamps relativos
4. **Reiniciar Timer**: Clique na imagem do monstro na seção "Prontos para o abate" para reiniciar o timer
   - O sistema mantém as informações do monstro e localização
   - O timer anterior é removido automaticamente da lista de pendentes
5. **Personalizar Bestiário**: Arraste os cards para organizar seus monstros favoritos
   - A ordem personalizada é salva automaticamente no LocalStorage
   - A ordenação persiste entre sessões do navegador
6. **Ajustar Volume**: Use o controle de volume no canto superior direito
   - Ajuste o volume ou silencie completamente os alertas
   - Teste o som atual com o botão de play
7. **Limpar Timers**: Utilize os botões dedicados para gerenciar seus timers
   - Limpe todos os timers pendentes com o botão de vassoura
   - Redefina todas as configurações com o botão de reset

## 🧩 Arquitetura

O projeto segue uma arquitetura modular de SPA (Single Page Application) com separação clara de responsabilidades:

- **index.html**: Estrutura da interface e carregamento de recursos
- **styles.css**: Estilização completa com design responsivo usando variáveis CSS e flexbox/grid
- **script.js**: Implementação da lógica de negócio com padrão de módulo IIFE para encapsulamento
- **sprites/**: Diretório com animações de monstros otimizadas para web
- **maps/**: Diretório com imagens de mapas do jogo
- **sons/**: Diretório com efeitos sonoros

O código segue o padrão de design MVC adaptado para JavaScript puro:
- **Model**: Objeto `AppState` e array `monstersData` para gerenciamento de dados
- **View**: Funções de renderização (`renderBestiary`, `renderActiveTimers`, `renderPendingTimers`)
- **Controller**: Funções de manipulação de eventos e atualização de estado (`iniciarTimer`, `updateTimers`, etc.)

## 🔍 Destaques Técnicos

- **Gerenciamento de Estado**: Implementação de um objeto `AppState` centralizado para controle de timers ativos, pendentes e configurações do usuário
- **Renderização Eficiente**: Atualização seletiva de componentes da interface com verificação de alterações para minimizar operações DOM
- **Efeitos 3D**: Transformações CSS avançadas para efeitos visuais com a função `attach3DEffect` que cria efeito parallax nos cards
- **Throttling**: Implementação de função `throttle` para otimização de eventos de mouse no gradiente de fundo (50ms)
- **Persistência**: Sistema robusto de salvamento e recuperação automática do estado via LocalStorage, incluindo ordem personalizada do bestiário
- **Acessibilidade**: Suporte a navegação por teclado, atributos ARIA e alto contraste visual
- **Padrão Observer**: Implementação de atualizações em tempo real com intervalo de 1 segundo para monitoramento de timers
- **Modularização**: Separação clara de responsabilidades com funções específicas para renderização, manipulação de dados e interação do usuário

## 🚀 Desafios Técnicos e Otimizações

### Desafios Superados

- **Gerenciamento de Múltiplos Timers**: Implementação de um sistema que gerencia dezenas de timers simultâneos sem degradação de performance
- **Sincronização de Estado**: Desenvolvimento de um mecanismo robusto para manter a sincronização entre o estado da aplicação e a interface do usuário
- **Compatibilidade Cross-Browser**: Adaptação de transformações CSS e efeitos visuais para funcionar consistentemente em diferentes navegadores
- **Manipulação Eficiente do DOM**: Minimização de reflows e repaints através de estratégias de atualização seletiva

### Otimizações de Performance

- **Renderização Condicional**: Implementação de verificação de alterações (`changed`) para evitar renderizações desnecessárias
- **Throttling de Eventos**: Limitação da frequência de eventos de mouse para 50ms no efeito de gradiente
- **Lazy Loading**: Carregamento sob demanda de recursos visuais como sprites e mapas
- **Agrupamento de Operações DOM**: Uso de DocumentFragment para minimizar reflows durante a renderização do bestiário
- **Caching de Seletores**: Armazenamento de referências a elementos DOM frequentemente acessados para evitar queries repetitivas

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 📞 Contato

- **Desenvolvedor**: [Lucas Leão](https://github.com/shivinhazen)
- **Email**: lucasleaobcmt@gmail.com
- **LinkedIn**: [Lucas Leão](https://www.linkedin.com/in/lucas-leao-shvzn/)

---

Desenvolvido com JavaScript puro.
