import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  api:string='55e142e9c2c6c33fbf1e57af703ddf4e'

  AllData:any[]=[]

  constructor(private http : HttpClient) { }


  getPopularMovies() {

    this.getPopularMovie().subscribe(response=>{
      let data = JSON.parse(JSON.stringify(response)).details
      console.log(data)
      this.AllData=data
    })

  }


  getAllMovie(){
    return this.http.get('https://api.themoviedb.org/4/list/3?api_key='+this.api)
  }
  
  getMovieTrailer(id:any){

    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key='+this.api)

  }

  getMovieDetail(id:any){

    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.api)

  }


  postMovie(Data:any){
    this.http.post('http://localhost:3000/postMovie',Data).subscribe(response=>{
      console.log(response)
    })
  }


  getPopularMovie(){
    return this.http.get('http://localhost:3000/getMovie')
  }

  
}
