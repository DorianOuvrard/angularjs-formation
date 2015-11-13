app.factory('contactFactory',function(localStorageService){
    var factory = {};

    factory.getContacts= function () {
    	var contacts = localStorageService.get('contacts');
        if(!contacts)
            contacts = [];
        return contacts;
    };

    factory.add= function(contact) {
    	var contacts = factory.getContacts();
    	contacts.push(contact);
    	localStorageService.set('contacts', contacts);
    };

    factory.clearAll= function() {
    	return localStorageService.clearAll();
    }

    return factory;
});