# Numa AngularJS Client

## What?
"Numa" is derived from "pneúma", meaning wind, breath, spirit. This is the repo for Numa's AngularJS client, a work in progress. Numa is becoming a hub for sharing poetry, musings, and free-form diction. It will be a platform to garner feedback and connect with others. A descendant of [Warrior Poets](https://github.com/trance-with-me/Warrior-Poets).

## Why?
I'm developing Numa because I care about connecting with people; sharing expressive works with my friends and family; and having a clean, dynamic, and modern web application for sharing any form of lyrical expression.

## Okay, how do I get the client running?
* Download and install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* Download and install [Node.js package manager](https://github.com/npm/npm).
* Install [Grunt](http://gruntjs.com/): `npm install -g grunt-cli`
* Install [Bower](http://bower.io/): `npm install -g bower`
* Clone the repo: `git clone https://github.com/boyz-2-men/numa-angularjs-client.git`
* Install packages: `npm install`
* Install dependencies: `bower install`
* Launch: `grunt serve --no-color` or just `grunt serve`
* Visit: `http://localhost:9000`
* And now you'll want to get the [server](https://github.com/boyz-2-men/numa-restful-api) running.

## Feature list

- Login with Facebook, Github, and Google
- Mobile responsive layout
- Search poems by vote count, tag, content, or title
- Attach YouTube or Vimeo videos to poem
- Upload image to Amazon S3 and attach to your poem
- Tag your poem
- Upvote/downvote poems
- Save others' poems to your favorites for easy finding later on
- Publish poems to the feed or keep them unlisted only for users with the URL
- Follow other users and get notifications when they write a new poem
- Get notifications when someone gives you feedback
- Full RESTful API for backend server
- Stream uninterrupted, select songs from Numa's SoundCloud playlist while browsing
- Export your poems as a PDF document for backing up

### License

The MIT License (MIT)

Copyright (c) 2014 Andreas Basurto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.