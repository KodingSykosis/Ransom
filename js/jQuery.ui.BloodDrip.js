/**
 * Created with JetBrains WebStorm.
 * User: KodingSykosis
 * Graphics: KlaraCu
 * Date: 4/2/13
 * Time: 5:36 PM
 * To change this template use File | Settings | File Templates.
 */

(function ($) {
    $.widget("KodingSykosis.BloodDrip", {
        options: {
            image: '/img/blooddrip1.png',
            delay: 5000,
            duration: 5000,
            opacity: 0.93
        },

        // Set up the widget
        _create: function () {
            this.overlay = $(new Image())
                .css({
                    background: 'transparent',
                    position: 'fixed',
                    width: '100%',
                    visibility: 'hidden',
                    top: $(window).height() + 100,
                    left: -2,
                    opacity: this.options['opacity']
                })
                .load($.proxy(this._onImageLoaded, this))
                .prop('src', this.options['image'])
                .appendTo('body');

            $('body').css({
                padding: 0,
                margin: 0
            });
        },

        hide: function() {
            this.overlay
                .hide();
        },

        show: function() {
            if (this.loaded) {
                this.overlay
                    .show();
            }
        },

        _onImageLoaded: function(event) {
            this.loaded = true;
            this.overlay
                .css('visibility', 'visible');

            this.overlay
                .css({
                    top: -this.overlay.outerHeight()
                });

            this.overlay
                .delay(this.options['delay'])
                .animate({
                    top: 0
                }, {
                    duration: this.options['duration']
                });
        }
    });
})(jQuery);