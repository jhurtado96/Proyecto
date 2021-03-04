const {Professional} = require('./professionalAPI.js');

class Movie {

    constructor (title, releaseYear,nationality, genre, foto)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.foto = foto
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

peli1.actors = [pro1,pro2]

const express = require("express");
 
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
            res.send(respuesta); 
        
        }
        
    }

);
app.get("/pelicula/actor",
    function (req,res) 
    {
        let respuesta;
        
        if(peli1.actors!=null)        
        {
            respuesta=peli1.actors
        }else{
            respuesta={error:false, codigo:200, mensaje:'Pelicula nula',resultado:peli1}
            
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
                            )
                        
                    
                    respuesta={error:false, codigo:200, mensaje:'Usuario creado',resultado:peli5}
                    
                }else{
                    respuesta = {error: true, codigo: 200, mensaje:"El usuario ya existe",resultado:peli5}
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
            
 
             respuesta={error:false, codigo:200, mensaje:'Peli actualizada',resultado:peli5}
 
         }else{
             respuesta = {error: true, codigo: 200, mensaje:"No existe la pelicula",resultado: peli5}
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


app.listen(3001);

