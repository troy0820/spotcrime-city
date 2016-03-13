#SpotCrime-city

####Currently the [spotcrime](https://github.com/contra/spotcrime) node module will allow you to fetch `JSON` of crimes in an area with latitude and longitude.  This `demo` wraps that functionality in a [Hapi](http://hapijs.com)  server and retrieve the `JSON` with endpoints for city and state.

##Getting started

```
git clone git@github.com:troy0820/spotcrime-city.git
npm i
npm start
Go to localhost:8050/{city}/{State}
e.g localhost:8050/Norfolk/VA
```

####After you start the Hapi server, you can hit endpoints of city and state to see the local crime in your area.
