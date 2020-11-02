# performance-workshop

JSConf repository

### Pre-requisites

1. Install Docker (https://docs.docker.com/engine/install/)
2. Install `node >= 12.14.1` (nvm recommended https://github.com/nvm-sh/nvm)
3. Install git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### VSCode Plugins

1. ESLint (https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

2. GraphQL (https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)

3. Prettier (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Start server

1. Option 1. Docker
   ```
   docker run -p 8000:9000 -d mpamplona/deno-workshop-server
   ```
2. Option 2. Local server

   ```
   git clone git@github.com:pamply/deno-workshop-server.git
   ./start.sh
   ```

   or

   ```
   deno run --allow-net --allow-read index.ts
   ```

3. Option 3. Remote server (not recommended)
   ```
   http://198.211.117.14:9000/graphql
   ```

### Setting up app

1. `nvm use`

2. `npm install`

3. `npm run relay`

4. `num run build`

### Start app

1. `npm run start`

### Lazy loading

1. git checkout `basic-lazy-loading`
2. git checkout `improved-lazy-loading`
3. git checkout `lazy-loading-images`
4. git checkout `hook-lazy-loading-images`

### Memoization

1. git checkout `memoization-list-images`
2. git checkout `memoization-usecallback-list-images`

### Render as you fetch

1. git checkout `fetch-on-render`
2. git checkout `fetch-then-render`
3. git checkout `render-as-you-fetch`
