/**
 * Created by Administrator on 2016/10/23.
 */
angular.module('test',['ui.router'])
    .config([
        '$stateProvider','$urlRouterProvider',
        function($stateProvider,$urlRouterProvider){
            alert(11);
            $urlRouterProvider.when("", "test.module/test_CCX");
            var baseUrl = 'test.module/pages/';

            $stateProvider
                .state('test_CCX',{
                    url:'/test_CCX',
                    views:{
                        '':{
                            templateUrl:baseUrl + 'test_CCX.html',
                            controller:'TestCtrl'
                        }
                    }
                })

        }
    ]);