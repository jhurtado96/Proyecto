class Professional
{


    constructor (name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession, foto)
    {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.foto = foto;
    }


    
}
class Movie {

    constructor (title, releaseYear,nationality, genre, foto,actors,director,guionista,languaje,plataform,isMCU,mainCharacterName)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.foto = foto
        this.actors=actors
        this.director = director;
        this.guionista = guionista;
        this.languaje = languaje;
        this.plataform = plataform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        
    }
    printMovie()
    {
        let datos;

        for (let i = 0; i<this.actors.length; i++)
        {
            datos.push(this.actors[i].printProfessional());
        }
        return `${this.title},${this.releaseYear},${datos},${this.nationality},${this.director.printProfessional()},${this.writer.printProfessional()},${this.language},${this.platform},${this.isMCU},${this.mainCharacterName},${this.producer},${this.distributor},${this.genre}`
    }

}

// Peliculas




// Crear objetos profesional
let pro1 = new Professional ("pike",17,"male",80,178,"brown","brown","caucasic",false,"spanish",0,"actor","https://im-media.voltron.voanews.com/Drupal/02live-246/styles/sourced/s3/2019-08/C975CDD7-2C9F-4928-BED8-C412E3F68B20.jpg?itok=vesfvqKB");
 let pro2 = new Professional ("hanna",37,"female",60,170,"black","green","caucasic",false,"greek",2,"actress","https://los40es00.epimg.net/los40/imagenes/2018/10/09/cinetv/1539080612_321993_1539080975_noticia_normal.jpg");
 let pro3 = new Professional ("louis",29,"male",77,180,"red","blue","caucasic",false,"mexican",0,"writer","https://postposmo.com/wp-content/uploads/2019/11/trumbo_peliculas_de_escritores.jpg");
 let pro4 = new Professional ("mao cao", 67, "action", 73, 150, "brown", "blue","asian",false,"chienese",1,"actor", "https://f.rpp-noticias.io/2019/04/18/214521_779805.jpg")
 let pro5 = new Professional ("pepe", 42, "horror", 89,183,"black","brown","spanish",true,"spanish",0,"writer","https://www.literautas.com/es/blog/wp-content/uploads/desmontando-a-harry.jpg")
 let pro7 = new Professional ("mark",78,"male",90,190,"brown","brown","caucasic",true,"deutch",3,"director","https://lh3.googleusercontent.com/proxy/T1M_nuoOMPSkqqPhKHnYWSCUEZlTZbuc1qgHsyZh2ThjvDpanBmjlltz_j2aSPypgxOCNgLZIINUphcfRcSZlZ48nHcXHrUexWGr8lr4zugnCQLA0jaV9u8RC7AjLhjR2ZzYExu85zbhBzOxFUElULKNLGHabbOcp0HZ");
 let pro8 = new Professional ("eva",54,"female",65,170,"red","green","caucasic",false,"russian",1,"director","https://cinealojo.files.wordpress.com/2010/09/michael-mann-un-director-extremo1.jpg");
 let pro9 = new Professional ("james",42,"male",80,183,"black","blue","caucasic",false,"bosnian",0,"actor", "https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/190350.png");
 
 // Crear Peliculas
 let peli1 = new Movie ("PascuYRodriYJavi",2021,"Spain","horror","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyKOXBMuc5pz3_26RoL9o9PPBMK1uT72XVg&usqp=CAU",[pro1,pro2,pro3],pro3,pro4,"Spanish","netflix",true,"Asterix");
let peli2 = new Movie ("Just chill",2021,"Spain","horror","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyKOXBMuc5pz3_26RoL9o9PPBMK1uT72XVg&usqp=CAU",[pro4,pro7,pro7],pro2,pro1,"Spanish","netflix",true,"Asterix");
let peli3 = new Movie ("Jorge esto funciona",2021,"Spain","horror","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyKOXBMuc5pz3_26RoL9o9PPBMK1uT72XVg&usqp=CAU",[pro2,pro1,pro2],pro4,pro7,"Spanish","netflix",true,"Asterix");
let peli4 = new Movie ("HOLIWI",2021,"Spain","horror","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyKOXBMuc5pz3_26RoL9o9PPBMK1uT72XVg&usqp=CAU",[pro3,pro3,pro3],pro4,pro7,"Spanish","netflix",true,"Asterix");
let peli6 = new Movie ("perfect",2021,"Spain","horror","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyKOXBMuc5pz3_26RoL9o9PPBMK1uT72XVg&usqp=CAU",[pro7,pro4,pro1],pro4,pro7,"Spanish","netflix",true,"Asterix");
let peli5=null
let peliculita = null

