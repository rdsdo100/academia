function isCnpj(cnpj) {
    let j = 5;
    let l = 6;
    let dv = [0, 0];
    cnpj = cnpj.replace(/([^0-9])/g, '');
    cnpj = cnpj.split('');
    if (cnpj.length !== 14) {
        return false;
    }

    for (let i = 0; i < cnpj.length - 2; i++) {
        let k = parseInt(cnpj[i]);

        if (j < 2) {
            j = 9;
            dv[0] = dv[0] + k * j;
            j--;
        } else {
            dv[0] = dv[0] + k * j;
            j--;
        }
        if (l < 2) {
            l = 9;
            dv[1] = dv[1] + k * l;
            l--;
        } else {
            dv[1] = dv[1] + k * l;
            l--;
        }
    }

    dv[0] = dv[0] % 11;
    if (dv[0] < 2) {
        dv[0] = 0;
    } else {
        dv[0] = 11 - dv[0];
    }
    dv[1] = dv[1] + dv[0] * 2;

    dv[1] = dv[1] % 11;
    if (dv[1] < 2) {
        dv[1] = 0;
    } else {
        dv[1] = 11 - dv[1];
    }
    if (cnpj[12] == dv[0] && cnpj[13] == dv[1]) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isCnpj };
