import {  getManager } from 'typeorm';
import {Emails} from "../entity/Emails";

const buscarEmails = async () => {
    const buscarEmails = await getManager().find(Emails);
    return buscarEmails;
};



export { buscarEmails };
