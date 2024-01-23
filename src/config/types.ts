export interface Diagnoses{
    code: string;
    name: string;
    latin?: string;
}

export interface Patients{
    id: string;
    dateOfBirth: string;
    name: string;
    gender: string;
    occupation: string;
    ssn: string;
}

export type NonSensitivePatientData = Omit<Patients,'ssn'>;