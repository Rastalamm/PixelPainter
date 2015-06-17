
window.onload = function(){

  var pixelPainterRun = pixelPainterApp();

  pixelPainterRun.htmlGenerator();
  pixelPainterRun.mainGridGenerator(15, 15);
  pixelPainterRun.colorSwatchGridGenerator(6, 6);
  pixelPainterRun.eraseIt();
  pixelPainterRun.clearIt();

  }




function pixelPainterApp(){

  var mainContainer = document.createElement('div');
  mainContainer.id = 'pixel_container';


  var colorContainer = document.createElement("div");
  colorContainer.id = 'color_container';

  var header = document.createElement('div');
  header.id = 'header';

  var logo = document.createElement('div');
  logo.id = 'logo';

  var colorHeading = document.createElement("h1");
  colorHeading.innerHTML = "Pixel Painter";

  var clearButton = document.createElement("div");
  clearButton.id = "clear_button";
  clearButton.innerHTML = 'Start Fresh';

  var colorSwatch = document.createElement("div");
  colorSwatch.id = "color_swatch";

  var eraseButton = document.createElement("div");
  eraseButton.id = "erase_button";




  var undoDiv = document.createElement('div');
  undoDiv.id = 'undo_div';

  var undoImg = document.createElement('div');
  undoImg.id = 'undo_img';

  var undoTxt = document.createElement("div");
  undoTxt.id = "undo_txt";
  undoTxt.innerHTML = 'Undo';


  var gridOuterBox = document.createElement('div');
  gridOuterBox.id = 'grid_outer_box';

  var gridContainer = document.createElement("div");
  gridContainer.id = "gridtofill";

  var mainGridArray = document.getElementsByClassName('a_box');


  var colorSelected;
  var colorClassArray = document.getElementsByClassName('color_box');


  var colorArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];;
  var colorArrayLength = colorArray.length;

  var column = 0;
  var row = 0;
  var colorNumber = 0;



  var htmlGenerator = function(){


    mainContainer.appendChild(colorContainer);
    colorContainer.appendChild(header);
    header.appendChild(logo);
    header.appendChild(colorHeading);
    colorContainer.appendChild(clearButton);
    colorContainer.appendChild(colorSwatch);
    colorContainer.appendChild(eraseButton);
    colorContainer.appendChild(undoDiv);
    undoDiv.appendChild(undoImg);
    undoDiv.appendChild(undoTxt);

    //Grid to fill in
    document.body.appendChild(mainContainer);
    mainContainer.appendChild(gridOuterBox)
    gridOuterBox.appendChild(gridContainer);



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



