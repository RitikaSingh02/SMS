angular.module('query', []).controller('query_ctrl', function($scope,$http) {
    $http.get("http://127.0.0.1:8000/users/ans_query/").then(function(response){
        $scope.students=response.data;
        console.log(response.data);
    });
    $scope.accept=function(USER_NAME){
        var data={"USER_NAME":USER_NAME};
        $http.post('http://127.0.0.1:8000/users/approval/', JSON.stringify(data)).then(function (response) {
           
            alert(response.data);
            location.reload();
        
    },function(response){
        alert("no response");});
    }
    $scope.reject=function(USER_NAME){
        var data={"USER_NAME":USER_NAME};
        $http.post('http://127.0.0.1:8000/users/rejection/', JSON.stringify(data)).then(function (response) {
           
            alert(response.data);
            location.reload();
            
      
    },function(response){
        alert("no response");});
    }
});