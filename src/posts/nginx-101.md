---
title: "Introduction to nginx "
description: "An introduction to nginx capabilities, asset serving"
date: 2023-09-17
categories:
  - csharp
  - nginx
  - deployment
  - server
  - web
  - dancing
  - programming
  - cloud
published: true
---

## ToC

## Introduction

Besides my usual dayjob shennanigans I've acquired some freelancing experience
doing some design for a national dancer which hired me to do a portfolio for her
projects and career. In the beginning this was a simple static
page that I'd write in Svelte like this blog and basically would act as a
contact card in steroids for her. After some prototyping and design I quickly stumbled upon
the hydra of this work: the gallery. The images originally were served as static
assets in the page, hosted in Vercel. That would be more than ok for most of the static
pages you find around the web, but we are talking about high resolution pictures
and in a scenic art poor records and media of it its definitely a no-no.

I started wheighing my options: I'm kinda well versed in Node and TypeScript, so
this could be a quick and easy project. Just host the process in one of the many
free hosting sites that crave for the sweet sweet bytes of your data and
personal identifiable information and you are good-to-go. That would be the end
of story but sadly, I lack common sense and I'm a masochist, so I decided to
take it further and use it as oportunity to learn .NET and decided to go with
it since C# is the main language that my current company uses. In that sense, I'm the black sheep so it would be
nice to finally blend in and learn at least the basics of a new language, MS
SQL, and Azure... Oh, boy I was wrong on that one.

## Learning nginx because I'm broke (and eager to learn)

Since Azure costs an eye and this is a one-off project that I don't want to pay for the hosting and free services usually come with the caveat of being slow and getting cold too quickly even if being requested frequently (such as MongoDB Atlas free tier). So I figured that having a VPS would be the best option: I could host multiple projects on the same machine; have multiple projects in diferent languages or tools; keep my machine private; have a better location for the users of my apps to connect to since I can host have it hosted in the US.

### Context and directives

`nginx` uses a similar syntax to common JSON using a key-value pair approach. Minus some differences like the syntax being:

```sh
keyword {
    keyword {
        key value; # Notice the key and value have no colon and ends with a
                   # semicolon.
    }
}
```

However, these key-values are known as _directives_ which, as we'll see, tell
`nginx` how to behave and what property to work with and what value to pass it.

Then there are so-called directive, which are declarations using keywords such
as: http, server, events. All of which recieve directives and tell `nginx` how
to behave and are called _context_.

Take for example, this barebones `nginx.conf`:

```sh
http {
    server {
        listen 8080;
        root /home/hapless/nginx-basics;
    }
}

events {}
```

Lets break down this conf snippet:

- `http` : context gives information on what to do with http requests that come
  to the machine that is running the nginx process.
- `server` : creates the instance of the server itself. In this case, we set up
  port 8080 so anything that goes through our `localhost:8080` should be
  communicating with nginx. The default is port 80.
- `root` : will take a directory where all files that match the types included
  in the context of the service will be served from. By default, `nginx` serves
  `html` with no including or context of types provided.

### Ownership of assets

There are some quiet defaults that can lead you to some trouble when setting up
a `nginx` instance. One of them is the ownership of the files being served to
the client. By default, nginx starts the process as `user www:www`. This can lead
to some authorization issues, specially on Linux. Since my user hapless, created
the static files that I want to serve in the `nginx-basics`, the default nginx
user wouldn't be able to serve it once `localhost:8080` is requested. Remember
to, either initialize `nginx` with the user directive that owns the files to be
served or `chmod` them as a whole.

```sh
user hapless hapless;

http {
	include mime.types;

	server {
		listen 8080;
		root /home/haplesss/nginx-basics;
	}
}
```

## Location Context

### Creating a location

So far we've managed to serve a static and styled `html` using nginx which is
currently sitting on the `nginx-basics`'s root directory. However, we can
specify what else to serve with the `location` keyword, that opens a diretory
inside the directed route.

We'll create a directory and inside it, create a new `index.html` (`mkdir fruits && touch fruits/index.html`) with a different body. In this case, we'll serve a list of fruits. Then we'll add it to our `nginx.conf`. Note that we pass the same route, so what nginx does
is to append or concat the declared location. Now this new html will be
accesible via `localhost:8080/fruits`.

```sh
http {
    include mime.types;

    server {
        listen 8080;
        root /home/hapless/nginx-basics;

        location /fruits {
            root /home/hapless/nginx-basics;
        }
    }
}
```

### Aliases and locations

We can reuse assets with the `alias` keyword, so instead of writing a new
location and point to fruits, we can use the same route and declare it as alias.
If we were to do it the same as `location /fruit` it'd append `/carbs` and throw
a 404 to the client.

```sh
http {
    include mime.types;

    server {
        listen 8080;
        root /home/hapless/nginx-basics;

        location /fruits {
            root /home/hapless/nginx-basics;
        }

        location /carbs {
            alias /home/hapless/nginx-basics/fruits;
        }
    }
}
```

By default nginx looks for `index.html`, but we can specify the file to be
served using `try_files` that takes kinda a weird syntax.

```sh
http {
    include mime.types;

    server {
        # ...

        location /vegetables {
            alias /home/hapless/nginx-basics;
            try_files /vegetables/veggies.html /index.html = 404;
        }
    }
}
```

Let's see it and break it down.

```sh
    try_files /vegetables/veggies.html # look for this specific asset
    /index.html                        # if not, use the root index.html
    = 404;                             # if that fails, throw a 404
```

### Regexes

We can use regular expressions to create a new route and serve a specific file
if the route requested meets a given criteria. In this example, we declare the
use of of a regex using `~*` and the square brackets. The route `/count` will
take any number and will serve the root `index.html` and 404 if it doesn't match.

```sh
http {
    include mime.types;

    server {
        # ...

        location ~* /count/[0-9] {
            root /home/hapless/nginx-basics;
            try_files /index.html = 404;
        }
    }
}
```

## Redirects

Redirects with http code 307 to the content to be served in location /fruits

```sh
http {
    include mime.types;

    server {
        location /crops {
            return 307 /fruits;
        }
    }
}
```

## Final configuration

Our final configuration would have looked like this:

```sh
http {
    include mime.types;

    server {
        listen 8080;

        root /home/hapless/nginx-basics;

        location /fruits {
            root /home/hapless/nginx-basics;
        }

        location /carbs {
            alias /home/hapless/nginx-basics/fruits;
        }

        location /vegetables {
            root /home/hapless/nginx-basics;
            try_files /vegetables/veggies.html /index.html = 404;
        }

        location ~* /count/[0-9] {
            root /home/hapless/nginx-basics;
            try_files /index.html = 404;
        }

        location /crops {
            return 307 /fruits;
        }
    }
}
```

## Conclusion

For this first approach to `nginx` we'd get the following configuration. Next
time, I'll take a peek to load balancing and rewrites of it. I need to make this
redirect the request to my .NET web api and send the client back the
information. In my case, a combination of assets and metadata for photos.

`nginx` its an awesome tool and I'm glad for having my feet wet with this
project that will certainly teach me how to design robust systems and take
advantage of containers and VPSs.
