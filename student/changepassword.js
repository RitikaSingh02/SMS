angular.module("pass",[]).controller("pass_ctrl",function($scope,$http){
    var loc=window.location.href;
    USER_NAME=loc.split('=')[1];
    $scope.subFunction=function(){
        
        var data={"USER_NAME":USER_NAME,"PASSWORD":$scope.PASSWORD}
        $http.post('http://c4ab8373969c.ngrok.io/E_R_P_students/change_password/', JSON.stringify(data)).then(function (response) {
            if(response.data)
            alert(response.data);
            else{
                alert("no response");
            }
    });
    }
    $scope.login=function(){
        window.location.href="backend_student.html?"+USER_NAME;
    }
})