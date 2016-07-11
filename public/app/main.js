/**
 * Created by alexanderpetrov on 11.07.16 г..
 */
(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));