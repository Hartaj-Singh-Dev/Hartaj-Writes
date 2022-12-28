---
title: 'CORS explained: Error fixing on both client and server side'
metaDesc: 'CORS (corss-origin-resouce-sharing) is a policy by web browsers for security purposes and also a option for HTTP request headers to a server to indicate an origin ( domain, URL ), which allows browser to permit loading resources ( scripts  or code ) from other servers '
readTime: '15min'
date: '26-12-2022'
image: '/images/cors-example.png'
tags: 
   - next.js cors error
   - React cors error
   - MERN
   - node.js cors error
   - cross-origin-resource-sharing policy
   - Access-Control-Allow-Origin 
   - HTTPS
   - request and response
   - Same Origin
   - Cors origin
   - server and client
   - React
   - Next.js 
   - Hartaj Writes
   - Hartaj Singh Sidhu
   - Open Source


--- 
___
## Prerequists:-
 1. Having knowledge about how HTTPS works 
 2. Have basic knowledge how web works
 3. Have basic knowledge of server and client architecture 

So, either right now you are stuck at this error or once in your full stack web dev journey have faced it, well either case in this article we will fix it.
Before fixing any problem, the most crucial thing is to know what is the problem exactly and why is it occurring.

CORS (cross-origin-resource-sharing) is a policy by web browsers for security purposes and also an option for HTTP request headers to a server to indicate an origin ( domain, URL ), which allows the browser to permit loading resources ( scripts or code ) from other servers.

Now let’s use an example, let’s say you are building a website (full-fledged) and on the dashboard page of the website you want to access data from the database which is on this URL (https://api.backend.com/{username}) from the origin (https://frontend.com/dashboard), Now overtop view is that from origin you will make a request to the backend for data using HTTP and server will give you data, now let’s break it down
 


>GET https://api.backend.com/{username} HTTP/1.1
