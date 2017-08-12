import { Component, NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
  <div class="card card-block">
    <ng-container *ngFor="let item of data">
      <h4 class="card-title">{{item.Name}}</h4>
      <hr />
      <p class="card-text">{{item.Height}} x {{item.Height}} {{item.Medium}}</p>
      <img src="{{baseUrl}}{{item.Photo}}" >
    </ng-container>
  </div>
`
})
export class AppComponent {
  title = 'Marcus Bowcott';
  //private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private apiUrl = 'http://localhost:52682/api/artworksAPI';
  private baseUrl = 'http://localhost:52682';
  data: any = [{title:"Loading ..."}];
  items = [1,2,3,4,5,6,6];

  constructor( private http: Http){
    console.log('Constructor AppComponent');
    this.getPhotos();
    // this.getData();
  }
  getData(){
    console.log('getData');
    return this.http.get(this.apiUrl).map(res => res.json());
  }

  getPhotos(){
    console.log('getPhotos');
    this.getData().subscribe(data => {
      console.log("__data__");
      console.log(data);
      this.data = data;
    })
  }
}
