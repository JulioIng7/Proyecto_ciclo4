//console.log("Hola mundo desde nodejs");

const express= require("express");
const mongoose= require("mongoose");
const TareaSchema= require("./models/Tarea.js");

const app= express();
const router= express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// Conexion a la base datos
mongoose.connect("mongodb+srv://Julio_G07:981022Jg@cluster0.z5b2y.mongodb.net/Prueba?retryWrites=true&w=majority")


router.get("/",(req,res)=>{

res.send("El inicio de mi API");

})

router.post("/Tarea",(req,res)=>{
let nuevaTarea= new TareaSchema({

    idTarea:req.body.id,
    nombreTarea:req.body.nombre,
    detalleTarea:req.body.detalle
});
    nuevaTarea.save(function(err,datos){
        if(err){
            console.log(err);
        }
        res.send("Tarea Agregada ")
    });

});

app.use(router);


app.listen(3000,()=>{

console.log("Servidor corriendo puerto 3000");

});

