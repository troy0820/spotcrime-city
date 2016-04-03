#SpotCrime-city

[![npm version](https://badge.fury.io/js/spotcrime-city.svg)](https://badge.fury.io/js/spotcrime-city)

####Currently the [spotcrime](https://github.com/contra/spotcrime) node module will allow you to fetch `JSON` of crimes in an area with latitude and longitude.  
This `demo` wraps that functionality in a [Hapi](http://hapijs.com)  server and retrieve the `JSON` with endpoints for city and state.

##To see how it works

```javascript
npm i spotcrime-city
npm start
Go to localhost:8050/{city}/{State}
e.g localhost:8050/Baltimore/MD
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
