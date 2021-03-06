import {Movie,Comment} from '../mongoose/movie'

export default class ServiceMovie{
       constructor(){

       }

       async createMovie(titulo,imagen,trailer){

           const movie=new Movie({
                    titulo:titulo,
                    imagen:imagen,
                    trailer:trailer,
              })

              await movie.save();
              return "success";
       }

       async getMovies(){
          let result=await Movie.find();
          let pelis=result.map(movie => {
            return{titulo:movie.titulo,imagen:movie.imagen,trailer:movie.trailer,
            comentarios:movie.comentarios}
          })
          return pelis; 
       }

       async search(text){
          const reg= new RegExp(text,"i") // equivalente a /text/i
         try {
              let movies= await Movie.find({titulo: {$regex:reg}})
              
             return movies; 
                    
         } catch (error) {
              return []           
         }
        }

/*        async updateMovie(titulo,imagen,trailer){
           var query = {titulo:titulo} , options = { multi: true };
                Movie.update(query,{imagen:imagen},options,this.callback)

                return "succes"
        }

        callback (err, numAffected) {

         }*/

    async updateMovie(titulo,imagen,trailer){
            Movie.update({titulo:titulo},{imagen:imagen,trailer:trailer},function (err) {
                if (err) return console.error(err);
            })


        return "succes"
    }
        
        async createComment(title,username,text){
           try {
             const comment= new Comment({
                username:username,
                texto:text,
               })
               //(filter,update)
              await Movie.findOneAndUpdate({titulo:title},
               {$push:{comentarios:comment}}) 
              return "se incerto con exito"     
           } catch (error) {
              console.log(error);
           }
        }

        async commentsOfMovie(title){
           const comments=await Movie.findOne({titulo:title});
           return comments;
        }

    async deleteMovie(titulo) {
        Movie.deleteOne({titulo:titulo},function (err) {
            if (err) return console.error(err);
        })
    }

      async getMovie(title){
           const movie = await Movie.findOne({titulo:title})
           return movie
      }

}