# Ajuda - Sistema Web Petshop MiauMiau (Fase 1)

Este documento descreve a estrutura e as funcionalidades da primeira fase do projeto da disciplina de Fundamentos de Sistemas Web.

## Sobre a Página
O site do **Petshop MiauMiau** foi desenvolvido utilizando exclusivamente **HTML5 semântico**, cumprindo os requisitos da Fase 1 (sem CSS, Bootstrap ou JavaScript).

## Estrutura do Site
1. **Cabeçalho (`<header>`):** Contém o título principal do estabelecimento, subtítulo e um menu de navegação em lista (`<nav>`) com links de ancoragem internos para as seções de produtos, serviços e contato.
2. **Corpo (`<main>`):** 
   - **Produtos:** Dividido em três categorias obrigatórias (Acessórios, Rações Não Perecíveis e Higiene e Limpeza), apresentando duas opções por categoria com imagem ilustrativa, título, descrição detalhada e valor.
   - **Serviços:** Apresenta os serviços de banho e tosa oferecidos pelo petshop, indicando valores e a modalidade de tele-busca.
3. **Rodapé (`<footer>`):** Contém infos institucionais, dados de contato, direitos autorais e um link para retorno rápido ao topo da página.

-------------------------------------------------------------------------------------------------------

# Ajuda - Sistema Web Petshop MiauMiau (Fase 2)

Esta documentação descreve as melhorias e funcionalidades implementadas na Fase 2 da disciplina de Fundamentos de Sistemas Web.

## Funcionalidades Implementadas
1. **Estilização com Bootstrap 5:** Utilização de frameworks CSS para estruturar cartões de produtos, grades responsivas e o cabeçalho.
2. **Carrossel Dinâmico:** Implementado via Bootstrap na secção superior para destaque visual do petshop.
3. **Formulário Completo de Cadastro e Agendamento:** Coleta dados detalhados do cliente (nome, CPF, telefone, e-mail, sexo, endereço) e do pet (nome, raça, idade), além da escolha de serviços (banho/tosa) e modalidade (tele-busca ou entrega local) com campos de calendário (`date` e `time`).
4. **Funções em JavaScript:** Inclusão de relógio dinâmico no rodapé com funções temporais (`setInterval`) e validação de envio do formulário.
5. **Acessibilidade:** Aplicação do atributo `alt` descritivo nas imagens para atender aos requisitos de audiodescrição para deficientes visuais.