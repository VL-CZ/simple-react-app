# React - simple app
Simple react app running in a docker container.

This is a programming assignment for Advanced Web Applications course taught at Charles University.
See the [requirements](https://webik.ms.mff.cuni.cz/labs/04-js.html).

Technologies used:
- React (initialized by create-react-app)
- MUI
- Redux for state management of the counter

## Build the image
```shell
docker build -t react-demo .
```
## Start the container
```shell
docker run -dp 3000:3000 react-demo
```

The app is running on [http://localhost:3000/](http://localhost:3000/).
