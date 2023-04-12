function sumar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    /*
    document.getEmelentById("").value
     Es un metodo para optener el campo que empieze en id en el documento html que le asignamos nosotros
     value:se utiliza para obtener el campo de entrada
    */
    
    var resultado = parseInt(num1) + parseInt(num2);
    /*
    ParseInt 
     Es el valor que nosotros queremos asignarle como number y no como cadena
     esto es para que no se concatenen y si es 5+3 no quede como un resultado de 53 sino de 8
        Recordar existe :  ParseFloat(decimales) , 
    */
    
    document.getElementById("resultado").innerHTML = resultado;
    /*
    InnerHTML 
     Es el resultado que se vera en el Span o quizas en alguna otra cosa igual al Span(?)
    */
  }