'use strict';

/**
 * blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog.blog', ({ strapi }) => ({
  // Custom method to get blogs with advanced filters
  async findWithFilters(filters = {}) {
    const query = {
      filters: {},
      populate: ['featuredImage'],
      sort: { publishedAt: 'desc' },
    };

    // Apply filters
    if (filters.category) {
      query.filters.category = { $eq: filters.category };
    }

    if (filters.search) {
      query.filters.$or = [
        { title: { $containsi: filters.search } },
        { excerpt: { $containsi: filters.search } },
        { content: { $containsi: filters.search } }
      ];
    }

    if (filters.tags && filters.tags.length > 0) {
      query.filters.tags = { $in: filters.tags };
    }

    // Apply sorting
    if (filters.sortBy) {
      const sortOrder = filters.sortOrder === 'asc' ? 'asc' : 'desc';
      query.sort = { [filters.sortBy]: sortOrder };
    }

    // Apply pagination
    if (filters.page && filters.pageSize) {
      query.pagination = {
        page: parseInt(filters.page),
        pageSize: parseInt(filters.pageSize)
      };
    }

    return await strapi.entityService.findMany('api::blog.blog', query);
  },

  // Method to get blogs by category
  async findByCategory(category) {
    return await strapi.entityService.findMany('api::blog.blog', {
      filters: { category: { $eq: category } },
      populate: ['featuredImage'],
      sort: { publishedAt: 'desc' },
    });
  },

  // Method to get related blogs
  async findRelated(blogId, category, limit = 3) {
    return await strapi.entityService.findMany('api::blog.blog', {
      filters: {
        id: { $ne: blogId },
        category: { $eq: category }
      },
      populate: ['featuredImage'],
      sort: { publishedAt: 'desc' },
      pagination: { limit }
    });
  }
}));
