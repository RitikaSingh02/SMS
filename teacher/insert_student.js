angular.module('insert', []).controller('insert_ctrl', function($scope,$http) {
    $scope.submitfun=function(){
        var data={'USER_NAME':$scope.USER_NAME,'father_name':$scope.father_name,'email':$scope.email,'branch':$scope.branch,'phone_no':$scope.phone_no};
        $http.post('http://127.0.0.1:8000/users/insert/', JSON.stringify(data)).then(function (response) {
        
        if (response.data)
        console.log("as");
        alert(response.data);
        
        }, function (response) {
        
        alert("not inserted");
        });
      }
})