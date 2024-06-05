import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,HttpClientModule, CommonModule], //It is mandatory to import Httpclient module in the app.component.ts file otherwise the html will not display on the page
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  readonly APIUrl = "http://localhost:5038/api/todoapp/"

  constructor( private http:HttpClient){

  }
  notes:any=[]

  refreshNotes()
  {
    this.http.get(this.APIUrl+"getnotes").subscribe(data=>{
      
      this.notes=data
      console.log("data",data)
    
      
    })
  }

  ngOnInit()
  {
    this.refreshNotes()
    console.log("API retrieved")
   }

  addNotes(){
    var newNotes=(<HTMLInputElement>document.getElementById("newNotes")).value;
    var formData=new FormData()
    formData.append("newNotes",newNotes)
    this.http.post(this.APIUrl+'addnotes',formData).subscribe(data=>{
      alert(data);
      console.log('working')
      this.refreshNotes()
    })
  }

  deleteNotes(id:any){
    this.http.delete(this.APIUrl+'Deletenotes?id='+id).subscribe(data=>{
      console.log('deleting?')
      alert(data);
      this.refreshNotes()
    })
  }
}
