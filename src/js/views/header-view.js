var Marionette = require('backbone.marionette');

var template = require('../../templates/header.tpl');

module.exports = Marionette.ItemView.extend({
    triggers: {
        'click': 'toggle'
    },

    template: template,

    ui: {
        badge: '[data-ui-badge]'
    },

    behaviors: {
        stickit: {
            '@ui.badge': {
                observe: 'unread',
                visible: 'isBadgeVisible',
                updateView: true
            }
        }
    },

    isBadgeVisible: function(val) {
        return val > 0;
    }
});