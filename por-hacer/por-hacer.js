const fs = require('fs');

let listadoPorHacer = [];

const GuardarDB = () =>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data + "\n", (err) => {
    if (err) throw err;
    console.log(`El archivo data.json a sio actualizado`);
    });
}

const cargarDB = () =>{
    try {
        listadoPorHacer = require("../db/data.json");

    } catch (error) {
            listadoPorHacer = [];
    }
 }

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    GuardarDB();
    return porHacer;
}

const getListado = () =>{
   cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion , completado = true) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >=0 ){
        listadoPorHacer[index].completado = completado;
        GuardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if(listadoPorHacer.length === nuevoListado.length){
       return false;
    }else{
        listadoPorHacer = nuevoListado;
        GuardarDB();
        return true;
    }

}

module.exports = {
    crear,
    GuardarDB, 
    getListado,
    actualizar,
    borrar
}