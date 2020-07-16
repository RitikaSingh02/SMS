angular.module('student', []).controller('student_ctrl', function($scope,$http) {
    
        current_url=window.location.href;
        console.log(current_url);
       
            var data={"USER_NAME":current_url.split('?')[1]};
            console.log(JSON.stringify(data));
            $http.post('http://127.0.0.1:8000/users/students_view/', JSON.stringify(data)).then(function (response) {
                if(response.data){
                    $scope.students=response.data;
    
            }
            
            },function(response){
            alert("no response");});
            
        $scope.password=function(){
            loc=window.location.href;
            pos=loc.split('?')[1];
            window.open(
              "changepassword.html?un="+pos,
              '_blank'
                );
            }
        $scope.query=function(){
            loc=window.location.href;
            pos=loc.split('?')[1];
            var data={"USER_NAME":pos};
            $http.post('http://127.0.0.1:8000/users/query_raisal/', JSON.stringify(data)).then(function (response) {
                if(response.data){
                alert(response.data);
            }
            
            },function(response){
            alert("no response");});

            }
        $scope.logout=function(){
            window.location.href="portallogin.html";
        }
        $scope.login=function(){
            window.location.href="login_student.html";
        }
        $scope.redirect=function(USER_NAME,father_name,email,branch,phone_no){
            window.open("student_update.html?"+USER_NAME+"?"+father_name+"?"+email+"?"+branch+"?"+phone_no);
        }
        

       
    }
);
    
