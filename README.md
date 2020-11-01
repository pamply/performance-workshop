# performance-workshop
JSConf repository

### Pre-requisites
1. Install Docker (https://docs.docker.com/engine/install/)
2. Install `node >= 12.14.1` (nvm recommended https://github.com/nvm-sh/nvm)
3. Install git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

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


### Lazy loading


1. git checkout `basic-lazy-loading`
2. git checkout `refactor-lazy-loading`
3. git checkout `basic-infinite-scrolling`
4. git checkout `refactor-infinite-scrolling`

### Memoization

1. git checkout `debounce-search`
2. git checkout `custom-memoize-function`
3. git checkout `react-memo-item-images`
3. git checkout `use-memo-example`

### Render as you fetch

1. git checkout `fetch-on-render`
2. git checkout `render-as-you-fetch-custom`
3. git checkout `render-as-you-fetch-relay`