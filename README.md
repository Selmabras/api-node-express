# API JSON com Express

## Comandos Úteis

### GIT

Verifica a versão do git instalada
```
git --version
```

Configuração do usuário para fazer os commits do git
```
git config --global user.name "Renan Cavichi"
git config --global user.email "renancavichi@gmail.com"
```

Inicializa o Git em uma pasta nova
```
git init
```
Verifica o status atual do git
```
git status
```

Vincula seu repositório do github a pasta local
```
git remote add origin https://github.com/Selmabras/api-node-express.git

Adiciona os arquivos no stage
```
git add .
```

### Node 

Verifica a versão do node instalada
```
node -v
```

### NPM (Node Package Manager)

Verifica a versão do npm instalada
```
npm -v

Instala um novo pacote como dependência de dev
npm i [nome do pacote] -D
```

Roda os scripts do pacote package json
npm run [nome do probrama]

# Tópicos Importantes

- O que é o Node.js?
- Para que serve o NPM (Node Package Manager)?
- Para que ser o Nodemon?
- O que é uma API?
- O que é uma API RESTfull? 
- Para que serve o Framework Express?
- O que é o Padrão de Projeto Middleware?

# Comandos Uteis

### NPM
- npm init (Cria o package.json com as configurações iniciais do projeto)
- npm run [nome do script] (roda o commando definido no script do package.json)
- npm i nome_do_pacote (Dependências de Produção)
- npm i nome_do_pacote -D (Dependências dev)

### GIT
- git config --global user.name "Renan Cavichi" (Configura o nome de usuário para commitar as mudanças)
- git config --global user.email "renancavichi@gmail.com"
- git config --list

- git init
- git remote add origin [url do repositório]

- git status (Mostra o status atual dos arquivos)
- git add . (Adiciona os arquivos alterados no stage)
- git commit -m "Texto do Commit"

- git push (Manda os commits locais para o github)
- git pull (Puxa a versão mais atual do projeto)
- git fetch (Verifica se tem novos commits)