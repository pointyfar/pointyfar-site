---
title: "Hello World aka A Bunch Of Lorem"
date: 2018-03-28T21:55:52+10:00
draft: false
hasMermaid: true
hasMath: true
hasCode: true
---

### Some Lorem

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<!--more-->

<i class="fab fa-github"></i>


### A mermaid

Set `hasMermaid: true` in the frontmatter of the post using `mermaid`.

The following code, taken from the [mermaid.js documentation](https://mermaidjs.github.io/) 
```markdown
{{</* mermaid */>}}
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2               :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to mermaid                      :1d
{{</* /mermaid */>}}
```

... will render as below: 

{{< mermaid >}}
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2               :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to mermaid                      :1d
{{< /mermaid >}}

### More Lorem 

Quid aliquip te pariatur non fugiat de incurreret si quae. Cernantur non dolor iis sed ex nulla deserunt. Laboris ea elit consequat an noster pariatur distinguantur. 

Fabulas quo export vidisse se qui occaecat te ingeniis. Arbitror illustriora qui mentitum, tamen si offendit. Probant ex occaecat eu incurreret ex labore eiusmod. Ne duis fidelissimae, ipsum aut occaecat.



### Here be Math

Let `$t \in \Re^+$`and find `$\mathbb{E}[S_t], \mathcal{V}[S_t]$`

$$
S_t = \int_0^t S(s) dW(s)
$$

### Ending with a pretty picture 

{{< image src="/hero.jpg" alt="hero">}}