window.AX = window.AX || {};
window.AX.foundation = window.AX.foundation || {};
window.AX.foundation.settingCallBacks = window.AX.foundation.settingCallBacks || {};

(function ($) {
    'use strict';

    var foundationMagellanDefaultSettingsCallBack;

    foundationMagellanDefaultSettingsCallBack = function () {
        var navigationRowOuterHeight =  $('.navigationRow').outerHeight();
        return {
            'threshold': (-1) * navigationRowOuterHeight,
            'destination_threshold':navigationRowOuterHeight,
            'fixed_top': navigationRowOuterHeight
        };
    };

    window.AX.foundation.settingCallBacks['magellan-expedition'] = window.AX.foundation.settingCallBacks['magellan-expedition'] || foundationMagellanDefaultSettingsCallBack;

    $(document).ready(function() {

        var foundationOptions = {};
        $.each(window.AX.foundation.settingCallBacks, function (key, callBack) {
            foundationOptions[key] = callBack();
        });

        $(document).foundation(foundationOptions).trigger('scroll');

        $(document).on('click', '[data-clickas]', function(e){
            e.preventDefault();

            var $this = $(this);
            $('a[href="' + $this.data('clickas') + '"]').trigger('click');
        });
    });


}(jQuery));
