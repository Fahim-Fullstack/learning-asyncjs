console.log('sever')

const zlFetch = require('zl-fetch')
zlFetch('https://api.github.com/users/zellwk/repos')
  .then(response => {
    const repos = response.body
    console.log(repos)
  })