
window.onload = function(){

  var pixelPainterRun = pixelPainterApp();

  pixelPainterRun.htmlGenerator();
  pixelPainterRun.mainGridGenerator(15, 15);
  pixelPainterRun.colorSwatchGridGenerator(3, 3);
  pixelPainterRun.eraseIt();
  pixelPainterRun.clearIt();

  }




function pixelPainterApp(){

  var colorContainer = document.createElement("div");
  colorContainer.id = 'color_container';
  var colorHeading = document.createElement("h2");
  colorHeading.innerHTML = "Select a color";
  var colorSwatch = document.createElement("div");
  colorSwatch.id = "color_swatch";
  var mainContainer = document.createElement('div');
  mainContainer.id = 'pixel_container';
  var gridOuterBox = document.createElement('div');
  gridOuterBox.id = 'grid_outer_box';
  var gridContainer = document.createElement("div");
  gridContainer.id = "gridtofill";
  var mainGridArray = document.getElementsByClassName('a_box');

  var eraseButton = document.createElement("button");
  eraseButton.id = "erase_button";
  eraseButton.innerHTML = 'Erase';

  var clearButton = document.createElement("button");
  clearButton.id = "clear_button";
  clearButton.innerHTML = 'Clear';



  var colorSelected;
  var colorClassArray = document.getElementsByClassName('color_box');


  var colorArray = ['yellow', 'blue', 'red', 'green', 'black', 'pink', 'orange', 'purple', 'white'];
  var colorArrayLength = colorArray.length;

  var column = 0;
  var row = 0;
  var colorNumber = 0;






  var htmlGenerator = function(){


    mainContainer.appendChild(colorContainer);
    colorContainer.appendChild(colorHeading);
    colorContainer.appendChild(colorSwatch);

    //Grid to fill in
    document.body.appendChild(mainContainer);
    mainContainer.appendChild(gridOuterBox)
    gridOuterBox.appendChild(gridContainer);

    colorContainer.appendChild(eraseButton);
    colorContainer.appendChild(clearButton);
  }


  var mainGridGenerator = function(column, row){

    for(var i = 1; i <= row; i++){
      var aRow = document.createElement('div');
      aRow.setAttribute('id', 'row' + i);
      aRow.setAttribute('class', 'row');

      for(var j = 1; j <= column; j++){
        var aBox = document.createElement('div');
        aBox.setAttribute('id', 'box' + j);
        aBox.setAttribute('class', 'a_box');
        aRow.appendChild(aBox);
      }
      gridContainer.appendChild(aRow);
    }

    for(var w = 0; w < mainGridArray.length; w++){
      mainGridArray[w].addEventListener("click", function(event){
        event.target.style.backgroundColor = colorSelected;
        console.log(colorSelected)
      })
    }
  };


  var colorSwatchGridGenerator = function(column, row){

    for(var i = 1; i <= row; i++){
      var aRow = document.createElement('div');
      aRow.setAttribute('id', 'colorrow' + i);
      aRow.setAttribute('class', 'row');

      for(var j = 1; j <= column; j++){
        var colorBox = document.createElement('div');
        colorBox.setAttribute('id', 'colorbox' + j);
        colorBox.style.backgroundColor = colorArray[colorNumber];
        colorNumber++;
        colorBox.setAttribute('class', 'color_box');
        aRow.appendChild(colorBox);
      }
      colorSwatch.appendChild(aRow);
    }

    for(var w = 0; w < colorClassArray.length; w++){
      colorClassArray[w].addEventListener("click", function(event){
        colorSelected = event.target.style.backgroundColor;
        console.log(colorSelected)
      })
    }
  };

  var eraseIt = function(){
    document.getElementById('erase_button').addEventListener('click', function (){
      colorSelected = 'transparent';
    })
  }


  var clearIt = function(){
    document.getElementById('clear_button').addEventListener('click', function (){
      for(var i = 0; i < mainGridArray.length; i++){
        mainGridArray[i].style.backgroundColor = 'transparent';
      }
    })
  }


//build and input box that takes nums and places them here.


  // var gridInputHeading = document.createElement("h2");
  // gridInputHeading.id = 'gridInputHeading';
  // gridInputHeading.innerHTML = 'Generate Grid Size'
  // gridContainer.appendChild(gridInputHeading);

  // var gridInput1 = document.createElement("input");
  // gridInput1.id = 'gridInput1';
  // gridContainer.appendChild(gridInput1);

  // var gridInput2 = document.createElement("input");
  // gridInput2.id = 'gridInput2';
  // gridContainer.appendChild(gridInput2);

  // var gridGeneratorButton = document.createElement("button");
  // gridGeneratorButton.id = 'gridGeneratorButton';
  // gridGeneratorButton.innerHTML = 'Generate Grid'
  // gridContainer.appendChild(gridGeneratorButton);


  return {
    htmlGenerator : htmlGenerator,
    mainGridGenerator : mainGridGenerator,
    colorSwatchGridGenerator : colorSwatchGridGenerator,
    eraseIt : eraseIt,
    clearIt : clearIt,
    }

}



