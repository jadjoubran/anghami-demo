module.exports = {

  staticFileGlobs: [
    '/',
    '/?homescreen=1',
    'index.html',
    'index.html?homescreen=1',
    'images/logo.png'
  ],

  runtimeCaching: [{
    urlPattern: /jsonplaceholder\.typicode\.com\/users/,
    handler: 'fastest'
  }]

};