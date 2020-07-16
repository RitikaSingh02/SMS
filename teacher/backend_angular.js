angular.module('myApp', []).controller('namesCtrl', function($scope,$http) {
    $http.get("http://127.0.0.1:8000/users/students/").then(function(response){
        $scope.students=response.data;
        console.log(response.data);
            
    });
    
    $scope.deletion = function (USER_NAME) {
    
    var data = {"USER_NAME":USER_NAME}
    console.log(data);
     
    $http.post('http://127.0.0.1:8000/users/delete/', JSON.stringify(data)).then(function (response) {
    
    if (response.data)
    location.reload();
    console.log(response.data);
    
    }, function (response) {
    
    alert("no response");
    });
    }
    $scope.updation  =function(USER_NAME,father_name,email,branch,phone_no){
    var data={"USER_NAME":USER_NAME,"father_name":father_name,"email":email,"branch":branch,"phone_no":phone_no};

        url='student_update.html?'+USER_NAME+'?'+father_name+'?'+email+'?'+branch+'?'+phone_no;
        window.open(url,
            "_blank");
        if (response.data)
        console.log(response.data);         
    
    }

    $scope.redirect=function(){
        window.location.href="portallogin.html";
    };
    $scope.insert=function(){
        window.open("insert_student.html");
    };
    $scope.query=function(){
        window.open("ans_query.html");
    }
    $scope.login=function(){
        window.location.href="login_teacher.html"
    }
    }
    );