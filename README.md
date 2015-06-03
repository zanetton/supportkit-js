# [SupportKit Javascript SDK](supportkit.io)
Build status (integration) : [![Circle CI](https://circleci.com/gh/lemieux/supportkit-js/tree/integration.svg?style=svg&circle-token=b5a952df982b294aa59902d33231424181d714a7)](https://circleci.com/gh/lemieux/supportkit-js/tree/integration)
## Usage

### Script Tag

Add the following code in between the ```<head>...</head>``` tags on your page.

```html
<script src="https://cdn.supportkit.io/supportkit.min.js"></script>
```

Initialize the plugin using this code snippet

```html
<script>
    SupportKit.init({appToken: 'your_app_token'});
</script>
```

### In Node.js and Browserify

Install from npm

```
npm install supportkit-js
```

Require and init

```javascript
var SupportKit = require('supportkit-js');

SupportKit.init({appToken: 'your_app_token'});
```

### Bower

Install from bower

```
bower install supportkit-js
```

Include in JS using preferred method and init

```javascript
SupportKit.init({appToken: 'your_app_token'});
```

## API

### Individual functions

#### init(options)
Initializes the SupportKit widget in the web page using the specified options

```javascript
SupportKit.init({
    appToken: 'your_app_token',
    givenName: 'Cool',
    surname: 'Person',
    email: 'their_email@whatever.com',
    // Additional properties
    properties: {
        'anything': 'whatever_you_want'    
    } 
});
```

#### open()
Opens the conversation widget

```javascript
SupportKit.open();
```

#### close()
Closes the conversation widget

```javascript
SupportKit.close();
```

#### sendMessage(text)
Sends a message on the user's behalf

```javascript
SupportKit.message('hello');
```

#### updateUser(user)
Updates user information

```javascript
SupportKit.updateUser({
    givenName: 'Updated',
    surname: 'Name',
    email: 'updated@email.com',
    properties: {
      'justGotUpdated': true
    }
});
```

### Events

```
// This event triggers when init completes successfully... Be sure to bind before calling init!
SupportKit.on('ready', function(){
    console.log('the init has completed!');
});
```

## How to contribute

### Clone the git repo
```git clone https://github.com/supportkit/supportkit-js```

### Install Node.js and run the following

```npm install```
```npm install -g grunt```

### Essential Grunt Tasks

* ```grunt build``` dumps a plain and a minified file from all files in the folder ```src``` to dist/supportkit.min.js
* ```grunt clean``` removes all files in the folder ```dist```
* ```grunt test``` runs karma tests
