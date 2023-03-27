import { Component } from '@angular/core';
import { AllServicesService } from './services/all-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'varivas_frontend';


  constructor(private Service: AllServicesService) { }


  ngOnInit(): void {
    this.Service.getPopularMovies()
    



  }
}
