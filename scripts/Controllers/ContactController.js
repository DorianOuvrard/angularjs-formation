app.controller('ContactController', function($scope, localStorageService, contactFactory){
    console.log('ContactController');  
    console.log(contactFactory.getContacts());

    $scope.submit = function() {
            contactFactory.add(
                {
                    nom : $scope.nom,
                    email : $scope.email
                });
            console.log(contactFactory.getContacts());
        };

    $scope.clearAll = function() {
        contactFactory.clearAll();
        console.log(contactFactory.getContacts());
    }
});