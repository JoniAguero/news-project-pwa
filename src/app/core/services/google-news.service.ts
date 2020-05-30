import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs/";
import { apiKeyGoogleNews } from "../../../../google-api";

@Injectable({
  providedIn: 'root'
})
export class GoogleNewsService {

  private url = `http://newsapi.org/v2/top-headlines?`;

  constructor(private http: HttpClient) {}

  getGoogleNewsEnglish(search?) {
    let apiUrl = ``;
    if(search){
      apiUrl = `${this.url}q=${search}&language=en&apiKey=${apiKeyGoogleNews}`
    } else {
      apiUrl = `${this.url}language=en&apiKey=${apiKeyGoogleNews}`
    }
    return this.http.get(`${apiUrl}`).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  getGoogleSpanish(search?) {
    let apiUrl = ``;
    if(search){
      apiUrl = `${this.url}q=${search}&language=es&apiKey=${apiKeyGoogleNews}`
    } else {
      apiUrl = `${this.url}language=es&apiKey=${apiKeyGoogleNews}`
    }
    return this.http.get(`${apiUrl}`).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
