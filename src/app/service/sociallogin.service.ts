import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
url;
  constructor(private http:HttpClient) { }

  Savesresponse(response:any)
  {
    debugger;
    this.url='http://localhost:8080/api/hobbies';
    return this.http.post(this.url,response);
  }
}
