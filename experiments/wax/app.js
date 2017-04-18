var application = require('./index');
require('./services/entity-services')(application);
require('./controllers/entity-controllers')(application);
require('./templates/entity-templates')(application);