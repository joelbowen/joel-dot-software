---
title: 6 Principles of Software Application Architecture
description: After concluding a few successful software architecture design and implementation phases, I want to take a moment to write down some of the principles I have learned, and how they can simplify the architectural design process.
photo: './nyc-oculus-wes-hicks.jpg'
photoDescription: The "Oculus" at World Trade Center station in New York City
photoCredit: Wes Hicks
photoCreditLink: https://unsplash.com/@sickhews
keywords: Application Architecture,Software Design,Engineering,Systems Engineering,ROI,Service Oriented,Principled Developer,Pragmatic Design,Software Lifecycle
date: '2019-09-14'
---

Not long ago, in preparation for a software architecture and design phase at [Skookum](https://skookum.com), a coworker recommended I read [Design It!](https://www.oreilly.com/library/view/design-it/9781680502923/) by Michael Keeling. Ultimately, this turned into one of those rare experiences where a book feels perfectly timed, like a pointed guide to everything you were wrestling with during a particular season. Now, after concluding a few successful design and implementation phases with my team, I want to take a moment to write down some of the fundamental principles I have learned.

## Intro: Why is architecture important, and how long should it take?

It can be challenging to articulate the importance of spending time architecting (or "systems engineering") rather than building. Unless your business has been keeping meticulous track of your software development lifecycles, you might be determining timelines based on gut feel rather than facts.

Fortunately, there is some great research on this subject that can help guide and direct these assessments, like [**The ROI of Systems Engineering: Some Quantitative Results  
Boehm, Valerdi, 2007**](https://www.researchgate.net/publication/224579114_The_ROI_of_Systems_Engineering_Some_Quantitative_Results).

![Effects of software size on architecture and risk resolution time](https://d3i71xaburhd42.cloudfront.net/499a3c608498d907ba479b62641e676f82cbb833/7-Figure5-1.png)
_Source: [Architected Agile Solutions for Software-Reliant Systems](https://www.semanticscholar.org/paper/Architected-Agile-Solutions-for-Software-Reliant-Boehm-Lane/499a3c608498d907ba479b62641e676f82cbb833)_

Ultimately, this is how I think about factors - estimate architectural timelines only after you have a general understanding of the proposed software's size and stop architecting once you have answered the most important questions as related to the 6 principles I describe below.

If you have answered the critical questions, cataloged your concerns, resolved known risks or proposed mitigation strategies, and created an informative guide for your teams to take ownership over design and implementation, your work is done.

## Principle #1: Reduce rework, reduce risk.

> _Software Architecture is: “‘the important stuff.' Whatever that is” (Martin Fowler)_

Architectural efforts are inherently intended to **reduce risk and rework**. You do this by learning as much as you reasonably can about the existing systems, business goals, architecturally significant requirements (ASRs), stakeholders, and the 'end-users.

With this information, you can identify architectures that are likely to satisfy all of the ASRs while meeting Business Goals and providing valuable output for stakeholders and your users. Often, making tradeoffs for non-ASRs is necessary to achieve a reasonable balance in cost, effort, and maintainability.

Additionally, thorough architecture documents provide a valuable outline or "playbook" that informs the implementation team’s efforts and serves as a historical record. With such a guide in place, your stakeholders can have confidence that the business goals have been adequately translated into architecture, and your team can have confidence that the work proposed is the _right_ work and won't have to be redone.

## Principle #2: Write down your concerns!

> Gut feelings tell us something is wrong, or it could just be the Burrito you ate for lunch.

Early on in the process, and consistently throughout the process of creating a technical architecture, **it is essential to write down the things that are concerning and add them to a list**, _Design It!_ refers to this as a "Catalog of Concerns."

Concerns or “gut feelings” help guide the initial straw-man architectures, and help refine or challenge existing beliefs. When evidence or further learnings invalidate these concerns, they can be resolved and documented for future readers.

Even if you can resolve a concern quickly, it's helpful to write that down as future designers and implementors may have the same concerns.

## Principle #3: Preserve ambiguity

> Future you knows a lot more than present you does

Preserving ambiguity might be my favorite principle I learned from _Design It!_. I have experienced the power of this principle multiple times during the design and implementation phases.

Future designers and implementers will know more than what was identified during an architecture design phase. With that in mind, it's vital to weigh choices being proposed and evaluate whether or not each is necessary to make.

Architecturally significant decisions, those that strongly influence the structure of the architecture, are often made during the architecture design phase. Defining ASRs is essential, but **not every choice needs to be made before implementation begins**. If it's a difficult choice that is easy to change later, it might not be architecturally significant and can be deferred to a downstream designer.

**if it’s easy to change later then it is probably not an architecturally significant decision.**

## Principle #4: Design for change

> Everything changes, including software, or it will die

Designing for change tends to be everyone's favorite aspirational principle, but it is difficult to be confident you have achieved a flexible and practical architecture.

Ultimately, all software must change over time, or it will fail to meet the needs and quality attributes defined by the business.

A mature software architecture attempts to account for change by considering coupling, deployment, deferring non-architecturally significant decisions, and by moving design decisions out of the core architecture.

## Principle #5: Reduce the total cost of ownership

> Understanding and reducing cost reduces risk in all stages

When creating software architectures, evaluating cost can end up being the last step in the process. Discovering you've proposed a costly solution means you have to _rework_ your architecture, which is only slightly better than having to rework your software.

**It is essential to gain at least a cursory understanding of the businesses tolerance and expectation for cost**. With this knowledge, you can find ways to reduce the total cost of ownership throughout the process by thoroughly evaluating costs.

One method of reducing Total Cost of Ownership (TCO) may be selecting off-the-shelf solutions or partnering with vendors. These solutions can provide functionality and services that adhere to the businesses desired quality attributes.

Using off-the-shelf solutions shouldn't be looked down on; instead, this allows engineering teams to focus their efforts on other activities. A better use of their time might be building value-add features and integrations, reducing technical debt, and performing necessary maintenance.

## Principle #6: Account for business-driven principles

> How does the business define success for the architecture today and tomorrow?

Business-driven principles are high-level architectural principles that heavily influence the technical architecture. They are rooted in business goals which must be clearly and concisely defined early on in the architectural process. Once you have your business goals, you can create business-driven principles and tie each principle to one or more business goals.

Business-driven principles should change between architectures as each software solution solves different business goals but might correspond to familiar themes such as: Time to Market, Service Oriented Architecture, Reducing Reliance on Vendors, and Modern UI/UX.

## Conclusion

Being asked to propose an architectural solution to a complex business problem can seem daunting. However, I have found that **the process of defining and communicating a capable architecture can be more exhilarating than overwhelming** by following (and communicating) these principles while openly sharing concerns, and asking your stakeholders to join you in the mission of creating flexible and effective architectures.

I believe these principles are helpful, but they only begin to scratch the surface of how to approach a complex architectural problem. I highly recommend picking up a copy of [Design It!](https://www.oreilly.com/library/view/design-it/9781680502923/) by Michael Keeling and developing your principles and processes that allow you to systematically and consistently navigate the changing waters of software architecture and design.

If you have any feedback on this content or would like to share some of your principles, please reach out on social, or directly at [hello@joel.software](mailto:hello@joel.software)
