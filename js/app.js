var app = angular.module('app', [])

app.controller('MainController', function($scope) {
  $scope.rows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
})
