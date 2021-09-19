---
type: work-example
title: 3D Gaming In-Browser
position: VP Engineering
tags: Browser, Unity 3D, WebGL, Angular, Node.js, Browser Messaging, REDIS, PostgreSQL, ElastiCache, MongoDB, COPPA, Event Streaming, Auto Scaling, Load Balancing, Multi-Region Failover, Secure Code Deployment
year: 2012
icon: RiGamepadLine
context: A startup I helped co-found wanted to create a browser-based 3D platformer that would teach K-12 technology education curriculum with game mechanics and track student progress in a custom learning management system for parents, teachers, and non-profits.
image: './gaming-education-01.svg'
imageDark: './gaming-education-02.svg'
---

### Challenges

The obvious challenge was rendering high-quality 3D gameplay in the browser with reasonable load times. Beyond feasibility, children 13 and under made up most of the user base, so the experience had to comply with relevant regulations such as COPPA. The curriculum needed to be customizable for state-by-state standards, which occasionally changed, and player progress impacted loading collectible items and tracking achievements. Additionally, many early adopters were non-profits and school districts where hardware and internet speeds were sub-par.

### Solution

I was responsible for architecting a holistic solution that accounted for all of the challenges mentioned above. We promoted development experience for the web and game dev teams to work together, used multi-region availability with automated failover, and built secure and automated code deployments when this functionality was not a commodity. The front-end applications were in early versions of Angular, backed by a Node API with caching through REDIS and PostgreSQL. Cloud services provided by AWS were autoscaling and built on top of Virtual Private Clouds. This solution performed admirably and required almost no infrastructure changes for many years.
