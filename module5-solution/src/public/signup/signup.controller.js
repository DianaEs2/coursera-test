(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MyInfoService'];
function RegistrationController(MyInfoService) {
  var reg = this;
  var service = MyInfoService;
  reg.dishIsValid = true;

  reg.submit = function () {
    var myUser = {
      firstname :reg.user.firstname,
      lastname : reg.user.lastname,
      email : reg.user.email,
      phone : reg.user.phone,
      dish: reg.user.dishname
    };
    service.dishIsValid(myUser.dish)
    .then(function(response){
      service.registerUser(myUser);
      reg.completed = true;
    })
    .catch(function(error){
      reg.dishIsValid = false;
    });
  }
}

})();
