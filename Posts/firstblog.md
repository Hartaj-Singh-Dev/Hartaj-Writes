---
title: '🔥 CORS explained: Error fixing on both client and server side'
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

![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--tRB8TzRI--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/pokn6wy4nwkx7s5bkd9w.png)
___
## Prerequists:-
 1. Having knowledge about how HTTPS works 
 2. Have basic knowledge how web works
 3. Have basic knowledge of server and client architecture 
___
So, either right now you are stuck at this error or once in your full stack web dev journey have faced it, well either case in this article we will fix it.
Before fixing any problem, the most crucial thing is to know what is the problem exactly and why is it occurring.


CORS (cross-origin-resource-sharing) is a policy by web browsers for security purposes and also an option for HTTP request headers to a server to indicate an origin ( domain, URL ), which allows the browser to permit loading resources ( scripts or code ) from other servers.

Now let’s use an example, let’s say you are building a website (full-fledged) and on the dashboard page of the website you want to access data from the database which is on this URL (https://api.backend.com/{username}) from the origin (https://frontend.com/dashboard), Now overtop view is that from origin you will make a request to the backend for data using HTTP and server will give you data, now let’s break it down
 

```
GET https://api.backend.com/{username} HTTP/1.1
```
Here browser The web enforces something called the same-origin policy. By default, we can only access resources that are located at the same origin as the origin of our request! 💪🏼 It's totally okay to load an image that's located at https://frontend.com/image1.png. So now you will questioning how would you determine same origin and cross orgin .

### Same origin: 
 https://frontend.com/{anything} 

### Corss origin:
different domain -
 https://api.backend.com/{anything}   

different protocol -
 http://api.backend.com/{anything}

different subdomain -
 https://server.api.backend/{anything}

different port -
   https://api.backend.com:8080

![same origin and corss origin animation](https://res.cloudinary.com/practicaldev/image/fetch/s--ZLRnzzX7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/0qe4yzasvrm7r0a76kui.gif)

So as you have idea to these policy, now as you already made a request to server it will by default have a response of 
 ```
 HTTP 404 code 
Access to fetched has been blocked by CORS policy
```

But now as you already are familiar with the problem now let’s fix this problem 
From server-side CORS , now edit server response with a header 

```
response.setHeader(
“Allow-Control-Allow-Origin” , ”https://frontend.com”
)
```

Or if you are using node.js or anything framework for backend, then you can search for docs


Awesome , now as you added this header into your server response , now same-origin policy won’t restrict us from getting Data

![alt ext](https://res.cloudinary.com/practicaldev/image/fetch/s--vM2oftF6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/akf0epavr00o2vo857lc.gif)

The CORS mechanism within the browser checks whether the value of the Access-Control-Allow-Origin header equals the value of the Origin that was sent by the request 
In this case, the origin of our request is https://www.frontend.com, which is listed in the Access-Control-Allow-Origin response header!

*And* if you are still having Issues with CORS , search for official docs of whatever tech you are using in backend.

## 🍪 Credentials
 Even if you are using token or cookies in your website , by default cookies are also on same-origin policy , even if you allow access to resources from cross origin , still by default cookies are not accessable to it , *To get access* to cookies in cross-origin , you have to set another http header " Access-Control-Allow-Credentials  " 
 ![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--JOa04OkM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/vg3yo6qfqw12oh0f68yg.gif)
 All set! We can now include credentials in our cross-origin request 🥳

## Conclusion
  Though , we all devs can agree , first time encountring CORS error is hell lot of frustrating ,but after a 15 min Read , it's all solved now  you make cross-origin requests safely , As this Blog was a short introduction to CORS , you can have much more on these resources [W3C Cors enabled](https://www.w3.org/wiki/CORS_Enabled) and [another one](https://livebook.manning.com/book/cors-in-action/part-1/)

** And that's it , Feel Free to Connect with Me 😀 **