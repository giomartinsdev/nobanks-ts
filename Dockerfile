# Use a imagem base Node.js
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Compile o código TypeScript
RUN npm run build

# Exponha a porta que a aplicação está utilizando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "run", "dev" ]
