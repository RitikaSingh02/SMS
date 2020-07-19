angular.module('query', []).controller('query_ctrl', function($scope,$http) {
    $http.get("http://c4ab8373969c.ngrok.io/quires/ans_query/").then(function(response){
        $scope.students=response.data;
        console.log(response.data);
    });
    $scope.accept=function(USER_NAME){
        var data={"USER_NAME":USER_NAME};
        $http.post('http://c4ab8373969c.ngrok.io/quires/approval/', JSON.stringify(data)).then(function (response) {
           
            alert(response.data);
            location.reload();
        
    },function(response){
        alert("no response");});
    }
    $scope.reject=function(USER_NAME){
        var data={"USER_NAME":USER_NAME};
        $http.post('http://c4ab8373969c.ngrok.io/quires/rejection/', JSON.stringify(data)).then(function (response) {
           
            alert(response.data);
            location.reload();
            
      
    },function(response){
        alert("no response");});
    }
    $scope.redirect=function(){
       
        window.location.href="backend_teacher.html";
    }
});