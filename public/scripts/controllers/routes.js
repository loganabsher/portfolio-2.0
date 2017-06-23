'use strict';
// and page URL routes for the page tabs
page('/', homeController.init);
page('/repositories', repoController.init);
page('/about', aboutController.init);
// initalizing all page routes
page();
