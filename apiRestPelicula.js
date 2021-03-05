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
 
 // Crear Peliculas
 

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

let peli1 = new Movie ("PascuYRodriYJavi",2021,"Spain","horror","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyKOXBMuc5pz3_26RoL9o9PPBMK1uT72XVg&usqp=CAU");
let peli2 = new Movie ("adios", 1990,"horror", "spanish","https://lamanodelextranjero.files.wordpress.com/2015/03/cartel-americano-de-hello-dolly.jpg")
let peli3 = new Movie ("hola", 2018,"action", "french","http://es.web.img2.acsta.net/medias/nmedia/18/95/65/62/20420898.jpg")
let peli4 = new Movie ("Gladiator", 1995, "american", "action","https://pics.filmaffinity.com/Gladiator-368149580-large.jpg")
let peli5=null

//Profesionales

let pro1 = new Professional ("pike",17,"male",80,178,"brown","brown","caucasic",false,"spanish",0,"actor","https://im-media.voltron.voanews.com/Drupal/02live-246/styles/sourced/s3/2019-08/C975CDD7-2C9F-4928-BED8-C412E3F68B20.jpg?itok=vesfvqKB");
 let pro2 = new Professional ("hanna",37,"female",60,170,"black","green","caucasic",false,"greek",2,"actress","https://los40es00.epimg.net/los40/imagenes/2018/10/09/cinetv/1539080612_321993_1539080975_noticia_normal.jpg");
 let pro3 = new Professional ("louis",29,"male",77,180,"red","blue","caucasic",false,"mexican",0,"writer","https://postposmo.com/wp-content/uploads/2019/11/trumbo_peliculas_de_escritores.jpg");
 let pro4 = new Professional ("mao cao", 67, "action", 73, 150, "brown", "blue","asian",false,"chienese",1,"actor", "https://f.rpp-noticias.io/2019/04/18/214521_779805.jpg")
 let pro5 = new Professional ("pepe", 42, "horror", 89,183,"black","brown","spanish",true,"spanish",0,"writer","https://www.literautas.com/es/blog/wp-content/uploads/desmontando-a-harry.jpg")
 let pro7 = new Professional ("mark",78,"male",90,190,"brown","brown","caucasic",true,"deutch",3,"director","https://lh3.googleusercontent.com/proxy/T1M_nuoOMPSkqqPhKHnYWSCUEZlTZbuc1qgHsyZh2ThjvDpanBmjlltz_j2aSPypgxOCNgLZIINUphcfRcSZlZ48nHcXHrUexWGr8lr4zugnCQLA0jaV9u8RC7AjLhjR2ZzYExu85zbhBzOxFUElULKNLGHabbOcp0HZ");
 let pro8 = new Professional ("eva",54,"female",65,170,"red","green","caucasic",false,"russian",1,"director","https://cinealojo.files.wordpress.com/2010/09/michael-mann-un-director-extremo1.jpg");
 let pro9 = new Professional ("james",42,"male",80,183,"black","blue","caucasic",false,"bosnian",0,"actor", "https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/190350.png");

arrPelis=[peli1,peli2,peli3]


peli1.guionista=null
peli1.director=null
const express = require("express");
const { response } = require('express');
 
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.get('/', function (req,res){
    res.send('Hello from server')
});

app.get("/pelicula",
    function (req,res) 
    {
        let respuesta;
        if(peli5!=null)        
        {
            respuesta=peli5
        }else{
            respuesta={error:false, codigo:200, mensaje:'Pelicula nula',resultado:peli5}
            
        
        }
        res.send(respuesta); 
    }

);
app.get("/pelicula/actor",
    function (req,res) 
    {
        let respuesta;
        if (peli5.actors==null) {
            respuesta={error:false, codigo:200, mensaje:'No hay actores',resultado:peli5}
        }
        
            
        
        if(req.query.id)        
        {
            id = req.query.id
            res.send(peli5.actors[id]);
            respuesta = peli5.actors[id];
        }else{
            respuesta=peli5.actors
            
        }
        res.send(respuesta); 
        
        
            
    } 

    

);
app.get("/pelicula/director",
    function (req,res) 
    {
        let respuesta;
        
        if(peli5.director!=null)        
        {
           
            respuesta = peli5.director;
        }else{
            respuesta={error:false, codigo:200, mensaje:'No hay director',resultado:peli5}
            
        }
        res.send(respuesta); 
        
        
    }

);
app.get("/pelicula/guionista",
    function (req,res) 
    {
        let respuesta;
        
        if(peli5.guionista!=null)        
        {
           
            respuesta = peli5.guionista;
        }else{
            respuesta={error:false, codigo:200, mensaje:'No hay guionista',resultado:peli5.guionista}
            
        }
        res.send(respuesta); 
        
        
    }

);






