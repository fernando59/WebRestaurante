export class  Factura{
    constructor(
        public codigo:number,
        public nit:string,
        public serie:string,
        public total:number,
        public id_cajero:number,
        public id_metodo_pago:number,
        public id_pedido:number
    ){}
}