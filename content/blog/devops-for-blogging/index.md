---
title: 'DevOps for Blogging'
description: 'I know many software engineers, and I wish we blogged more often. We benefit from the blogs our peers write, and we are inspired to contribute to the community. But I write code more effectively and consistently than blog posts. I hope to change that by learning from my code-writing self and introducing some classic DevOps practices into my process.'
photo: './andrew-neel-writing-computer.jpeg'
photoCredit: Andrew Neel
photoCreditLink: https://unsplash.com/photos/cckf4TsHAuw
date: '2022-02-27'
keywords: blogging, software engineering, devops, small batches, trunk-based development, continual improvement focus
type: blog
---

I know many software engineers, and I **wish** we blogged more often. Or, maybe more accurately, we feel like we **should** blog more often. We benefit from the blogs our peers write, and we're inspired to contribute our nuggets of wisdom[^1] to the community; this is one of the same reasons we want to contribute to Open Source.

Public writing is somewhere between journaling and brushing up your resume; It preserves something tangible about yourself that isn't easy to convey any other way.

More importantly, for the three people who might read my blog posts[^2] and for me, it gives us a place to work through an idea.

That's the value I get from blogging, a space to work through ideas, preserve my progress, and share that with my peers for feedback. So why don't I blog more often? To say it briefly: I'm not writing blog posts like I write code[^3].

When I set out to write code, I have an idea in my head, much like the ideas I have before writing a blog post. I might even have a rough outline (design document) that I work through. I'm chasing that flow state to propel me through the creative process and into something I'm willing to share. Sometimes I throw away what I wrote, still benefiting from the process.

But I write code far more effectively and consistently than blog posts. Maybe I can change that by learning from my code-writing self.

## Work in small batches

When I write a new blog, I intend to write a **complete** post. A post that examines many sides of a concept, is well referenced, doesn't have many unanswered questions and leaves the reader feeling informed and inspired without a lofty word count. This is equivalent to writing an entire end-to-end feature in one deployment and essentially never happens.

In contrast, I strive to break product features down into meaningful chunks and write code in small batches[^4] that ship quickly.

_My application: write smaller blog posts!_

## Commit to Trunk

I have plenty of ideas I want to work through in a blog format. I tend to make an actual branch of my blog site, start a post there, and let it sit for days, weeks, months, years! They sit until I rewrite my website the next time and discard the orphaned branches.

These days, In contrast, I'm thinking a lot more about trunk-based development[^5], getting feedback in real-time, and deploying frequently.

_My application: publish quickly, ideally the same day I start the post._

## Use Version Control

My blog posts have essentially been big releases (see points above) that I rarely change after release because, in my mind, that would be some grave violation of the reader's trust. This is probably an unrealistic and excessive constraint.

When I write code, I expect it to be a living thing that changes over time through understanding and feedback. I have version control in place to help me track changes over time and roll them back when necessary.

_My application: update posts as needed to reflect evolutions in my perspective and understanding._

## Conclusion

I want to write more often because I think it's enormously beneficial for me and possibly helpful for others, so I'm taking a page out of my software development philosophy and trying out a few things:

I will lean into small-batches and write smaller posts that aren't exhaustive and don't consider every angle of a subject. I can always write multiple posts in a series if I want to expand on something. The point is to get my creative juices flowing, work through ideas, and share them for feedback.

As my understanding evolves, I will update or even delete (revert) posts.

I hope this will help me frequently release and continuously improve my process[^6].

Thanks for reading, you three. If you have thoughts or questions on this subject, I would love to hear from you. Reach out through my social accounts or directly to [hello@joel.software](mailto:hello@joel.software).

_The cycle time for this post was ~6 hours 🎉_

[^1]: "Wisdom" may be a bit generous for the things I set out to write
[^2]: Usually, my readers are people I sent a link to and said, "Can you check this out before our next chat?"
[^3]: Or at least, how I **endeavor** to write code.
[^4]: https://cloud.google.com/architecture/devops/devops-process-working-in-small-batches
[^5]: https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development
[^6]: https://en.wikipedia.org/wiki/Continual_improvement_process
