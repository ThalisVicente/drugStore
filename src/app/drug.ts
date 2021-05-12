export class Drug {
   constructor( 
    public genName: string, 
    public brandName: string, 
    public strength: string, 
    public dosageFrom: string,
    public img: File | null
    ){}      
}
