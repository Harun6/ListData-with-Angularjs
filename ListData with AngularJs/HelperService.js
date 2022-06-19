var HelperForm = angular.module("HelperForm", []);

HelperForm.service("HelperService", function ($http, $window) {
  this.random = function () {
    this.randomnumber = document.getElementById("TxtSecurityNumber");
    console.log("helper service" + this.randomnumber);
    if (this.randomnumber === !undefined) {
      if (this.randomnumber === !null) {
        this.randomnumber.value = Math.random() * 100;
      }
    }
  };
});
