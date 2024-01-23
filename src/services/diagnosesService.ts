import diagnoses from '../../data/diagnoses';
import { Diagnoses } from '../config/types';

const getEntries = ():Diagnoses[]=>{
    return diagnoses;
};

export default {
    getEntries
};