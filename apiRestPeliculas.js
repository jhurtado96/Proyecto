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

app.post("/peliculas/director",
        
function(req,res){
    let respuesta;
    let id = req.body.id
        if(arrPelis[id].director==null){
            
            arrPelis[id].director =
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
                
            
            respuesta={error:false, codigo:200, mensaje:'director metido',resultado:arrPelis[id].director}
            
        }else{
            respuesta = {error: true, codigo: 200, mensaje:"ya hay director",resultado:arrPelis[id].director}
        }
    
    res.send(respuesta)
}
);
app.post("/peliculas/guionista",
        
function(req,res){
    let respuesta;
    let id = req.body.id
        if(arrPelis[id].guionista==null){
            
            arrPelis[id].guionista =
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
                
            
            respuesta={error:false, codigo:200, mensaje:'guionista metido',resultado:arrPelis[id].director}
            
        }else{
            respuesta = {error: true, codigo: 200, mensaje:"ya hay guionista",resultado:arrPelis[id].director}
        }
    
    res.send(respuesta)
}
);

app.put("/peliculas",

 function(req,res){
     let respuesta;
     let id = req.body.id
     
        if(arrPelis[id]!=null){
            if(req.body.title!=null){
                arrPelis[id].title= req.body.title;
            }
            if (req.body.releaseYear!=null) {
                arrPelis[id].releaseYear=req.body.releaseYear;
            }
            if (req.body.nationality!=null) {
                arrPelis[id].nationality=req.body.nationality;
            }
            if (req.body.genre!=null) {
                arrPelis[id].genre=req.body.genre;
            }
            if (req.body.foto!=null) {
                arrPelis[id].foto=req.body.foto;
            }
            if (req.body.actors!=null) {
                arrPelis[id].actors=req.body.actors;
            }
            if (req.body.director!=null) {
                arrPelis[id].director=req.body.director;
            }
            if (req.body.guionista!=null) {
                arrPelis[id].guionista=req.body.guionista;
            }
            if (req.body.languaje!=null) {
                arrPelis[id].languaje=req.body.languaje;
            }
            if (req.body.plataform!=null) {
                arrPelis[id].plataform=req.body.plataform;
            }
            if (req.body.isMCU!=null) {
                arrPelis[id].isMCU=req.body.isMCU;
            }
            if (req.body.mainCharacterName!=null) {
                arrPelis[id].mainCharacterName=req.body.mainCharacterName;
            }
 
             respuesta={error:false, codigo:200, mensaje:'Peli actualizada',resultado:arrPelis[id]}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"No existe la pelicula"}
         }
     
     res.send(respuesta)
 }
 );

 app.put("/peliculas/actor",

 function(req,res){
     let respuesta;
     let idM = req.body.idM;
     let idA = req.body.idA
        if(arrPelis[idM].actors[idA]!=null){
            
            if(req.body.name!=null){
                arrPelis[idM].actors[idA].name= req.body.name;
            }

            
            if(req.body.genre!=null){
                arrPelis[idM].actors[idA].genre= req.body.genre;
            }
            if(req.body.weight!=null){
                arrPelis[idM].actors[idA].weight= req.body.weight;
            }
            if(req.body.height!=null){
                arrPelis[idM].actors[idA].height= req.body.height;
            }
            if(req.body.hairColor!=null){
                arrPelis[idM].actors[idA].hairColor= req.body.hairColor;
            }
            if(req.body.eyeColor!=null){
                arrPelis[idM].actors[idA].eyeColor= req.body.eyeColor;
            }
            if(req.body.race!=null){
                arrPelis[idM].actors[idA].race= req.body.race;
            }
            if(req.body.isRetired!=null){
                arrPelis[idM].actors[idA].isRetired= req.body.isRetired;
            }
            if(req.body.oscarsNumber!=null){
                arrPelis[idM].actors[idA].name= req.body.oscarsNumber;
            }
            if(req.body.profession!=null){
                arrPelis[idM].actors[idA].name= req.body.profession;
            }
            if(req.body.foto!=null){
                arrPelis[idM].actors[idA].foto= req.body.foto;
            }      
 
             respuesta={error:false, codigo:200, mensaje:'actor actualizado',resultado:arrPelis[idM].actors[idA]}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"El actor no se puede actualizar"}
         }
     
     res.send(respuesta)
 }
 );

 app.put("/peliculas/director",

 function(req,res){
     let respuesta;
     let id =req.body.id
        if(arrPelis[id].director!=null){
            
            if(req.body.name!=null){
                arrPelis[id].director.name= req.body.name;
            }

            
            if(req.body.genre!=null){
                arrPelis[id].director.genre= req.body.genre;
            }
            if(req.body.weight!=null){
                arrPelis[id].director.weight= req.body.weight;
            }
            if(req.body.height!=null){
                arrPelis[id].director.height= req.body.height;
            }
            if(req.body.hairColor!=null){
                arrPelis[id].director.hairColor= req.body.hairColor;
            }
            if(req.body.eyeColor!=null){
                arrPelis[id].director.eyeColor= req.body.eyeColor;
            }
            if(req.body.race!=null){
                arrPelis[id].director.race= req.body.race;
            }
            if(req.body.isRetired!=null){
                arrPelis[id].director.isRetired= req.body.isRetired;
            }
            if(req.body.oscarsNumber!=null){
                arrPelis[id].director.name= req.body.oscarsNumber;
            }
            if(req.body.profession!=null){
                arrPelis[id].director.name= req.body.profession;
            }
            if(req.body.foto!=null){
                arrPelis[id].director.foto= req.body.foto;
            }      
 
             respuesta={error:false, codigo:200, mensaje:'director actualizado',resultado:arrPelis[id].director}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"El director no se puede actualizar"}
         }
     
     res.send(respuesta)
 }
 );

 app.put("/peliculas/guionista",

 function(req,res){
     let respuesta;
     let id =req.body.id
        if(arrPelis[id].guionista!=null){
            
            if(req.body.name!=null){
                arrPelis[id].guionista.name= req.body.name;
            }

            
            if(req.body.genre!=null){
                arrPelis[id].guionista.genre= req.body.genre;
            }
            if(req.body.weight!=null){
                arrPelis[id].guionista.weight= req.body.weight;
            }
            if(req.body.height!=null){
                arrPelis[id].guionista.height= req.body.height;
            }
            if(req.body.hairColor!=null){
                arrPelis[id].guionista.hairColor= req.body.hairColor;
            }
            if(req.body.eyeColor!=null){
                arrPelis[id].guionista.eyeColor= req.body.eyeColor;
            }
            if(req.body.race!=null){
                arrPelis[id].guionista.race= req.body.race;
            }
            if(req.body.isRetired!=null){
                arrPelis[id].guionista.isRetired= req.body.isRetired;
            }
            if(req.body.oscarsNumber!=null){
                arrPelis[id].guionista.name= req.body.oscarsNumber;
            }
            if(req.body.profession!=null){
                arrPelis[id].guionista.name= req.body.profession;
            }
            if(req.body.foto!=null){
                arrPelis[id].guionista.foto= req.body.foto;
            }      
 
             respuesta={error:false, codigo:200, mensaje:'guionista actualizado',resultado:arrPelis[id].director}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"El guionista no se puede actualizar"}
         }
     
     res.send(respuesta)
 }
 );

 app.delete("/peliculas",

 function(req,res){
     let respuesta;
     let id = req.body.id;
         if(arrPelis[id]!=null){
             arrPelis.splice([id],1)
             
 
             respuesta={error:false, codigo:200, mensaje:'Peli borrada'}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"La peli no existe"}
         }
     
     res.send(respuesta)
 }
 );

 app.delete("/peliculas/actor",

 function(req,res){
     let respuesta;
     let idM = req.body.idM;
     let idA = req.body.idA;
         if(arrPelis[idM].actors[idA]!=null){
             arrPelis[idM].actors.splice([idA],1)
             
 
             respuesta={error:false, codigo:200, mensaje:'actor borrado'}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"El actor no existe"}
         }
     
     res.send(respuesta)
 }
 );

 app.delete("/peliculas/director",

 function(req,res){
     let respuesta;
     let id = req.body.id;
         if(arrPelis[id].director!=null){
             arrPelis[id].director=null
             
 
             respuesta={error:false, codigo:200, mensaje:'Peli borrada'}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"La peli no existe"}
         }
     
     res.send(respuesta)
 }
 );
 app.delete("/peliculas/guionista",

 function(req,res){
     let respuesta;
     let id = req.body.id;
         if(arrPelis[id].guionista!=null){
             arrPelis[id].guionista = null
 
             respuesta={error:false, codigo:200, mensaje:'Peli borrada'}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"La peli no existe"}
         }
     
     res.send(respuesta)
 }
 );

 const fs = require("fs")
 let ficherito1 = JSON.stringify(arrPelis)
 fs.writeFileSync("apiRestPeliculas.json",ficherito1)

app.listen(3000);