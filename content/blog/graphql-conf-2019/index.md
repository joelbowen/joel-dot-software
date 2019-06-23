---
title: Top Takeaways from GraphQL Conf 2019
description: I have 10 hours on a train, 3 days worth of notes and very little sleep but plenty of excitement about GraphQL so here are my takeaways from GraphQL Conf 2019 and the first ever Prisma Day.
photo: './its-graphql-time-2019.jpg'
photoDescription: Joel Bowen with Sashko Stubailo and Lee Byron at GraphQL Conf 2019
photoCredit: Sergio Pellegrini
photoCreditLink: https://www.instagram.com/iamsergiop
date: '2019-06-22'
---

[GraphQL Conf 2019](https://graphqlconf.org) is officially over, and for me, there will be a lot to reflect on in the coming weeks and months. But I have 10 hours to kill on a train to Switzerland so here are my takeaways less than 24 hours later.

## TL;DR - Notable Tools and Concepts

In no particular order; a few things that were discussed, showcased, released, or otherwise notable during GraphQL Conf and Prisma Day including some not directly related to GraphQL.

- [Principled GraphQL](https://principledgraphql.com/)
- GraphQL was not _designed_ to solve important server architecture concerns. ([Dan Schafer](https://twitter.com/dlschafer))
- You should care about _all_ the states of what you asked for, and recognize all errors are not equal ([Sasha Solomon](https://twitter.com/sachee))
- Prisma 2: [Photon](https://github.com/prisma/photonjs) & [Lift](https://github.com/prisma/lift)
- Serverless is stateful! Functions maintain state between executions of the same instance ([Guillermo Rauch](https://twitter.com/rauchg) @ Prisma Day)
- [Calvin: Fast Distributed Transactions for Partitioned Database Systems](http://cs.yale.edu/homes/thomson/publications/calvin-sigmod12.pdf)
- [FaunaDB](https://fauna.com/) _Implements Calvin_
- [CodeSandbox.io](https://codesandbox.io/) _I had no idea it was so easy to [import from GitHub](https://codesandbox.io/docs/importing#import-from-github)!_
- Get your types! [GraphQL Nexus](https://nexus.js.org/), [TypeGraphQL](https://typegraphql.ml/), [graphql-compose](https://graphql-compose.github.io/)
- [figma-graphql](https://github.com/braposo/figma-graphql) for all sorts of amazing things. ([Bernardo Raposo](https://twitter.com/braposo))
- Compiling your GraphQL queries for _serious_ optimization potential. [Demo](https://try-graphql-jit.boopathi.now.sh/) ([Rui Araujo](https://twitter.com/raraujoc))
- [https://twitter.com/thegraphqlconf](https://twitter.com/thegraphqlconf)
- GraphQL has a freaking documentary now (I might even appear in the b-roll) from [Honeypot](https://www.honeypot.io/)
- [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/)

---

_I intend to update this page with links to the talks whose concepts I reference when they are available._

## GraphQL is a small part of the stack, and that's good

GraphQL was not _designed_ to solve many important server architecture concerns.

This concept is how Dan Schafer kicked-off GraphQL Conf day 1 – by going back to _2008_ (not just 2012) to talk through the problems facebook was solving. Between the internal 2012 and 2015 evolution, through to 2015 when it was made public, Facebook already had solutions for what are still our common architectural concerns today, so GraphQL didn't need to address them.

This doesn't mean these concerns aren't important, authorization, rate limiting, or caching, these problems simply aren't part of the GraphQL specification, and so are left to implementors and communities.

And while GraphQL is a small part of the picture, its impact can be felt on all parts fo the product development process. [Sashko Stubailo's](https://twitter.com/stubailo) talk the first day emphasized this reality while showing how easy it can be to build powerful tooling around GraphQL.

## The community is wrestling with one graph, many teams

A common theme of the talks was scaling the graph, both in terms of performance and in terms of collaboration. There were many perspectives on these topics, including the [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/) architecture which still felt very new and somewhat opaque to most of the people I spoke with.

However, the community seems to recognize the need to improve the current state and provide clarity on methods that have been thoroughly evaluated, including plenty of use-case specific information. Companies will almost certainly continue to handle scaling in their way, but hopefully we can coalesce around a few patterns.

## That type safety is _so hot_ right now

Many languages and technologies were represented in the talks, and by attendees, which is one of my favorite things about the GraphQL community. However, it was notable that in almost all the talks there was an assumptive tone about the importance (and joys) of type safety throughout the stack.

Notably for me, between Prisma Day (more on this below) and GraphQL Conf it seemed clear that TypeScript is continuing to grow in adoption and general popularity so that it no longer seems to carry as much of a stigma as I have perceived in the past.

## Schema (SDL) first v.s. code first

As far as arguments go, this one seems to be _incredibly_ low-key within the GraphQL community. Maybe it's just because the GraphQL community is healthy, or people don't see this as a topic worthy of dividing. Whatever the reason, while there was plenty of clearly stated positions on both sides, it seemed genuine.

GraphQL Conf organizers did a great job of giving space to both camps to share their reasoning, but the energy seems to be coalescing around code first with caveats to your organization's needs.

## It is still about people

Much like the importance of type safety, there was a pervasive theme around collaboration and the ability to create a shared language between teams. I particularly enjoyed [Jon Wong](https://twitter.com/jnwng)'s talk about evolving the graph and [Bernardo Raposo](https://twitter.com/braposo)'s talk where he extolled the importance of human-first API design.

## Bonus: Prisma Day

Conveniently, [Prisma Day](https://www.prisma.io/day/) happened in Berlin the day before GraphQL Conf began; this conference was my first real introduction to the Prisma community.

Everyone was eager to dig into the [Prisma 2](https://www.prisma.io/blog/announcing-prisma-2-zq1s745db8i5) announcement in a practical way, so many of the talks focused on walking through the current state and future roadmap.

The speakers in the first half of the day after the keynote from Prisma CEO [Johannes Schickling](https://twitter.com/schickling) each took turns throwing themselves at the mercy of the demo gods with live-coding, it felt like a competition to see who could do the most ill-advisably ambitious demo and live to tell the story.

However, they all handled this gracefully, and by lunchtime there were surprisingly few casualties (none, really) and I was sufficiently intrigued by Prisma 2's promised tooling: a type-safe database client ([Photon](https://github.com/prisma/photonjs)) and declarative data modeling with database migrations ([Lift](https://github.com/prisma/lift)) that seem carefully curated for flexibility and developer experience.

The latter half of the day only moderately cooled from the morning's tomfoolery and began to skew more towards trends and practical application interspersed with some genuinely compelling overviews like [Evan Weaver](https://twitter.com/evan), CEO at [Fauna](https://fauna.com/), walking through FaunaDB's place in a _modern_ stack with Serverless. I cannot wait to learn more about Fauna and try it out on my own time.

Another fantastic talk was from [Guillermo Rauch](https://twitter.com/rauchg), CEO at ZEIT and creator of [socket.io](https://socket.io/) and [mongoose](https://mongoosejs.com/) among other things, who demoed a serverless instance that played Pokémon from an emulator one frame at a time taking advantage of Lambda's persisting state between function executions, a reality that is not immediately clear when developing for serverless. Hopefully, this talk will be posted soon!

I've had only been partially aware of Prisma from looking into GraphCool in the past, and I have not used Prisma in production. But I appreciated the intimate feel of Prisma Day along with the depth quality of the content – I'll be looking for an opportunity to add Prisma tools into my stack soon to learn more about them.

## Conclusion

It's a great time to be using GraphQL and contributing to the GraphQL community. Special shout-out here to Sashko Stubailo's talk about building GraphQL tooling with ASTs! He made this look approachable and compelling.

I wasn't sure what to expect back in October 2018 when I purchased my ticket to come to Berlin, but on a personal level the experience was exactly what I look for in a conference - plenty of great learnings from the stage, and even more from the people I was able to meet and converse with. It does feel like GraphQL is earning its place as a core member of web technology.

Thanks for reading! I found it helpful to reflect on these topics so quickly after the end of the conference. If you think this content would be interesting or beneficial someone else, feel free to share it.

---

_One thing I noticed and want to applaud was how earnestly Prisma CEO [Johannes Schickling](https://twitter.com/schickling) interacted with the community both at Prisma Day and at GraphQL Conf. He was incredibly accessible. I watched Johannes seek out conversation with as many attendees as he could, well into the evening after the official schedules had completed and groups were at biergartens and the like. Without even intending it, I had multiple opportunities to sit and talk with him and witness how he spoke to others, eliciting their feedback and encouraging them in their individual endeavors. I believe Prisma's continued growth and success will be due in part to the tone this kind of leadership brings to a community._

---
