---
title: Alvida, RGSoC 🙋🏽
layout: post
created_at: Wed July 12 2017
permalink: blog/2017-07-12-alvida-rgsoc-2017
current: blog
author: Brihi and Shravika
twitter: 276linesofCode
categories: student-posts
---

[Blog we can refer to](https://railsgirlssummerofcode.org/blog/2015-09-26-tremors)

[Taneea Vrinda di's blog](https://github.com/rails-girls-summer-of-code/summer-of-code/blob/gh-pages/blog/_posts/2016-10-06-twitches-say-goodbye.md)

Sub themes to write on -

1. What did we do? (Screenshots of PRs, Tweets, Demos, GIFs, etc)
2. Challenges
3. Extras (Our talks in WWCD and LinuxChix India)
4. A shoutout to the amazing Tessel Community (All the people who've helped us make our PR's work)
5. How are we benefitted/Gonna use this knowledge?
6. What's next?

--------  

About two and a half months back, none of us had an idea of what this journey would be like. RGSoC had been the first Summer of Code or any other program as such that we were a part of, and our eagerness to grasp the most from the program had us going all throughout. Not to mention, we have gained so much more than we had even anticipated.

## Our Work this Summer

As we look back into our two and a half months, RGSoC and Tessel have given us opportunity to explore and grow in all spheres of an Open Source Project.

We've got our hands dirty with things like Documentation, Tutorials, Code, Hardware experiments, Talks, Presentations and even Product Design, to name a few. We started our Summer with exploring version control with GitHub and learning the intricacies of the same. A professional Open Source project has a very different approach to Pull Requests and Contributions. We learnt how to send PRs, how to get them reviewed ( Trust us, Reviews are the real deal in the learning ), how to squash commits, how to write clean code and clean commit messages, branching of cloned repositories, and most importantly, asking doubts on the issues that we don't understand.
Our Hardware modules were shipped from the US and we spent some time exploring them. This was the most exciting part - Making circuits, seeing the LEDs shimmer, watching the Accelerometer come back to life, and many many more.
After exploring the different repositories in Tessel, we started exploring issues which were Contribution starters. A lot of them were listed in the Tessel blog called "[This Week in Tessel](https://tessel.io/blog/157835574022/this-week-in-tessel-fun-with-open-source)" and we started completing them one at a time.
We made two important tutorial modules for Tessel for their documentation page. This included Fritzing diagrams of the circuits, describing the functionality in layman terms, and writing code which would be easily understood, with the help of the comments.
Apart from all the technical work, we learnt about Product Design and how exactly does a product make it's way to the Open Source domain. We made a draft of something called a Product Requirement Document (PRD) for our proposal of HAP (Humanoid Arm Project) that we had made during our application process.

## Challenges

Before RGSoC had started, our mentor, Kelsey had sent us a Plan of Work to follow. It included the various things we had suggested we would like to work on during our application process. It was a weekly plan with difficulty level slightly increasing every week. One of the tasks we had to accomplish was to implement One-Wire Communication Protocol for Tessel. We tried our initial few weeks on this issue but we were not able to get much out of it. This was because we were not able to figure out exactly where to start. We tried mapping the coding in Arduino with the one for Tessel but still couldnt succeed. Since we were beginners in git, sometimes we were'nt able to figure out how to squash multiple commits into one for clarity, how to sync the forked branches with the master branch and many others. In the beginning we did not even know how to send Pull Requests for different issues by making separate branches for each. In the second month of RGSoC, during one of our weekly calls with Kelsey, we were introduced to Reach which is a module that the Tessel community is currently working on. It requires the ESP32 hardware module. So, we got one for us and started working on the same but got stuck in between since we were not able to push the python code to the module. Although, in the end, we were able to figure out the error in our approach with the help of one of our seniors at our University. Tessel was all based on JavaScript. We were both new to this language and hence faced certain challenges while comprehending the code which was already there in Tessel. But, one of our coaches, Divam, helped us in figuring out the keywords used in the code snippets with the help of which we were able to make some tutorial for a few functionlities in Tessel in JavaScript.
