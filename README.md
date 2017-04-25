# auth0-pusher-feed

A realtime feed made with [Create React App](https://github.com/facebookincubator/create-react-app) and Pusher that show authentication events from an Auth0 app.

You can follow the tutorial at the [Pusher blog](#).

## Requirements
- A free [Pusher](https://pusher.com/signup) account.
- A free [Auth0](https://auth0.com) account.
- An app with an Auth0 login configured and a rule with the code of this [gist](https://gist.github.com/eh3rrera/00ee1aeb462777736f4e441694662c5d) set up.

## Installation
1. Clone this repository and `cd` into it.
2. Create a Pusher app and replace your key in `src/App.js`.
3. Execute `npm install` or `yarn` to install the dependencies.
4. Execute `npm start` to start the development server and go to `http://localhost:5000`.
5. Start signing up and logging in the Auth0 app.

## License
MIT