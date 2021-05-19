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
angular.module('navigation').directive('guacSideBar', [function guacMenu() {

    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
        },

        templateUrl: 'app/navigation/templates/guacSideBar.html',
        controller: ['$scope', '$injector', '$element',
            function guacMenuController($scope, $injector, $element) {

            // Get required services
            var $document = $injector.get('$document');

            /**
             * The outermost element of the guacMenu directive.
             *
             * @type Element
             */
            var element = $element[0];

            /**
             * The element containing the menu contents that display when the
             * menu is open.
             *
             * @type Element
             */
            var contents = $element.find('.menu-contents')[0];

            /**
             * The main document object.
             *
             * @type Document
             */
            var document = $document[0];

            $scope.openTab = function openTab(index) {

            };

            /**
             * All available actions for the current user.
             */
            $scope.main_menu = [
                {
                    callback  : () => $scope.openTab(0),
                    icon      : 'remixicon',
                    iconName  : 'ri-home-4-line'
                },
                {
                    callback  : () => $scope.openTab(1),
                    icon      : 'remixicon',
                    iconName  : 'ri-message-3-line'
                },
                {
                    callback  : () => $scope.openTab(2),
                    icon      : 'remixicon',
                    iconName  : 'ri-contacts-line'
                },
                {
                    callback  : () => $scope.openTab(3),
                    icon      : 'remixicon',
                    iconName  : 'ri-apps-2-line',
                    active    : true
                },
                {
                    callback  : () => $scope.openTab(4),
                    icon      : 'remixicon',
                    iconName  : 'ri-notification-2-line'
                }
            ];

        }] // end controller

    };
}]);
