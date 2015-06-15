
window.onload = function(){


  (function general(){

   var container = document.createElement("div");
   container.id = 'main_container';
    document.body.appendChild(container);


    var containery = document.getElementById('main_container');


    var mainGridGenerator = function(x){

      for(var i = 1; i <= x; i++){
        var newColumn = document.createElement('div');
        newColumn.setAttribute('id', 'b' + i);
        newColumn.setAttribute('class', 'a_box column');





         for(var i = 1; i <= 5; i++){
          var newRow = document.createElement('div');
          newRow.setAttribute('id', 'r' + i);
          newRow.setAttribute('class', 'a_box row');
          containery.appendChild(newRow);
        }
containery.appendChild(newColumn);
}
    };

    mainGridGenerator(5);



  })();


}