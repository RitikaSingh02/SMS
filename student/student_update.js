angular.module('update', []).controller('updateCtrl', function($scope,$http) {
  console.log("url");
    var url = document.location.href;
    console.log("url");
    console.log("USER_NAME");
    var params = url.split('?');
    $scope.USER_NAME=params[1];
    console.log("USER_NAME");
    $scope.father_name=params[2];
    $scope.email=params[3];
    $scope.branch=params[4];
    $scope.phone_no=params[5];
    
    $scope.update=function(){
    var data={'USER_NAME':$scope.USER_NAME,'father_name':$scope.father_name,'email':$scope.email,'phone_no':$scope.phone_no};
    $http.post('http://c4ab8373969c.ngrok.io/E_R_P_students/profile_update/', JSON.stringify(data)).then(function (response) {
    
    if (response.data)
    console.log("as");
    alert(response.data);
    
    }, function (response) {
    
    alert("not updated");
    });
  }
  $scope.login=function(){
    window.location.href="backend_student.html?"+params[1];
}
});