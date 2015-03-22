(function() {
  angular
    .module('save-a-selfie.photo')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
      .state('tabs.device-type', {
        url: '/device-type',
        views: {
          'tab-photo': {
            templateUrl: 'app/photo/device-type.html',
            controller: 'DeviceType as deviceType'
          }
        }
      }).state('tabs.caption', {
        url: '/caption',
        views: {
          'tab-photo': {
            templateUrl: 'app/photo/caption.html',
            controller: 'Caption as caption'
          }
        }
      }).state('tabs.upload', {
        url: '/upload',
        views: {
          'tab-photo': {
            templateUrl: 'app/photo/upload.html',
            controller: 'Upload as upload'
          }
        }
      });
  }
})();
