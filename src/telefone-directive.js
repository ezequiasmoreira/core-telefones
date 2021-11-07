angular.module('componentes')
.directive("telefoneModal", function() {
    var ddo = {};
    
    ddo.restric = "AE";

    ddo.templateUrl = "bower_components/core-telefones/src/telefone-modal.html"
    
    return ddo;
}).directive("telefoneInput", function() {
    var ddo = {};
    
    ddo.restric = "AE";

    ddo.templateUrl = "bower_components/core-telefones/src/telefone-input.html"
    
    return ddo;
});