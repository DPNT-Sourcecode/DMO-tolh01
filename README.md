# tdl-warmup-nodejs


## 1. Requirements

- `Node 22.14.0`
- `NPM 11.2.0`

## 2. How to start

- Install dependencies `npm install`
- Open `lib/send_command_to_server.js` in your favorite IDE
- Read the comments as documentation, they will guide through the rest of the setup



## QUESTIONS
- the server runner seems to not support async functions. in DMO_R4, i had "async waves()" and the server always got the promise {} instead of awaiting the promise. is it me being dumb? (my workaround was to convert the legacy code to sync)
