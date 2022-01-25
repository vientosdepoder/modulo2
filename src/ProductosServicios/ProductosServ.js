import instance from "../Configuracion/axios"
export function getAllProductos(){
    
    return instance.get("sites/MLA/search?q=celulares")
}
export function getByIdProductos(id){
    
    return instance.get("items/"+id)
}


/*sites/MLA/search?q=mesita+de+luz*/