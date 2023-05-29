function encriptar() {
    const reemplazos = {
      'a': 'ai',
      'e': 'enter',
      'i': 'oi',
      'o': 'ufat',
      'u': 'obot'
    };

    const textoEntrada = document.getElementById('entrada').value;
    const resultado = textoEntrada.replace(/a|e|i|o|u/g, patron => reemplazos[patron]);
    
    document.getElementById('salida').value = resultado;
}

function desencriptar() {
    const reemplazos = {
      'ai': 'a',
      'enter': 'e',
      'oi': 'i',
      'ufat': 'o',
      'obot': 'u'
    };

    const textoEntrada = document.getElementById('entrada').value;
    const resultado = textoEntrada.replace(/ai|enter|oi|ufat|obot/g, patron => reemplazos[patron]);
    
    document.getElementById('salida').value = resultado;
}

function copiarTexto() {
    var outputText = document.getElementById("salida");
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}