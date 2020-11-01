# twitter-server

Uses twitter user/search API for performing search on twitter

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all the required node modules

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Application Details

### `EndPoint http://localhost:8080/:username`

Provides a simple, relevance-based search interface to public user accounts on Twitter. Try querying by full name. Exact match searches are not supported.

### `Config.ts`

Create config.ts file on the same level of app.ts file with below secret credentials.

export const CONSUMER_KEY = "API Key";
export const CONSUMER_SECRET = "API Secret";
export const ACCESS_TOKEN = "Access Token";
export const ACCESS_TOKEN_SECRET = "Access token secret";

All four of them can be obtained at [dev.twitter.com](https://developer.twitter.com/en).

## `Without config.ts application will not start`
