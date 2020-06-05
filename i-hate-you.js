var express = require('express');
var request = require('request');
var app = express();

options = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'grant_type': 'authorization_code',
      'code': '',
      'redirect_uri': 'http://localhost:3000/callback'
    }
  };

app.get('/login', function(req, res) {
    var scopes = 'user-read-currently-playing';
    var my_client_id = ';
    var redirect_uri = 'http://localhost:3000/callback'
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + my_client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });

app.get('/callback', function(req, res) {
    console.log(req.params.code)

    
})
    
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
