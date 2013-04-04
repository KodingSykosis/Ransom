/**
 * Created with JetBrains WebStorm.
 * User: KodingSykosis
 * Date: 4/2/13
 * Time: 5:43 PM
 */

(function($) {
    $.appFactory('shell', {
        singleton: true,
        main: function() {
            $('body')
                .BloodDrip();
        }
    });
})(jQuery);