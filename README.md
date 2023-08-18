# GraphQL-Study

GraphQL Study because Im beginner😎
<img src="https://store.graphql.org/cdn/shop/files/GraphQL-logo.png?v=1663253428">

# API

## What is API?

API is `Application Programming Interface`, Also API is does not mean only to REST api or GraphQL api.

`Interface`: some way to connection or interacting with something(whatever anyting). (Interfaction + Face = Interface😂)

## Why we need it?

Becuase to communicate, sometime we want to communicate with BE or Server or anything else.

### REST API

When communicate with another servers or each others, or ios applications communicate with server, that communication built by url.

For example, if we have a server for has millions of movies database, and building ios application then I want to sort of entire movies from my database of server.

Its mean is I have to get data from server and show that data to user.

So, If I use REST API, probably make some request with url looks like `testmovies.co/api/movies`, then this url will give me JSON data.

Also, so many sides can call this api, `browser, javascript, android application, ios application, etc...`

REST API is very easy to think to understand and also predictalbe!

How looks like REST API

```
testmovies.co/api/movies
testmovies.co/api/movies/1
testmovies.co/api/search?rating=9
```

### REST + HTTP

Add some verbe to the last part of REST API its gonna not good.

For example, Let's make some movies API and we need new features to create new movie datas.
Then we can make our new API like this `testmovies.co/api/movies/create`.

But also we can confuse with `testmovies.co/api/movies/add`, `testmovies.co/api/movies/upload`, `testmovies.co/api/movies/update`, whatever.

Because that words very close, also its gonna bad find and read DOC everytime when we need it.
So, we are be dependent wit HTTP method🔥

Actually our browsers request the `get` request everytimes when we request to websites automatically.

So we can combine with `GET`, `POST`, `DELETE`, `PUT`, and more HTTP request method with our REST API URLs😎

`GET`: get data from server

`POST`: create data to server

`DELETE`: delete data

`PUT`: update data

### GraphQL API

What are the problems with GraphQL fixed(Actually REST API has two big problems)

#### Over Fetching

`over fetching`: I gave a lot of data from server even if I don't use it.

First, GraphQL fixed over fetching(I dont have a any choice to get data what i need). just ask for what you need, get exactly that!

And its also could make data transfer speed much slower! because we have to transfer many data with no option.

#### Under Fetching

`under fetching`: I gave less data from server what we need.

I can get a less information from server, so Its gonna make me request another api to get more information. That mean is I have to do work 2 time.

The point is sometime i need more than one request to get a what I need.
<img width="300" height="300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/800px-GraphQL_Logo.svg.png"/>

---

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
