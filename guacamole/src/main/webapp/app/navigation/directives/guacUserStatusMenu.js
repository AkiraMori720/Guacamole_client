/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * A directive which provides a user-oriented menu containing options for
 * navigation and configuration.
 */
angular.module('navigation').directive(
    'guacUserStatusMenu', [function guacUserStatusMenu() {

    return {
        restrict: 'E',
        replace: true,
        scope: {
        },

        templateUrl: 'app/navigation/templates/guacUserStatusMenu.html',
        controller: ['$scope', '$injector',
            function guacUserMenuController($scope, $injector) {

            // Get required services
            var authenticationService = $injector.get('authenticationService');
            var userPageService       = $injector.get('userPageService');

            $scope.ss_user = authenticationService.getSSUser();

            $scope.userStatus = ($scope.ss_user && $scope.ss_user.status)?$scope.ss_user.status:'online';

            $scope.allStatus = [
                { name: 'Away', value: 'away' },
                { name: 'Busy', value: 'busy' },
                { name: 'On call', value: 'call' },
                { name: 'Online', value: 'online' }
            ]

            $scope.setUserStatus = function setUserStatus(status){
                $scope.ss_user.status = status;
                $scope.userStatus = status;
            }

        }] // end controller

    };
}]);
