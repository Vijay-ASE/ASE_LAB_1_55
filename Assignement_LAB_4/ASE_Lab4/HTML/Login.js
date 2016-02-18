/**
 * Created by Vijay Kumar Tummala on 2/17/2016.
 */
var login=angular.module("login",['ngStorage']);

login.controller('lgnctrl', function ($scope,$localStorage,$window) {
    var username = $localStorage.username;
    var password = $localStorage.password;

    $scope.doLogin = function(){
        console.log("in doLogin method-----");
        if (username==null || password==null){
            $window.alert("username or password empty");
        }
        if (username == $scope.username && password == $scope.password){
            $window.location.href = "../HTML/Home.html";
        } else{
            $window.alert("invalid username or password");
        }
    };

    $scope.storevalues = function () {
        $localStorage.username = $scope.username;
        $localStorage.password = $scope.password;
        console.log("username:"+$localStorage.username);
        console.log("password:"+$localStorage.password);
        window.alert("Sign Up was successfull");
        $window.location.href = "../HTML/Login_Page.html";
    }
});

