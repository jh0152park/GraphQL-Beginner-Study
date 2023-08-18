# GraphQL-Study

GraphQL Study because Im beginner😎

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
