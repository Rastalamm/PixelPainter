
window.onload = function(){

  var mainContainer = document.createElement('div');
  document.body.appendChild(mainContainer);


  var gridContainer = document.createElement("div");
  gridContainer.id = "gridtofill";
  mainContainer.appendChild(gridContainer);

  var grabMainContainer = document.getElementById('gridtofill');

  var mainGridArray = document.getElementsByClassName('a_box');

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
      grabMainContainer.appendChild(aRow);
    }

    for(var w = 0; w < mainGridArray.length; w++){
      mainGridArray[w].addEventListener("click", function(event){
        event.target.style.backgroundColor = colorSelected;
        console.log(colorSelected)
      })
    }

  };

  //Color swatch
  var colorContainer = document.createElement("div");
  colorContainer.id = 'color_container';
  mainContainer.appendChild(colorContainer);

  var colorHeading = document.createElement("h2");
  colorHeading.innerHTML = "Select a color";
  colorContainer.appendChild(colorHeading);


  var colorSwatch = document.createElement("div");
  colorSwatch.id = "color_swatch";
  colorContainer.appendChild(colorSwatch);



  var grabSwatchContainer = document.getElementById('color_swatch');
  var colorArray = ['yellow', 'blue', 'red', 'green', 'black', 'pink', 'orange', 'purple', 'white'];
  var colorArrayLength = colorArray.length;

  var column = 0;
  var row = 0;
  var colorNumber = 0;

  var colorSelected;
  var colorClassArray = document.getElementsByClassName('color_box');

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
      grabSwatchContainer.appendChild(aRow);
    }

    for(var w = 0; w < colorClassArray.length; w++){
      colorClassArray[w].addEventListener("click", function(event){
        colorSelected = event.target.style.backgroundColor;
        console.log(colorSelected)
      })
    }

  };

  var eraseButton = document.createElement("button");
  eraseButton.id = "erase_button";
  eraseButton.innerHTML = 'Erase';
  colorContainer.appendChild(eraseButton);


  document.getElementById('erase_button').addEventListener('click', function (){
        colorSelected = 'transparent';
        console.log(colorSelected)
      })

  var clearButton = document.createElement("button");
  clearButton.id = "clear_button";
  clearButton.innerHTML = 'Clear';
  colorContainer.appendChild(clearButton);

  document.getElementById('clear_button').addEventListener('click', function (){
    for(var i = 0; i < mainGridArray.length; i++){
      mainGridArray[i].style.backgroundColor = 'transparent';
    }
  })





//build and input box that takes nums and places them here.
    mainGridGenerator(10, 10);
    colorSwatchGridGenerator(3, 3)








}


