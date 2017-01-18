module.exports = {

  staticFileGlobs: [
    '/',
    '/?homescreen=1',
    'index.html',
    'index.html?homescreen=1',
    'images/logo.png'
  ],
  ignoreUrlParametersMatching: [/^utm_/, /^homescreen/],
  runtimeCaching: [{
    urlPattern: /jsonplaceholder\.typicode\.com\/users/,
    handler: 'fastest'
  }]

};