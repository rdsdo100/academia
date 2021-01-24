const isCpf = (cpf: string) => {
    let j = 10;
    let l = 11;
    let dv = [0, 0];
    let cpfs = [];
    cpf = cpf.replace(/([^0-9])/g, '');
    cpfs = cpf.split('');

    if (cpfs.length !== 11) {
        return false;
    }
};
