'use strict';

/**
 * blog router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

const defaultRouter = createCoreRouter('api::blog.blog', {
  config: {
    find: {
      auth: false, // Allow public access to read blogs
    },
    findOne: {
      auth: false, // Allow public access to read a blog
    },
  },
});

// Custom route to get blog by slug
const customRoutes = {
  routes: [
    ...defaultRouter.routes,
    {
      method: 'GET',
      path: '/blogs/slug/:slug',
      handler: 'blog.findBySlug',
      config: {
        auth: false,
      },
    },
  ],
};

module.exports = customRoutes;
