export interface GeralRealizadoHorariaTablet {
    id:      number;
    nameId:  NameID;
    data:    number;
    horas7:  number;
    horas8:  number;
    horas9:  number;
    horas10: number;
    horas11: number;
    horas12: number;
    horas13: number;
    horas14: number;
    horas15: number;
    horas16: number;
    horas17: number;
}

export interface NameID {
    id:      number;
    name:    string;
    ocupado: boolean;
    pausa:   boolean;
    analise: boolean;
}
