var BootCampApp = angular.module("FormApp", ["FormModule", "HelperForm"]);

BootCampApp.controller(
  "FormController",
  function (
    $scope,
    $http,
    $sce,
    $window,
    $timeout,
    FormFactory,
    HelperService
  ) {
    $scope.User = {
      UserName: "",
      UserSurname: "",
      UserEmail: "",
      UserSecurityNumber: "",
    };

    $scope.UserList = [];

    $scope.AddUser = function () {
      $scope.User = {}; //Her seferinde eklenilen aldığı değeri üzerine eklemesin diye.

      $scope.UName = document.getElementById("TxtUsername");

      if ($scope.UName.value !== "") {
        $scope.User.UserName = $scope.UName.value;
      } else {
        alert("You entered  missing information. Please enter the name.");

        return;
      }

      $scope.USurName = document.getElementById("TxtUsersurname");
      if ($scope.USurName.value !== "") {
        $scope.User.UserSurname = $scope.USurName.value;
      } else {
        alert("You entered  missing information. Please enter the surname.");

        return;
      }

      $scope.UMail = document.getElementById("TxtMailAddress");
      if ($scope.UMail.value !== "") {
        $scope.User.UserEmail = $scope.UMail.value;
      } else {
        alert("You entered  missing information. Please enter the e-mail.");

        return;
      }

      $scope.randomnumber = document.getElementById("TxtSecurityNumber");
      $scope.randomnumber.value = Math.floor(Math.random() * 100000);
      $scope.User.UserSecurityNumber = $scope.randomnumber.value;

      FormFactory.DoAddUser($scope.User);
      $scope.UserList = ListData;
    };

    $scope.SubtractUser = function () {
      $scope.User = {}; //Her seferinde eklenilen aldığı değeri üzerine eklemesin diye.

      $scope.UMail = document.getElementById("TxtMailAddress");
      $scope.USecurityNumber = document.getElementById("TxtSecurityNumber");

      if ($scope.UMail.value !== "" && $scope.USecurityNumber.value !== "") {
        FormFactory.DoSubtractUser(
          $scope.USecurityNumber.value,
          $scope.UMail.value
        );
      } else {
        alert("You entered  missing information.");
      }

      $scope.UserList = ListData;
    };
  }
);
