import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summary } from '../Modals/Summary';
import { Observable } from 'rxjs';
import { Blog } from '../Modals/blog';
import { List } from '../Modals/list';



@Injectable({
  providedIn: 'root'
})
export class SummaryService {
private path:string="http://localhost:3000/summary"
private dath:string="http://localhost:3000/blog"
private lasth:string="http://localhost:3000/list"
private category:string="http://localhost:3000/categories"

constructor(private http:HttpClient) { }

  GetSummary():Observable<Summary[]>{
    return this.http.get<Summary[]>(this.path);
  }

  GetBlog():Observable<Blog[]>{
    return this.http.get<Blog[]>(this.dath)
  }

  GetList():Observable<List[]>{
    return this.http.get<List[]>(this.lasth)
  }

 

}
