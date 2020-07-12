angular.module('update', []).controller('updateCtrl', function($scope,$http) {

    var url = document.location.href;
    console.log(url);
    var params = url.split('?');
    $scope.USER_NAME=params[1];console.log(USER_NAME);
    $scope.father_name=params[2];
    $scope.email=params[3];
    $scope.branch=params[4];
    $scope.phone_no=params[5];
    
    $scope.update=function(){
    var data={'USER_NAME':USER_NAME,'father_name':father_name,'email':email,'branch':branch,'phone_no':phone_no};
    $http.post('http://127.0.0.1:8000/users/update/', JSON.stringify(data)).then(function (response) {
    
    if (response.data)
    console.log("as");
    alert(response.data);
    
    }, function (response) {
    
    alert("not updated");
    });
  }
});