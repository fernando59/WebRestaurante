export class  Producto{
    constructor(
        public codigo:Number,
        public nombre:string,
        public descripcion:string,
        public precio:Number,
        public sw_stock:Number,
        public id_unidad_medida:Number,
        public  unidad_medida:string
    ){}
}