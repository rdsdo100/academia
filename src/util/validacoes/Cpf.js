function iscpf(cpf) {
    let j = 10;
    let l = 11;
    let dv = [0, 0]
    cpf = cpf.replace(/([^0-9])/g, '' )
    cpf = cpf.split('')
    if(cpf.length !==  11){
        return false
    }
    for (let i = 0; i < cpf.length - 1; i++) {
        let k = parseInt(cpf[i])
        if(j >= 2) {
            dv[0] = dv[0] + (k * j--);
        }
        if(l >= 3){
            dv[1] = dv[1] + (k * l--)
        }
    }

    dv[0] = dv[0] % 11
    if(dv[0] < 2){
        dv[0] = 0
    }else { 
        dv[0] = 11 - dv[0]
    }
    dv[1] = dv[1] + (dv[0] * 2)

    dv[1] = dv[1] % 11
    if(dv[1] < 2){
        dv[1] = 0
    }else {
        dv[1] = 11 - dv[1]
    }

    if (cpf[9] == dv[0] && cpf[10] == dv[1]){
        return true
    }else {
        return false
    }

}

module.exports = {iscpf}