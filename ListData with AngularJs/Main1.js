var BootCampApp = angular.module("BootCampApp", ['StudentModule', 'HelperModule']);

BootCampApp.controller("BootCampController", function($scope, $http, $sce, $window, $timeout, StudentFactory, HelperService) {

    $scope.TStudent = {
        StudentId: 0,
        StudentName: '',
        StudentSurname: ''
    };

    $scope.TempStudentList = [];

    $scope.AddStudent = function() {

        $scope.TStudent = {};

        $scope.StdID = document.getElementById("StudentID");
        if ($scope.StdID !== undefined) {
            if ($scope.StdID !== null) {
                $scope.TStudent.StudentId = $scope.StdID.value;
            }
        }

        $scope.Name = document.getElementById("Name");
        if ($scope.Name !== undefined) {
            if ($scope.Name !== null) {
                $scope.TStudent.StudentName = HelperService.ToUpper($scope.Name.value);
            }
        }

        $scope.Surname = document.getElementById("Surname");
        if ($scope.Surname !== undefined) {
            if ($scope.Surname !== null) {
                $scope.TStudent.StudentSurname = HelperService.ToUpper($scope.Surname.value);
            }
        }

        StudentFactory.DoAddStudent($scope.TStudent);
        $scope.TempStudentList = StudentList;

        $scope.StdID.value = "";
        $scope.Name.value ="";
        $scope.Surname.value = "";
        //alert(result);
    };

    $scope.Uppercase = function(AText) {
        var result = HelperService.ToUpper(AText);
        alert(result);
    };

    $scope.Lowercase = function(AText) {
        var result = HelperService.ToLower(AText);
        alert(result);
    };



    //$scope.TStudent.StudentId = 12;
    // $scope.DegiskenAdi = 'Tunç';
    // $scope.MyArray = [];
    // $scope.MyArray.push("Tunc");
    // $scope.MyArray.push("Ahmet");
    // $scope.MyArray.push("Mehmet");

    // $scope.MyAlert = function() {
    //     alert("Selamlar");
    // };


    // $scope.SelfPage = "";

    // $scope.GetPageName = function() {
    //     var URL = window.document.URL;
    //     let SplitUrl = URL.split('/');
    //     $scope.SelfPage = SplitUrl[SplitUrl.length - 1] + "";
    //     alert($scope.SelfPage);
    // };

});