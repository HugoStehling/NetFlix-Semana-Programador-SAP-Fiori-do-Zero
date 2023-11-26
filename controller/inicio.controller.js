sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel" 
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("netflix.netflix.controller.inicio", {
            onInit: function () {

            var menu = {
                primeiro: "BEGIN",
                segundo: "MOVIES",
            };

            var menuModel = new JSONModel();
            menuModel.setData(menu);

            var tela = this.getView();
            tela.setModel(menuModel, "ModeloMenu")

            var resultados ={
                titles : []
            };

            var filmesModel = new JSONModel();
            filmesModel.setData(resultados);
            tela.setModel(filmesModel, "APIFilmes");
      

            },
            onPressLinkInicio: function(){
                alert("Você clicou em Begin");
            },
            onPressLinkSeries: function(){
                alert("Você clicou em Movie");
            },

            onApertarBuscar: function(){
              var query = this.byId("inputBuscar").getValue();  

              debugger;

              const settings = {
                async: true,
                crossDomain: true,
                url: 'https://netflix54.p.rapidapi.com/search/?query='
                 + query + '&offset=0&limit_titles=50&limit_suggestions=20&lang=pt',
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e6d7d0b4acmshd77dc738b0e1b31p1135e1jsnab9ede508989',
                    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
                }
            };
            
            $.ajax(settings).done(function (response) {
                console.log(response);
                //RESGATAR MODELO E ATUALIZAR OS DADOS

               
                var view = this.getView();
                var model = view.getModel("APIFilmes");
                var dados = model.getData();

                //limpar a lista
                dados.titles = [];
                dados.titles = response.titles;
                model.refresh();
            }.bind(this) );

              
            }
        });
    });
