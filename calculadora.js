function suma(){
    var numero1 = document.getElementById('cajatexto1').value;
    var numero2 = document.getElementById('cajatexto2').value;
    var Resultado=0;
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    Resultado = parseFloat(Resultado);
    Resultado =  numero1 + numero2;
    
    Resultado = document.getElementById('cajatexto3').value = Resultado;
    return false;
    
    
}

function restar(){
    var numero1 = document.getElementById('cajatexto1').value;
    var numero2 = document.getElementById('cajatexto2').value;
    var resultado=0;
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    Resultado = parseFloat(resultado);
    Resultado =  numero1 - numero2;
    
    Resultado = document.getElementById('cajatexto3').value = Resultado;
    return false;
    
    
}

function multiplicar(){
    var numero1 = document.getElementById('cajatexto1').value;
    var numero2 = document.getElementById('cajatexto2').value;
    var resultado=0;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    Resultado = parseInt(resultado);
    Resultado =  numero1 * numero2;
    
    Resultado = document.getElementById('cajatexto3').value = Resultado;
    return false;
    
    
}

function dividir(){
    var numero1 = document.getElementById('cajatexto1').value;
    var numero2 = document.getElementById('cajatexto2').value;
    var resultado=0;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    alert = parseInt(resultado);
    alert  =  numero1 / numero2;
    
    alert=(Resultado);
    return false;
    
}
