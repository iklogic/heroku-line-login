# heroku-line-login
This branch a complete example line login. build with Nodejs and express. deploy on heroku.
# heroku-line-login-getting-started[Complete]
Complete line login with Nodejs. for deploy in heroku useing [Express4](http://expressjs.com/)<br>
This application support [this article](https://www.linkedin.com/pulse/getting-start-nodejs-heroku-narongsak-keawmanee/) - check it out.

# Running Locally
Make sure you have [Node.js](https://nodejs.org/en/) and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed.

```
$ git clone git@github.com:klogic/heroku-line-login.git -b line-login-complete # or clone your own fork
$ cd heroku-line-login
$ npm install
$ npm start
```
Your app should now be running on localhost:3000.

# Change configuration
- copy `.env.example` to `.env`
- edit data in `.env` file

# Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```


# Documentation
For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting start Nodejs in Heroku.](https://www.linkedin.com/pulse/getting-start-nodejs-heroku-narongsak-keawmanee/)
- [Integrate line login with heroku](https://www.linkedin.com/pulse/integrate-line-login-heroku-narongsak-keawmanee/)
- [Integrating LINE Login with your web app](https://developers.line.me/en/docs/line-login/web/integrate-line-login/)
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
