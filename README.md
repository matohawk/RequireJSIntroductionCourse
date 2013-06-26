![msysgit](http://requirejs.org/i/logo.png)

----
#RequireJS Introduction Course

A small introduction to RequireJS, each branch correspond to a level

[RequireJS Website](http://requirejs.org/)

## Plan

**1. Very Brief history of web front-end architecture**

   1.1 (1) Web project architecture, the prehistory [chap1.1]()

   1.2 (2) Web project architecture, the post-modernism [chap1.2]()

**2. And RequireJS arrived?**

   2.1 (3) Javascript File and Module loader [chap2.1]()

   --- Move to the chapter 2.1 ---
   2.1.1 Load Javascript asynchronously

   2.1.2 Load with dependency management

   2.1.3 Help to structure your code

   2.2 Use Web Modules and in particular the Asynchronous Definition (AMD) [chap2.2]() (4)

        --- Move to the chapter 2.2 ---

        What is web module?    http://requirejs.org/docs/why.html

        Problems : Code complexity, web app, separate js files, assembly gets harder

        Solution : include, import, require - optimization tools - ability to load nested dependencies

        RequireJS choose AMD module - http://requirejs.org/docs/whyamd.html#amd

   2.3 (5) Optimize your JS code base [chap2.3]()

        Use the task runner Grunt and requireJS Server Side r.js, optimize and concatenate JS files with dependency management

        http://fr.slideshare.net/xMartin12/asynchronous-module-definition-amd

        http://requirejs.org/docs/api.html#config-shim