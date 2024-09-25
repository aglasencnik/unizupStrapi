'use strict';

/**
 * oseba service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::oseba.oseba');
