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
 * A directive which provides an arbitrary menu-style container. The contents
 * of the directive are displayed only when the menu is open.
 */
angular.module('navigation').directive('guacRecentActivity', [function guacRecentActivity() {

    return {
        restrict: 'E',
        replace: true,
        scope: {
        },

        templateUrl: 'app/navigation/templates/guacRecentActivity.html',
        controller: ['$scope', '$injector',
            function guacUserInfoController($scope, $injector) {

            // Get required services
            var authenticationService = $injector.get('authenticationService');
            var userPageService       = $injector.get('userPageService');

            /**
             * The available main pages for the current user.
             *
             * @type Page[]
             */
            $scope.pages = null;

            // Retrieve the main pages from the user page service
            userPageService.getMainPages()
                .then(function retrievedMainPages(pages) {
                    $scope.pages = pages;
                });

            $scope.isAnonymous = function isAnonymous() {
                return authenticationService.isAnonymous();
            };
        }] // end controller

    };
}]);
