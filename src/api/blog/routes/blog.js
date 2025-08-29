'use strict';

/**
 * blog router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blog.blog', {
  config: {
    find: {
      auth: false, // Allow public access to read blogs
    },
    findOne: {
      auth: false, // Allow public access to read a blog
    },
  },
});
