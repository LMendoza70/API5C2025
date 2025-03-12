require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const swagerUi=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc');
const user5cRoutes=require('./routes/user5cRoutes');


const app=express();
const PORT=process.env.PORT||3000;

//agregamos el midleware para trabajar con json
app.use(express.json());

//definimos nuestro primer endpoint o ruta
app.get('/',(req,res)=>{
    res.send('esto es mi primer API');
})

//generamos las distintas rutas...
app.use('/',user5cRoutes);


app.listen(process.env.PORT,()=>{
    console.log('La aplicacion escucho el puerto : '+process.env.PORT);
})

//configuro mi coneccion a mongo
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB Atlas ok'))
  .catch((error) => console.error('Error conectando a MongoDB:', error));
  