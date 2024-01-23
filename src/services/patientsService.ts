import patients from '../../data/patients';
import { Patients,NonSensitivePatientData } from '../../src/config/types';

const getEntries = ():Patients[]=>{
    return patients;
};

// const getNonSensitiveEntries = ():NonSensitivePatientData[]=>{
//     return patients.map(({id,name,dateOfBirth,gender,occupation})=>{
//         ({id,name,dateOfBirth,gender,occupation});
//     });
// };

const getNonSensitiveEntries = ():NonSensitivePatientData[] => {
    return patients.map(({id,name,dateOfBirth,gender,occupation})=>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

export default {
    getEntries,
    getNonSensitiveEntries,
};