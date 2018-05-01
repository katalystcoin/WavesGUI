(function () {
    'use strict';

    var prefix = 'KDEX Lite Client';

    angular
        .module('app.shared')
        .service('documentTitleService', [function () {
            this.set = function (title) {
                document.title = prefix + (title ? ' | ' + title : '');
            };
        }]);
})();
