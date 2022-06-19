var FormFactory = angular.module("FormModule", []);

FormFactory.factory("FormFactory", function ($http, $window, $timeout) {
  return {
    DoAddUser: function (UserElement) {
      ListData.push(UserElement);
    },
    DoSubtractUser: function (security, email) {
      ListData.forEach((element, index) => {
        if (
          element.UserEmail === email &&
          element.UserSecurityNumber === security
        ) {
          ListData.splice(index, 1);
        }
      });
    },
  };
});