app.post("/pelicula",
        
        function(req,res){
            let respuesta;
            
                if(peli5===null){
                    peli5 = new Movie(
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
                        
                    
                    respuesta={error:false, codigo:200, mensaje:'Pelicula creada',resultado:peli5}
                    
                }else{
                    respuesta = {error: true, codigo: 200, mensaje:"La peli ya existe",resultado:peli5}
                }
            
            res.send(respuesta)
        }
 );
 app.post("/pelicula/actor",
        
        function(req,res){
            let respuesta;
            
                if(peli5.actors!=null){
                    peli5.actors.push(new Professional(req.body.name,
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
                        
                    
                    respuesta={error:false, codigo:200, mensaje:'Actor creado',resultado:peli5.actors}
                    
                }else{
                    respuesta = {error: true, codigo: 200, mensaje:"La lista esta vacia",resultado:peli5.actors}
                }
            
            res.send(respuesta)
        }
 );

 app.post("/pelicula/director",
        
        function(req,res){
            let respuesta;
            
                if(peli5.director==null){
                    peli5.director = new Professional(req.body.name,
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
                        req.body.foto
                    )
                        
                    
                    respuesta={error:false, codigo:200, mensaje:'Director creado',resultado:peli5.director}
                    
                }else{
                    respuesta = {error: true, codigo: 200, mensaje:"Ya hay un director",resultado:peli5.director}
                }
            
            res.send(respuesta)
        }
 );

 app.post("/pelicula/guionista",
        
        function(req,res){
            let respuesta;
            
                if(peli5.guionista==null){
                    peli5.guionista = new Professional(req.body.name,
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
                        req.body.foto
                    )
                        
                    
                    respuesta={error:false, codigo:200, mensaje:'Guionista creado',resultado:peli5.guionista}
                    
                }else{
                    respuesta = {error: true, codigo: 200, mensaje:"Ya hay un guionista",resultado:peli5.guionista}
                }
            
            res.send(respuesta)
        }
 );

 app.put("/pelicula",

 function(req,res){
     let respuesta;
     
     
        if(peli5!=null){
            if(req.body.title!=null){
                peli5.title= req.body.title;
            }
            if (req.body.releaseYear!=null) {
                peli5.releaseYear=req.body.releaseYear;
            }
            if (req.body.nationality!=null) {
                peli5.nationality=req.body.nationality;
            }
            if (req.body.genre!=null) {
                peli5.genre=req.body.genre;
            }
            if (req.body.foto!=null) {
                peli5.foto=req.body.foto;
            }
            if (req.body.actors!=null) {
                peli5.actors=req.body.actors;
            }
            if (req.body.director!=null) {
                peli5.director=req.body.director;
            }
            if (req.body.guionista!=null) {
                peli5.guionista=req.body.guionista;
            }
            if (req.body.languaje!=null) {
                peli5.languaje=req.body.languaje;
            }
            if (req.body.plataform!=null) {
                peli5.plataform=req.body.plataform;
            }
            if (req.body.isMCU!=null) {
                peli5.isMCU=req.body.isMCU;
            }
            if (req.body.mainCharacterName!=null) {
                peli5.mainCharacterName=req.body.mainCharacterName;
            }
 
             respuesta={error:false, codigo:200, mensaje:'Peli actualizada',resultado:peli5}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"No existe la pelicula",resultado: peli5}
         }
     
     res.send(respuesta)
 }
 );

 app.put("/pelicula/actor",

 function(req,res){
     let respuesta;
     let id = req.body.id;
     
        if(peli5.actors[id]!=null){
            
            if(req.body.name!=null){
                peli5.actors[id].name= req.body.name;
            }

            
            if(req.body.genre!=null){
                peli5.actors[id].genre= req.body.genre;
            }
            if(req.body.weight!=null){
                peli5.actors[id].weight= req.body.weight;
            }
            if(req.body.height!=null){
                peli5.actors[id].height= req.body.height;
            }
            if(req.body.hairColor!=null){
                peli5.actors[id].hairColor= req.body.hairColor;
            }
            if(req.body.eyeColor!=null){
                peli5.actors[id].eyeColor= req.body.eyeColor;
            }
            if(req.body.race!=null){
                peli5.actors[id].race= req.body.race;
            }
            if(req.body.isRetired!=null){
                peli5.actors[id].isRetired= req.body.isRetired;
            }
            if(req.body.oscarsNumber!=null){
                peli5.oscarsNumber[id].name= req.body.oscarsNumber;
            }
            if(req.body.profession!=null){
                peli5.profession[id].name= req.body.profession;
            }
            if(req.body.foto!=null){
                peli5.actors[id].foto= req.body.foto;
            }      
 
             respuesta={error:false, codigo:200, mensaje:'actor actualizado',resultado:peli5.actors[id]}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"El actor",resultado: peli5.actors[id]}
         }
     
     res.send(respuesta)
 }
 );

 app.put("/pelicula/director",

 function(req,res){
     let respuesta;
     
        if(peli5.director!=null){
            
            if(req.body.name!=null){
                peli5.director.name= req.body.name;
            }

            
            if(req.body.genre!=null){
                peli5.director.genre= req.body.genre;
            }
            if(req.body.weight!=null){
                peli5.director.weight= req.body.weight;
            }
            if(req.body.height!=null){
                peli5.director.height= req.body.height;
            }
            if(req.body.hairColor!=null){
                peli5.director.hairColor= req.body.hairColor;
            }
            if(req.body.eyeColor!=null){
                peli5.director.eyeColor= req.body.eyeColor;
            }
            if(req.body.race!=null){
                peli5.director.race= req.body.race;
            }
            if(req.body.isRetired!=null){
                peli5.director.isRetired= req.body.isRetired;
            }
            if(req.body.oscarsNumber!=null){
                peli5.director.name= req.body.oscarsNumber;
            }
            if(req.body.profession!=null){
                peli5.director.name= req.body.profession;
            }
            if(req.body.foto!=null){
                peli5.director.foto= req.body.foto;
            }      
 
             respuesta={error:false, codigo:200, mensaje:'director actualizado',resultado:peli5.director}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"director nulo",resultado: peli5.director}
         }
     
     res.send(respuesta)
 }
 );

 app.put("/pelicula/guionista",

 function(req,res){
     let respuesta;
     
        if(peli5.guionista!=null){
            
            if(req.body.name!=null){
                peli5.guionista.name= req.body.name;
            }

            
            if(req.body.genre!=null){
                peli5.guionista.genre= req.body.genre;
            }
            if(req.body.weight!=null){
                peli5.guionista.weight= req.body.weight;
            }
            if(req.body.height!=null){
                peli5.guionista.height= req.body.height;
            }
            if(req.body.hairColor!=null){
                peli5.guionista.hairColor= req.body.hairColor;
            }
            if(req.body.eyeColor!=null){
                peli5.guionista.eyeColor= req.body.eyeColor;
            }
            if(req.body.race!=null){
                peli5.guionista.race= req.body.race;
            }
            if(req.body.isRetired!=null){
                peli5.guionista.isRetired= req.body.isRetired;
            }
            if(req.body.oscarsNumber!=null){
                peli5.guionista.name= req.body.oscarsNumber;
            }
            if(req.body.profession!=null){
                peli5.guionista.name= req.body.profession;
            }
            if(req.body.foto!=null){
                peli5.guionista.foto= req.body.foto;
            }      
 
             respuesta={error:false, codigo:200, mensaje:'guionista actualizado',resultado:peli5.guionista}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"guionista nulo",resultado: peli5.guionista}
         }
     
     res.send(respuesta)
 }
 );

 app.delete("/pelicula",

 function(req,res){
     let respuesta;
     
         if(peli5!=null){
             peli5=null
             respuesta={error:false, codigo:200, mensaje:'Pelicula borrada'}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"La pelicula no existe"}
         }
     
     res.send(respuesta)
 }
 );
 app.delete("/pelicula/director",

 function(req,res){
     let respuesta;
     
         if(peli5.director!=null){
             peli5.director=null
             respuesta={error:false, codigo:200, mensaje:'Director borrado'}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"El director no existe"}
         }
     
     res.send(respuesta)
 }
 );

 app.delete("/pelicula/guionista",

 function(req,res){
     let respuesta;
     
         if(peli5.guionista!=null){
             peli5.guionista=null
             respuesta={error:false, codigo:200, mensaje:'Guionista borrado'}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"El guionista no existe"}
         }
     
     res.send(respuesta)
 }
 );

 app.delete("/pelicula/actor",

 function(req,res){
     let respuesta;
     let id = req.body.id;
         if(peli5.actors[id]!=null){
             peli5.actors.splice([id],1)
             
 
             respuesta={error:false, codigo:200, mensaje:'Actor borrado'}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"El actor no existe"}
         }
     
     res.send(respuesta)
 }
 );
 



app.listen(3000);
module.exports={Movie}
