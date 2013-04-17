/**
 * User: KodingSykosis
 * Date: 4/2/13
 * Time: 5:43 PM
 */

(function($) {
    $.factory('shell', {
        singleton: true,
        main: function() {
            $('body').BloodDrip();
        }
    });
})(jQuery);