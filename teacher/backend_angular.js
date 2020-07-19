angular.module('myApp', []).controller('namesCtrl', function($scope,$http) {
    $http.get("http://c4ab8373969c.ngrok.io/teacher/students/").then(function(response){
        $scope.students=response.data;
        console.log(response.data);
            
    });
    
    $scope.deletion = function (USER_NAME) {
    
    var data = {"USER_NAME":USER_NAME}
    console.log(data);
     
    $http.post('http://c4ab8373969c.ngrok.io/teacher/delete/', JSON.stringify(data)).then(function (response) {
    
    if (response.data)
    location.reload();
    console.log(response.data);
    
    }, function (response) {
    
    alert("no response");
    });
    }
    $scope.updation  =function(USER_NAME,father_name,email,branch,phone_no){
    var data={"USER_NAME":USER_NAME,"father_name":father_name,"email":email,"branch":branch,"phone_no":phone_no};

        url='teacher_update.html?'+USER_NAME+'?'+father_name+'?'+email+'?'+branch+'?'+phone_no;
        window.location.href=url;
        if (response.data)
        console.log(response.data);         
    
    }

    $scope.redirect=function(){
        window.location.replace("portallogin.html");
    };
    $scope.insert=function(){
        window.location.href="insert_student.html";
    };
    $scope.query=function(){
        window.location.href="ans_query.html";
    }
    $scope.login=function(){
        window.location.replace("login_teacher.html");
    }
    }
    );