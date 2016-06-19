#SpotCrime-city

[![npm](https://img.shields.io/npm/v/spotcrime-city.svg?maxAge=2592000)](https://www.npmjs.com/package/spotcrime-city)[![Build Status](https://travis-ci.org/troy0820/spotcrime-city.svg?branch=master)](https://travis-ci.org/troy0820/spotcrime-city)

####Currently the [spotcrime](https://github.com/contra/spotcrime) node module will allow you to fetch `JSON` of crimes in an area with latitude and longitude.
This `demo` wraps that functionality in a [Hapi](http://hapijs.com)  server and retrieve the `JSON` with endpoints for city and state.

##To see how it works

```javascript
npm i spotcrime-city
npm start
Go to localhost:8050/{city}/{State}
e.g localhost:8050/Baltimore/MD
```
##You can also run this in a Docker container

```bash
docker build -t spotcrime-city .
docker run -p 8050:8050 -e PORT=8050 spotcrime-city
```

##To use

```javascript
const scc = require('spotcrime-city');

const results = scc.getCrimesCity('Baltimore, MD');

console.log(results, results);
```

####After you start the Hapi server, you can hit endpoints of city and state to see the local crime in your area.


#License

###MIT Troy M. Connor
