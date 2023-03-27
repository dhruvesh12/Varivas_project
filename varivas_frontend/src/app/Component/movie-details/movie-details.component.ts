import { AllServicesService } from './../../services/all-services.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {DomSanitizer } from '@angular/platform-browser'


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  id: any

  selectedMovie:any={
    link:''
  }

  constructor(private route: ActivatedRoute, private service: AllServicesService,private sanitizer:DomSanitizer ) { }

  ngOnInit() {

    window.location.hash = '#video';
    this.route.params.subscribe(paramsId => {
      this.id = paramsId['id'];
      
    });

    this.getAllMovie()
  }

  getUrl()
{
  return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.selectedMovie[0].link+'?&controls=0&showinfo=0&showsearch=0&rel=1&iv_load_policy=3&cc_load_policy=1&autoplay=1&loop=1&fs=0&modestbranding=0');
}

  getAllMovie() {
    this.service.getPopularMovie().subscribe(response=>{
      let data = JSON.parse(JSON.stringify(response)).details

      this.selectedMovie = data.filter((x:any)=>{
        return x.title == this.id
      })

     
    })
  }
}
