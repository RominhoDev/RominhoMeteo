import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ville } from '../ville';
import { token } from '../token';

@Injectable({
  providedIn: 'root'
})
export class ServiceBulletinService {

  constructor(private httpClient : HttpClient) { }

  public rechercherBulletin(v: Ville): Observable<any> {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather' + 
      '?lat=' + v.latitude + 
      '&lon=' + v.longitude + 
      '&appid=' + token +
      '&units=metric' +
      '&lang=fr')
  }

  public rechercherVille(nomVille: string): Observable<any> {
    return this.httpClient.get('http://api.openweathermap.org/geo/1.0/direct' + 
      '?q=' + nomVille +
      '&limit=1' +
      '&appid=' + token)
  }
}
