# Cadastro de Cervejas ( em construção )

Este projeto é uma API para cadastro de cervejas, desenvolvida com **Express.js**. A API permite gerenciar informações sobre diferentes cervejas, incluindo a capacidade de fazer upload de imagens.

## Funcionalidades

- **Criar** uma nova cerveja
- **Listar** todas as cervejas
- **Obter** detalhes de uma cerveja específica pelo ID
- **Atualizar** informações de uma cerveja
- **Deletar** uma cerveja

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Multer** (para upload de imagens)
- **PostgreSQL** (banco de dados)
- **Prisma** (para gerenciamento do banco de dados)

## Endpoints da API

### 1. Criar Cerveja

- **Body**: FormData com os seguintes campos:
  - `description`: Descrição da cerveja
  - `style`: Estilo da cerveja (ex: IPA, Lager, Stout).
  - `image`: URL ou caminho da imagem da cerveja (opcional).
  - `ABV`: Alcohol by Volume (Teor alcoólico).
  - `IBU`: International Bitterness Units (Nível de amargor).
  - `bottle`: Informações sobre a embalagem (ex: tamanho da garrafa).
  - `price`: Preço da cerveja.

### 2. Listar Cervejas

- **Response**: Lista de todas as cervejas cadastradas.

### 3. Obter Cerveja por ID

- **Parameters**: 
  - `id`: ID da cerveja.
- **Response**: Detalhes da cerveja correspondente.

### 4. Atualizar Cerveja

- **Parameters**: 
  - `id`: ID da cerveja a ser atualizada.
- **Body**: Dados a serem atualizados.

### 5. Deletar Cerveja

- **Parameters**: 
  - `id`: ID da cerveja a ser deletada.
- **Response**: Mensagem de confirmação da exclusão.


