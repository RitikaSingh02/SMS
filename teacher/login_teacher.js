angular.module("teacher_login",[]).controller("teacher_login_ctrl",function($scope,$http){

    $scope.subFunction=function(){
        console.log($scope.USER_NAME);
        var data={"USER_NAME":$scope.USER_NAME,"PASSWORD":$scope.PASSWORD}
        $http.post('http://127.0.0.1:8000/users/teacher_login/', JSON.stringify(data)).then(function (response) {
            if(response.data=="wrong credentials")
            alert("wrong credentials");
            else{
                
                var url="backend_teacher.html";
                window.open(url,
                "_blank");
            }
    });
    }
})