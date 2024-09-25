'use strict';

/**
 * novica service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::novica.novica');
