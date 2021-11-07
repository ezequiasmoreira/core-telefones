angular.module("componentes").factory("telefoneFactorySpec", function () {

	var _validarTelefone = function (telefone) {		
		if (!telefone.descricao) throw "Descrição obrigatório.";
		if (!telefone.numero) throw "Número obrigatório";
		if (!telefone.tipo) throw "Tipo obrigatório";
		return true;
	};

	return {
		validarTelefone: _validarTelefone
	};
});
angular.module("componentes").factory("telefoneFactoryService", function () {

    var _new = function (telefone) {  
        var novoTelefone        = {}
        novoTelefone.id         = telefone.id;
        novoTelefone.tipo       = telefone.tipo;
        novoTelefone.numero     = telefone.numero;        
        novoTelefone.descricao  = telefone.descricao;
        return novoTelefone;  	
    };

    var _excluirTelefone = function (telefones,telefoneExcluir) {  
        return telefones.filter(function(telefone){
            if(telefone.$$hashKey != telefoneExcluir.$$hashKey){
                return telefone;
            }
        });           	
    };

    var _editarTelefone = function ($scope,telefone) { 
        $scope.telefone={};   
        $scope.telefone.id          = telefone.id;
        $scope.telefone.descricao   = telefone.descricao;
        $scope.telefone.numero      = telefone.numero;
        $scope.telefone.tipo        = telefone.tipo;
        $scope.telefone.$$hashKey   = telefone.$$hashKey;       	
    };

    return {
            new: _new,
            excluirTelefone: _excluirTelefone,
            editarTelefone: _editarTelefone
    };
});
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
angular.module("componentes").run(["$templateCache", function($templateCache) {$templateCache.put("telefone-input.html","<label for=\"telefone\">Telefones&nbsp;<span class=\"glyphicon glyphicon-plus botao-adicionar\" data-target=\"#modalTelefone\" data-toggle=\"modal\"></span></label><ul class=\"list-group\"><li class=\"list-group-item\">&nbsp; <span class=\"btn btn-sm\" ng-repeat=\"telefone in telefones\"><button type=\"text\" class=\"btn\" ng-click=\"editarTelefone(telefone)\">{{telefone.numero}}</button><span ng-click=\"excluirTelefone(telefone)\" class=\"glyphicon glyphicon-remove\"></span></span></li></ul>");
$templateCache.put("telefone-modal.html","<div class=\"modal fade\" id=\"modalTelefone\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">Telefone</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body\"><form novalidate=\"\" name=\"formulario-telefone\"><input type=\"hidden\" ng-model=\"telefone.id\" class=\"form-control\" id=\"id\"><div class=\"form-group\"><label for=\"descricao\" class=\"col-form-label\">Descrição</label> <input type=\"text\" ng-model=\"telefone.descricao\" class=\"form-control\" id=\"descricao\"></div><div class=\"form-group\"><label for=\"numero\" class=\"col-form-label\">Número</label> <input type=\"text\" ng-model=\"telefone.numero\" class=\"form-control\" id=\"numero\"></div><div class=\"form-group\"><label for=\"tipo\">Tipo</label><select ng-model=\"telefone.tipo\" class=\"form-control\" id=\"tipo\"><option value=\"1\">Residencial</option><option value=\"2\">Comercial</option><option value=\"3\">Celular</option></select></div></form></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\" ng-click=\"salvarTelefone(telefone)\">Salvar</button></div></div></div></div>");}]);