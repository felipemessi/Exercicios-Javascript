// Checa a idade e retorna o valor em uma promise
function checaIdade (idade) {
    return new Promise(function(resolve, reject) {
        if (idade > 17){
            resolve()
        } else {
            reject()
        }
    })
}

checaIdade(10)
    .then(function() {
        console.log('Maior de 18')
    })
    .catch(function() {
        console.log('Menor de 18')
    })