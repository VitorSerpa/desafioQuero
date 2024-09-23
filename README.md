# 🖥️ Desafio de Back-End - Quero Educação 🚀

Bem-vindo(a) ao **Desafio de Back-End da Quero Educação**! 🎉
Este desafio foi criado para avaliar suas habilidades em desenvolvimento de back-end, com foco na implementação de
funcionalidades para filtrar e exibir ofertas de cursos.

Está pronto(a)? Vamos nessa! 👇

---

## 📋 O Desafio

Seu objetivo é criar uma aplicação que exponha uma interface para consultar ofertas de bolsa de estudo. Essa
interface pode ser implementada de duas formas, à sua escolha:

- **API RESTful ou Graphql**: Implemente endpoint(s) para consultar as ofertas **via solicitação HTTP**.
- **CLI**: Implemente uma entrada de dados para consultar as ofertas **via terminal de comandos**.

Os dados das ofertas estão disponíveis no arquivo `data.json`. Segue abaixo a lista funcionalidades à serem implementadas:

### Funcionalidades

1. **Leitura dos dados**:

- Consuma as ofertas a partir do arquivo `data.json` ou salve-as em um banco de dados, se preferir.

2. **Listagem de Ofertas**:

- [ ] Exiba todas as ofertas, retornando os dados nos seguintes formatos:
    - [ ] O valor `presencial` deve ser exibido como `Presencial` 🏫.
    - [ ] O valor `ead` deve ser exibido como `EaD` 🏠.
    - [ ] Os valores de `level`:
        - [ ] `bacharelado` → `Graduação (bacharelado)` 🎓.
        - [ ] `tecnologo` → `Graduação (tecnólogo)` 🎓.
        - [ ] `licenciatura` → `Graduação (licenciatura)` 🎓.
    - [ ] Os valores `fullPrice` e `offeredPrice` devem ser formatados como moeda no formato brasileiro _(ex: `R$ 550,00`)_.
    - [ ] Calcule e exiba a porcentagem de desconto com base nos preços (`fullPrice` e `offeredPrice`) no formato `27%` 📉.

3. **Filtragem e Ordenação**:

- [ ] Implemente filtros para as seguintes categorias:
    - [ ] `level` (graduação, tecnólogo, licenciatura) 🎓.
    - [ ] `kind` (presencial, EaD) 🏫.
    - [ ] `offeredPrice` (permitir filtrar por um intervalo de valores) 📉.
- [ ] Permita que múltiplos filtros sejam aplicados simultaneamente.
- [ ] Implemente a busca de ofertas por nome, com correspondência **case-insensitive** 🔄.
- [ ] Implemente ordenação por:
    - [ ] Nome do curso 📝.
    - [ ] Preço com desconto (`offeredPrice`) 📉.
    - [ ] Avaliação (`rating`) 🌟.

4. **Paginação**:

- [ ] Implemente paginação nas ofertas retornadas.
  - [ ] Permita configurar a quantidade de itens por página.
  - [ ] Permita navegar entre as páginas.

5. **Retorno de propriedades selecionadas**:

- [ ] Permita selecionar quais propriedades devem ser retornadas na consulta.
  - [ ] Por exemplo, retornar apenas a propriedade `courseName` no resultado da consulta.

### Restrições

- **IMPORTANTE**: Não altere o arquivo `data.json` original. 🚫

---

## ⚙️ Tecnologias

Você é livre para utilizar as tecnologias e ferramentas que preferir. Recomendamos que escolha aquilo com o que se sente mais confortável para resolver o desafio com qualidade e proficiência. 🚀

---

## 📝 Instruções para Iniciar

Descreva os passos necessários para rodar seu projeto localmente (exemplo: iniciar servidor, banco de dados, etc.).

---

## 🧑‍💻 Como Entregar

Ao finalizar o desafio, siga um dos métodos abaixo para enviar seu código:

### Opção 1: GitHub (Recomendado)

1. Crie um repositório no GitHub com as seguintes configurações:

- Visibilidade: **Público**.
- Não adicione arquivos extras como README ou `.gitignore`.

2. Atualize o `origin` para o novo repositório:
   ```bash
   git remote remove origin
   git remote add origin URL_DO_SEU_REPOSITORIO
   ```

3. Faça o commit e o push das alterações:
   ```bash
   git add .
   git commit -m "Desafio de Back-End - Quero Educação"
   git push origin main
   ```

4. Envie o link do repositório para: `recrutamento@quero.com`, identificando-se com seu nome completo.

### Opção 2: Google Drive

1. Compacte o projeto em um arquivo `.zip`.
2. Envie o arquivo para `recrutamento@quero.com` via Google Drive, incluindo seu nome completo no corpo do e-mail.

---

## 🔍 Critérios de Avaliação

Os pontos que vamos avaliar são:

- **Qualidade do código**: Clareza, organização e uso de boas práticas de desenvolvimento.
- **Aderência às especificações**: Quanto mais próximo o resultado estiver das instruções dadas, melhor.
- **Lógica e eficiência**: Capacidade de resolver problemas de maneira eficiente e lógica.
- **Proficiência**: Habilidade e maestria com as tecnologias e ferramentas utilizadas.
- **Documentação**: É importante que o projeto esteja bem documentado, facilitando sua execução por terceiros.

---

## 💡 Dicas e Recomendações

- Não se preocupe em finalizar todas as tarefas. O foco é demonstrar suas habilidades e raciocínio.
- Organize seu código de forma limpa.
- Comece pelas funcionalidades que você tem mais domínio.
- Use as checkboxes no README para acompanhar o progresso das tarefas.
- Reserve no mínimo 15 minutos para revisar e documentar sua solução.
