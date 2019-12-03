export class  Pedido{
    constructor(
        public codigo:number,
        public fecha:string,
        public estado:string,
        public id_mesero:number,
        public id_reserva:number
    ){}
}