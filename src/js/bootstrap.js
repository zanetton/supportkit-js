'use strict';
require("babelify/polyfill");

// polyfill for window.fetch
require('whatwg-fetch');
require('./utils/backbone.ajax');
require('./utils/zepto.transitions');
var $ = require('npm-zepto');

/**
 * Marionette setup
 */
var Backbone = require('backbone');

// zepto is exporting {$, Zepto} for some reason.
Backbone.$ = $;
var Marionette = require('backbone.marionette');

require('backbone-associations');

var StickitBehavior = require('marionette.behaviors/lib/behaviors/stickit-behavior');
var jQueryBehavior = require('marionette.behaviors/lib/behaviors/jquery-behavior');


Marionette.Behaviors.behaviorsLookup = function() {
    return {
        stickit: StickitBehavior,
        jQuery: jQueryBehavior
    };
};
