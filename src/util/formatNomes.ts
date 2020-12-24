
const formatNome = ( nome : string): string => {

    let nomeFormatado: string
    let nomeFormatadoArray = []
    let primeiraLetraMaiuscula = []

    nome = nome.replace(/\s{2,}/g, ' ');
    nomeFormatado = nome.trim()
    nomeFormatadoArray = nomeFormatado.split(" ")

    primeiraLetraMaiuscula =  nomeFormatadoArray.map((nome) => {

        let  words = nome.toLowerCase().split(" ");
        for (var a = 0; a < words.length; a++) {
            if (words[a].length > 2) {
                var w = words[a];
                words[a] = w[0].toUpperCase() + w.slice(1);
            }
        }
        return words.join(" ");

} )

    return nomeFormatado = primeiraLetraMaiuscula.join(" ")
};


export {
    formatNome
}

