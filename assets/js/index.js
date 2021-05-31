//Evento Consultar
$(document).ready(() => {
  // event = evento correspondiente al elemento, en este caso "form"
  $('form').submit((event) => {
    event.preventDefault();
    /*Para sacar el valor del input se necesita una variable donde se asigne el elemento del DOM y luego aplicar el metodo .val()*/
    let valorInput = $('#pokeInput').val();
    //alert(valorInput); para revisar si se está obteniendo el valor
  
    //Metodo AJAX se declara $ajax({})
    $.ajax({
      //Recibe como atributo (finalizar con ,):
      url: 'https://pokeapi.co/api/v2/pokemon/' + valorInput,
      //Success es un atributo del objeto de configuración de ajax 
      //Recibirá como parametro LA DATA
      success: (data)=>{
        let nombre = data.name
        let imagen = data.sprites.front_default
        let peso = data.weigth
        //Template correspondiente a la presentación del Pokemon
        $("#pokeInfo").html(`
          <div class="text-center">
            <h3>${nombre}</h3>
            <img src="${imagen}">
            <h6>Peso: ${peso}</h6>
          </div>
        `)
      }
    })
  })

})

//Gráfica de CanvasJS
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Simple Column Chart with Index Labels"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column", //change type to bar, line, area, pie, etc
      //indexLabel: "{y}", //Shows y value on all Data Points
      indexLabelFontColor: "#5A5757",
      indexLabelFontSize: 16,
      indexLabelPlacement: "outside",
      dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 92, indexLabel: "\u2605 Highest" },
        { x: 60, y: 68 },
        { x: 70, y: 38 },
        { x: 80, y: 71 },
        { x: 90, y: 54 },
        { x: 100, y: 60 },
        { x: 110, y: 36 },
        { x: 120, y: 49 },
        { x: 130, y: 21, indexLabel: "\u2691 Lowest" }
      ]
    }]
  });
  chart.render();
}
