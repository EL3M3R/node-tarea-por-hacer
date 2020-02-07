let descripcion = {
     demand: true,
     alias:'d',
    desc: "Descripcion de la tarea por hacer"
    }
 

let completado = {
    default: true,
     alias: "c",
    desc: "Marca commo  completado o pendiente la tarea"
     }

const argv = require('yargs')
        .command("crear" , "Crear un elemento por hacer" , {descripcion})
        .command("actualizar" , "Actualiza el estado completado de una tarea ",{
                descripcion, 
                completado
            })
            .command("borrar" , "Elimina una tarea " , {
                descripcion
            })
        .help()
        .argv;

        module.exports = {
            argv
        }
