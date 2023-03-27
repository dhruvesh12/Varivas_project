import { AllServicesService } from './../../services/all-services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  ModelStatus: boolean = false

  AllData: any[] = []

  SelectedMovie: any = {}

  constructor(private Service: AllServicesService) { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.AllData=this.Service.AllData
    }, 200);
    



  }

  openClose() {
    if (this.ModelStatus == false) {
      this.ModelStatus = true
    } else {
      this.ModelStatus = false
    }

    
  }






  getPopularMovie() {

    // this.Service.getPopularMovie().subscribe(response=>{
    //   let data = JSON.parse(JSON.stringify(response)).details
    //   console.log(data)
    //   this.AllData=data
    // })

    // this.Service.getAllMovie().subscribe(response => {

    //   let data = JSON.parse(JSON.stringify(response))

    //   for (let i of data.results) {
    //     this.Service.getMovieTrailer(i.id).subscribe(response => {
    //       let data2 = JSON.parse(JSON.stringify(response)).results
    //       let filtered = data2.filter((x: any) => {
    //         return x.type == 'Trailer'
    //       })
          

    //       i.link = filtered[0].key



    //     })

       

    //     this.Service.getMovieDetail(i.id).subscribe(response => {
    //       let data3 = JSON.parse(JSON.stringify(response))
    //       var genres:any=[]
    //       // console.log(data3)
    //       for(let j of data3.genres){
    //         genres.push(j.name)
    //       }
    //       i.runtime = data3.runtime
    //       i.genres = genres
    //       //console.log(response)
    //     })
    //   }

    //   this.AllData = data.results
    //   setTimeout(() => {
    //     this.Service.postMovie(this.AllData)
    //     console.log(this.AllData)
    //   }, 1000);
      
      
    // })
  }


  // submit(){
  //   this.Service.postMovie(this.AllData)
  // }

}