let arrProf = [pro1,pro2,pro3,pro4,pro5]
let arrPelis = [peli1,peli2,peli3]




const express = require("express");
const { response } = require('express');
 
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.get('/', function (req,res){
    res.send('Hello from server')
});

app.get("/peliculas",
function (req,res) 
{
    let respuesta;
    if (arrPelis==null) {
        respuesta={error:false, codigo:200, mensaje:'No hay peliculas'}
    }
    
        
    
    if(req.query.id)        
    {
        id = req.query.id
        res.send(arrPelis[id]);
        respuesta = arrPelis[id];
    }else{
        respuesta=arrPelis
        
    }
    res.send(respuesta); 
    
    
        
} 
)
app.get("/peliculas/actor",
function (req,res) 
{
    let respuesta;
    if (arrPelis.actors==null) {
        respuesta={error:false, codigo:200, mensaje:'No hay actores'}
    }
    
        
    
    if(req.query.id)        
    {
        id = req.query.id
        res.send(arrPelis[id].actors);
        respuesta = arrPelis[id].actors;
    }else{
        respuesta=arrPelis[id]
        
    }
    res.send(respuesta); 
    
    
        
} 
)
app.get("/peliculas/director",
function (req,res) 
{
    let respuesta;
    if (arrPelis.director==null) {
        respuesta={error:false, codigo:200, mensaje:'No hay directores'}
    }
    
        
    
    if(req.query.id)        
    {
        id = req.query.id
        res.send(arrPelis[id].director);
        respuesta = arrPelis[id].director;
    }else{
        respuesta=arrPelis[id]
        
    }
    res.send(respuesta); 
    
    
        
} 
)

app.get("/peliculas/guionista",
function (req,res) 
{
    let respuesta;
    if (arrPelis.guionista==null) {
        respuesta={error:false, codigo:200, mensaje:'No hay guionista'}
    }
    
        
    
    if(req.query.id)        
    {
        id = req.query.id
        res.send(arrPelis[id].guionista);
        respuesta = arrPelis[id].guionista;
    }else{
        respuesta=arrPelis[id]
        
    }
    res.send(respuesta); 
    
    
        
} 
)
app.post("/peliculas",
        
        function(req,res){
            let respuesta;
            
                if(peliculita===null){
                        peliculita = new Movie(
                            req.body.title,
                            req.body.releaseYear,
                            req.body.nationality,
                            req.body.genre,
                            req.body.foto,
                            req.body.actors,
                            req.body.director,
                            req.body.guionista,
                            req.body.languaje,
                            req.body.plataform,
                            req.body.isMCU,
                            req.body.mainCharacterName
                            
                            
                            )
                        arrPelis.push(peliculita)
                    
                    respuesta={error:false, codigo:200, mensaje:'Pelicula creada',resultado:peliculita}
                    
                }else{
                    respuesta = {error: true, codigo: 200, mensaje:"La peli ya existe",resultado:peliculita}
                }
            
            res.send(respuesta)
        }
 );

 app.post("/peliculas/actor",
        
 function(req,res){
     let respuesta;
     let id = req.body.id
         if(arrPelis[id].actors!=null){
             
             arrPelis[id].actors.push(
                new Professional(req.body.name,
                    req.body.genre,
                    req.body.weight,
                    req.body.height,
                    req.body.hairColor,
                    req.body.eyeColor,
                    req.body.race,
                    req.body.isRetired,
                    req.body.nationality,
                    req.body.oscarsNumber,
                    req.body.profession,
                    req.body.foto)
             )    
             
             respuesta={error:false, codigo:200, mensaje:'actor metido',resultado:peliculita}
             
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"el id no existe",resultado:peliculita}
         }
     
     res.send(respuesta)
 }
);

app.listen(3000);