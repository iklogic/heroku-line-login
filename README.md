# heroku-line-login-getting-started
A clean simple project with clean data with Nodejs. for deploy in heroku useing [Express4](http://expressjs.com/)<br>
This application support [this article](https://www.linkedin.com/pulse/getting-start-nodejs-heroku-narongsak-keawmanee/) - check it out.

# Running Locally
Make sure you have [Node.js](https://nodejs.org/en/) and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed.

```
$ git clone git@github.com:iklogic/heroku-line-login.git -b master # or clone your own fork
$ cd heroku-line-login
$ npm install
$ npm start
```
Your app should now be running on localhost:3000.

# Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/iklogic/heroku-line-login/tree/master)

# Documentation
For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting start Nodejs in Heroku.](https://www.linkedin.com/pulse/getting-start-nodejs-heroku-narongsak-keawmanee/)
- [Integrate line login with heroku](https://www.linkedin.com/pulse/integrate-line-login-heroku-narongsak-keawmanee/)
- [Integrating LINE Login with your web app](https://developers.line.me/en/docs/line-login/web/integrate-line-login/)
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
