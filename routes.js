const routes = require('next-routes')();

routes
  .add('/elections/new', '/elections/new')
  .add('/elections/:address', '/elections/show')
  .add('/elections/:address/requests', '/elections/requests/index')
  .add('/elections/:address/requests/new', '/elections/requests/new');

module.exports = routes;
