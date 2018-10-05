
<p align="center">
  <img src="https://imgur.com/2IEQqgi.png" size='1'/>
</p>


Barcelona Bingo is a live action bingo game for playing in, unsurprisingly, Barcelona. A mixture of sightseeing and people watching the game provides each player with a different version of the same board. First to complete a line wins the game. Happy Hunting, and may the odds be ever in your favour.

## Getting Started

You're going to need to download MongoDB and Nodemon, you can do this by following the links

```
https://nodemon.io/

https://www.mongodb.com/
```

Clone the repo

```
git clone https://github.com/BenjaKemp/BarcelonaBingo.git

cd BarcelonaBingo
```

to set up the database, transfer into the 'server' subdirectory and then run 

```
yarn run load-db
```

once this has been completed. start the server up using the command

```
nodemon
```

Now, that our server is up, we need to fix dependencies on the front. Do this by transferring into the subdirectory 'front-zeus' and running 

```
npm install
```

from the command line.

Start development server
```
npm start
```.

## Built with

* [React](https://reactjs.org/)  - Front end library for building user interfaces
* [Redux](https://redux.js.org) - Storage to share data inside the app
* [Socket](https://socket.io/) - Bi-directional communication between web clients and servers

Contributing

Improvements are welcome :)

Fork the repo and do your thing. Push to your fork and submit a pull request.

## Author
Ben Kemp - Github - LinkedIn
