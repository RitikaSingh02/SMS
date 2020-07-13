angular.module('student', []).controller('student_ctrl', function($scope,$http) {
    
        current_url=window.location.href;
        console.log(url);
       
            var data=current_url.split('=')[1];
            $http.post('http://127.0.0.1:8000/users/students_view/', JSON.stringify(data)).then(function (response) {
                if(response.data){
                    $scope.students=response.data;
    
            }
            
        },function(response){
            alert("no response");});
        
       
    }
);
    
