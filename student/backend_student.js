angular.module('student',[]).controller('student_ctrl', function($scope,$http) {
    
    current_url=window.location.href;
    console.log(current_url);
    
   
        var data={"USER_NAME":current_url.split('?')[1]};
        console.log(JSON.stringify(data));
        $http.post('http://c4ab8373969c.ngrok.io/E_R_P_students/students_view/', JSON.stringify(data)).then(function (response) {
            if(response.data){
                var approved=0;
                $scope.students=response.data;
                $scope.update=function(){
                    
                    angular.forEach($scope.students, function(value, key){
                            if (value.STATUS=="REQUEST APPROVED")
                            {
                                approved =1;

                            }                                
                           console.log(value.STATUS);
                     });

                     if(approved==1)
                     return true;
                     else
                     return false;
                
                }
                $scope.redirect=function(){
                    angular.forEach($scope.students, function(value, key){
                    window.location.href="student_update.html?"+value.USER_NAME+"?"+value.father_name+"?"+value.email+"?"+value.branch+"?"+value.phone_no;
                });
            }
        }
        
        },function(response){
        alert("no response");});
        
    $scope.password=function(){
        loc=window.location.href;
        pos=loc.split('?')[1];
        window.location.href="changepassword.html?un="+pos;
        }
    $scope.query=function(){
        
        loc=window.location.href;
        pos=loc.split('?')[1];
        var data={"USER_NAME":pos};
        $http.post('http://c4ab8373969c.ngrok.io/quires/query_raisal/', JSON.stringify(data)).then(function (response) {
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
        window.location.replace("login_student.html");
    }
     
}
);

