angular.module("pass",[]).controller("pass_ctrl",function($scope,$http){
    var loc=window.location.href;
    USER_NAME=loc.split('=')[1];
    $scope.subFunction=function(){
        
        var data={"USER_NAME":USER_NAME,"PASSWORD":$scope.PASSWORD}
        $http.post('http://127.0.0.1:8000/users/change_password/', JSON.stringify(data)).then(function (response) {
            if(response.data)
            alert(response.data);
            else{
                alert("no response");
            }
    });
    }
})