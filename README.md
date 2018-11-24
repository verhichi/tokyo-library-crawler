# Table of Contents
1. My Motive
1. TL;DR
1. Technologies used
1. Using the Application
1. Practicality

# 1. My Motive
- I was personally asked by a friend if I could somehow facilitate his library expeditions to find audio media. So I made this for him.
- There was a site that searched for books/magazines, but not CDs.
- Me: "If there ain't one, just make one"
- I also had interest in Web Crawlers at the time so I wanted to try it.
- I also also was studying React at the time so I decided to put it to use.

# 2. TL;DR
- Here is a 15sec gif showing the application in action.
![weeee, it worked](https://qiita-image-store.s3.amazonaws.com/0/317253/5725c670-8f15-0987-731b-82216f141887.gif)

# 3. Technologies used
- node.js (v8.10.0)
    - express (v4.16.4) - a popular node.js framework
    - superagent (v4.0.0-beta.5) - a light-weight clientside http request library
    - cheerio-httpcli (v0.7.3) - a web-scraping library that handles like jQuery
    - create-react-app (v1.5.2) - the react foundation builder that we've grown to love

# 4. Using the Application
1. run "npm run build" on the command line.
1. run "node server/server.js".
1. Open your browser and navigate to www.localhost:3000
1. Enter the keyword that you want to use to search.
1. Select whether you want to search the keyword as a title or artist.
1. Check all the wards with the libraries that you want to search in.
1. Click the "search" button and wait.
1. ???
1. PROFIT!

# 5. Practicality
- I'd have to say this is not really a practical application. Here's why...
    - The crawl speed is slow.
    - cheerio-httpcli is single instanced, meaning if someone is using it, noone else can use it. One person at a time, basically.
    - Depending on the library site, some URL's can not be property viewed because they require session ID's in cookies.
    - **Also, at the time of making, I didn't know about "robots.txt". Out of the 7 wards that can be selected, 5 of them had the url path set to "disallow". The remaining 2 wards just didn't have "robots.txt".**
