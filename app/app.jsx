var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");
var Marketcloud = require('marketcloud-node');


// App css
require('style!css!sass!applicationStyles');



var marketcloud = new Marketcloud.Client({
    public_key: 'c291f065-a429-412b-b72e-65506126ca9c',
    secret_key: 'r5FGlQ7WCBpMcFKslOafyddvLTp43RALsF39Kn8uGrg='
});

marketcloud.products.list({}).then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
})

ReactDOM.render( //most common react-dom method
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
