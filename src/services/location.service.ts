import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://ipapi.co/json/';

  constructor(private http: HttpClient) { }

  /**
   * Retourne toutes les infos de localisation :
   * pays, ville, langue, IP, etc.
   */
  getLocation(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  /**
   * Retourne uniquement le pays (FR, US, etc.)
   */
  getCountry(): Observable<string> {
    return new Observable(observer => {
      this.getLocation().subscribe({
        next: (data: any) => {
          observer.next(data.country);
          observer.complete();
        },
        error: err => observer.error(err)
      });
    });
  }

  /**
   * Retourne la langue principale selon l’IP
   */
  getLanguage(): Observable<string> {
    return new Observable(observer => {
      this.getLocation().subscribe({
        next: (data: any) => {
          observer.next(data.languages?.split(',')[0] || 'en');
          observer.complete();
        },
        error: err => observer.error(err)
      });
    });
  }
}
