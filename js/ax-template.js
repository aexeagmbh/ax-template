window.AX = window.AX || {};
window.AX.foundation = window.AX.foundation || {};
window.AX.foundation.settingCallBacks = window.AX.foundation.settingCallBacks || {};

(function ($) {
    'use strict';

    var foundationMagellanDefaultSettingsCallBack;

    foundationMagellanDefaultSettingsCallBack = function () {
        return {
            'threshold': (-1) * $('.navigationRow').outerHeight(),
            'destination_threshold': 35,
            'fixed_top': $('.navigationRow').outerHeight()
        };
    };

    window.AX.foundation.settingCallBacks['magellan-expedition'] = window.AX.foundation.settingCallBacks['magellan-expedition'] || foundationMagellanDefaultSettingsCallBack;

    $(document).ready(function() {

        var foundationOptions = {};
        $.each(window.AX.foundation.settingCallBacks, function (key, callBack) {
            foundationOptions[key] = callBack();
        });

        $(document).foundation(foundationOptions);
    });


}(jQuery));