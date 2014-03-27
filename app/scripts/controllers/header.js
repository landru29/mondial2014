'use strict';

angular.module('mondial2014App')
        .controller('HeaderCtrl', function($scope, UserService) {
            $scope.username = '';
            $scope.login = '';
            $scope.password = '';

            $scope.loginAction = function() {
                UserService.login(
                        $scope.login,
                        $scope.password,
                        function() {
                            $scope.$apply();
                        }
                );
            };

            $scope.connectedUser = function() {
                var user = UserService.getCurrentUser();
                if (user) {
                    return user.attributes.username;
                } else {
                    return '';
                }
            };

            $scope.logoutAction = function() {
                console.log('logout');
                UserService.logout();
            };

            $scope.isLoggedIn = function() {
                return UserService.isLoggedIn();
            };
        });