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
angular.module('groupList').directive('guacCodeList', [function guacCodeList() {

    return {
        restrict: 'E',
        replace: true,
        scope: {

        },

        templateUrl: 'app/groupList/templates/guacCodeList.html',
        controller: ['$scope', '$injector',
            function guacMenuController($scope, $injector) {

            $scope.apps = [
                {
                    name: 'Drive',
                    icon: 'ri-file-copy-2-line',
                    description: 'Personal storage ( 5 GB )',
                    action: function () {

                    }
                },
                {
                    name: 'Calender',
                    icon: 'ri-calendar-check-line',
                    description: 'Schedule your events, meetings, appointments',
                    action: function () {

                    }
                }
            ]
        }] // end controller

    };
}]);
