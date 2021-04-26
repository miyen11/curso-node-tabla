const fs = require('fs');

const crearArchivoTablas = async()=>{
    try {
        console.log('Se agrego algo nuevo');
        let contenido = '';
        for(let j= 1 ; j <=10 ;j++){
            contenido += `\nTabla del ${j}\n`
            for(let i = 0; i< 10 ;i++){
                contenido+= `${j} * ${i+1} = ${j*(i+1)} \n`;  
            }
        }
        fs.writeFileSync(`./salida/TablasCompletas.txt`,contenido); 
        return `Se creo el archivo TablasCompletas.txt`;  

    } catch (err) {
        throw err;       
    }

}

const crearArchivoTablaBase = async (base,listar,hasta) =>{
    try {
        let contenidoTablaBase = ''
        for(let i = 1; i<=hasta;i++){
            contenidoTablaBase += `${base} * ${i} = ${(base * i)}\n`;
        }
        if(listar){
            console.log(contenidoTablaBase);
        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`,contenidoTablaBase);
        return `Se creo correctamente el archivo: Tabla-${base}.txt `;            
    } catch (error) {
        throw error
    }
};

module.exports = {
    crearArchivoTablaBase,
    crearArchivoTablas
};



