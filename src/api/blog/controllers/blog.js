'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
  // Custom method to get blogs with filters
  async find(ctx) {
    const { query } = ctx;
    
    // Add category filters if provided
    if (query.filters?.category) {
      query.filters.category = { $eq: query.filters.category };
    }
    
    // Add title search if provided
    if (query.filters?.search) {
      query.filters.title = { $containsi: query.filters.search };
    }
    
    // Sort by publication date by default
    if (!query.sort) {
      query.sort = { publishedAt: 'desc' };
    }
    
    // Ensure populate includes author if not specified
    if (!query.populate) {
      query.populate = ['featuredImage', 'author'];
    } else if (query.populate === '*') {
      query.populate = ['featuredImage', 'author'];
    }
    
    const { data, meta } = await super.find(ctx);
    
    return { data, meta };
  },

  // Custom method to get a blog by slug
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    
    const entity = await strapi.entityService.findMany('api::blog.blog', {
      filters: { slug },
      populate: ['featuredImage', 'author'],
    });
    
    if (!entity || entity.length === 0) {
      return ctx.notFound('Blog not found');
    }
    
    return { data: entity[0] };
  }
}));
