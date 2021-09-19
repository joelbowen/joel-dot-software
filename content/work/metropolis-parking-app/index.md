---
type: work-example
title: Parking App
position: Application Architect / Mobile Developer
tags: Rapid Prototyping, Application Architecture, Data Pipelines, React Native, Flow Types, AWS Batch, REDIS Protocol, ElastiCache, S3, ECS, API Gateway, DynamoDB, Serverless, Automated Deployment, Non-Radial Geo Search, Infrastructure as Code
year: 2018
icon: RiParkingBoxLine
context: A major metropolitan city needed a mobile application to help its residents find parking spots based on historical availability trends and knowledge of upcoming events.
image: './parking-01.svg'
imageDark: './parking-02.svg'
---

### Challenges

We had only a few weeks to build a product. The application database needed to ingest a large amount of data every day to construct the availability potential for every meter in the city. The target user base was on a wide variety of mobile devices, both old and new. Additionally, partner contracts stipulated showing accurate maps within a box search rather than a radial search.

### Solution

I orchestrated on-demand cloud batch computing to process nightly data dumps, serverless functions behind an API gateway for most platform features, and Algolia search products for high-performance search and non-radial geospatial queries. My role encompassed application architecture, infrastructure configuration, prototyping (we built a POC in a few days), mobile development, and build system management. We were able to deploy a production-ready solution using React Native within a couple of weeks, and we regularly iterated to bring a first-in-class UX to life that performed well on a wide range of devices.
