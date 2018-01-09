### Credit

This entire project is based off [this Medium Post](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5). Credit to it's author, David Gilbertson.

### What all is here?

1. A basic React app with some form inputs
2. A npm module, 'bad-juju', that will house our bad code
3. An api to receive the form data

### Running the React Application

```javascript
# within demo dir
> yarn start
```

### Running the API

```javascript
# within demo dir
> node ./api
```

### How does the attack work?

1. User creates seemingly useful node_module
2. When imported, node_module applies exploit to all forms on the site/application
3. Send all form data to an API - this should a) not be visible to humans and b) appear as though its just an analytics link
4. Be clever about when we send the form data and use all the information available to judge how safe it is to send
