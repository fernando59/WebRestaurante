export class  Reserva{
    constructor(
        public codigo:number,
        public fecha:string,
        public estado:string,
        public hora:string,
        public numero_personas:number,
        public id_cliente:number,
        public  observaciones:string,
        public nombre_cliente:string,
        public tipo_reserva:string
    ){}
}