import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='http://localhost:4000'
  url2='http://localhost:4000/get3'
  constructor(private http:HttpClient) { }
  getabout(){
    return this.http.get(this.url+'/get')
  }
  getcontact(){
    return this.http.get(this.url+'/get1')
  }
  getabou(id:any){
    return this.http.get(this.url2+id)
  }
}
