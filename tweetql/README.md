# PR, Merge후 GitHub 폴더 목록 중 아이콘에 화살표가 그려지면서 클릭이 안될때.

원인: 저장소에 하위 저장소가 생겼기 때문인데, 즉 해당 문제의 폴더내에 .git 파일이 있는 것

# 해결방법

1. 숨겨진 파일이 보이게 한다
    - windows: 파일탐색기 -> 상단 보기 탭 -> `숨긴 항목` 체크
    - mac: Finder -> `command` + `shift`+ `.`

원래의 저장소가 Main폴더이고, 문제의 폴더는 Main폴더내의 Sub폴더라고 하자,
즉 깃허브에서 화살표 표시가 되는 폴더는 Sub폴더이다.

2. 문제의 폴더에 있는 .git파일을 제거한다.
3. 스테이지의 파일 제거
    - 문제의 Sub폴더에서 .git파일 제거 후 아래 cmd 실행
    - `git rm --cached . -rf`
4. git add, commit, psuh 시도
5. 문제해결

# How to start GraphQL with Apollo

1. Create a new folder
2. Move to folder what you created
3. Run cmd `npm init -y` then crate `package.json` file
4. Run cmd `npm i apollo-server graphql` to install GraphQL and Apollo Server
5. Run cmd `npm i nodemon -D` to have better develope environment and experience
6. Create a new `server.js` file and with `touch server.js` cmd
7. Create a new `.gitignore` file and with `touch .gitignore` cmd
8. Add `node_modules/` folder into `.gitignore` file
9. Initial git repository with `git init .` cmd

# After Install Done

1. Add `"dev": "nodemon server.js"` into `script` section of `pacakge.json` file
2. Add `"type": "module"` into `pacakge.json` file
3. Add `import { ApolloServer, gql } from "apollo-server";` into `server.js` file
4. Check demon working fine or not with `npm run dev` cmd

# Have to use Chrome or Firefox or Brave except Safari

![image](https://github.com/jh0152park/GraphQL-Beginner-Study/assets/118165975/f42c37ac-7b9c-46b6-9b69-f5020c217ca9)

# typeDefs of GraphQL

-   Query: Every requests have to located inside of `Query` if that request want to get data from server
-   Mutation: Every requets have to located inside of `Mutation` if that request want to mutate some data through server, like `delete` or `added` or `update`
