import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient) {}
  title = 'postmethod';
  onSubmit(data:any){
     
     this.http.post('http://localhost:3000/postserver',data)
     .subscribe((result)=>{
       console.log("result",result)
   })
   console.log(data);
}
}

