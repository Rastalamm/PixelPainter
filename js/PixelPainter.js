
window.onload = function(){
    var mainContainer = document.createElement("div");
    mainContainer.id = "main_container";
    document.body.appendChild(mainContainer);


  (function general(){


    var grabMainContainer = document.getElementById('main_container');


      var mainGridGenerator = function(x){

        for(var i = 1; i <= x; i++){
          var aRow = document.createElement('div');
          //aRow.setAttribute('id', 'b' + i);
          //newColumn.setAttribute('class');
          grabMainContainer.appendChild(aRow);

           for(var i = 1; i <= 1; i++){
            var aBox = document.createElement('div');
            aBox.setAttribute('id', 'r' + i);
            aBox.setAttribute('class', 'a_box');
            aRow.appendChild(aBox);
          }
        }
      };
    mainGridGenerator(5);
  })();


}