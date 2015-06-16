
window.onload = function(){


    var mainContainer = document.createElement("div");
    mainContainer.id = "gridtofill";
    document.body.appendChild(mainContainer);

    var grabMainContainer = document.getElementById('gridtofill');

    var mainGridGenerator = function(column, row){

      for(var i = 1; i <= row; i++){
        var aRow = document.createElement('div');
        aRow.setAttribute('class', 'row');

         for(var j = 1; j <= column; j++){
          var aBox = document.createElement('div');
          aBox.setAttribute('id', 'r' + j);
          aBox.setAttribute('class', 'a_box');
          aRow.appendChild(aBox);
        }
        grabMainContainer.appendChild(aRow);

      }
    };



    //Color swatch
    var colorSwatch = document.createElement("div");
    colorSwatch.id = "color_swatch";
    document.body.appendChild(colorSwatch);

    var grabSwatchContainer = document.getElementById('color_swatch');

    var colorArray = ['yellow', 'blue', 'red', 'green', 'black', 'pink', 'orange', 'purple', 'white'];

    var colorArrayLength = colorArray.length;
    console.log(colorArrayLength);
    var column = 0;
    var row = 0;
    var colorNumber = 0;


    var colorSwatchGridGenerator = function(column, row){
debugger;
      for(var i = 1; i <= row; i++){
        var aRow = document.createElement('div');
        aRow.setAttribute('class', 'row');

         for(var j = 0; j < column; j++){
          var aBox = document.createElement('div');
          aBox.setAttribute('id', 'r' + j);
          aBox.style.backgroundColor = colorArray[colorNumber];
          colorNumber++;
          aBox.setAttribute('class', 'a_box');
          aRow.appendChild(aBox);
        }
        grabSwatchContainer.appendChild(aRow);

      }
    };

    // var colorSwatchGridNumber = function(colorArrayLength){
    //     column = colorArrayLength / 2;
    //     row = colorArrayLength / 2;
    //   }
    //  colorSwatchGridNumber(colorArrayLength);

//build and input box that takes nums and places them here.
    mainGridGenerator(4,4);

  colorSwatchGridGenerator(3, 3)




}