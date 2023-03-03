import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { City } from '../types/City';

const iniCity: City = {
  _id: '',
  name: '',
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly citiesUrl = environment.api;
  private city$ = new BehaviorSubject<City>(iniCity);

  constructor(private readonly httpClient: HttpClient) {}

  addNewCity(name: string): Observable<City> {
    const body = { name };
    return this.httpClient.post<City>(this.citiesUrl, body);
  }

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.citiesUrl);
  }
  updateCity(city: City): Observable<void> {
    const body = { name: city.name };
    return this.httpClient.put<void>(`${this.citiesUrl}/${city._id}`, body);
  }
  deleteCity(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.citiesUrl}/${id}`);
  }

  get selectedCity$(): Observable<City> {
    return this.city$.asObservable();
  }

  setCity(city: City): void {
    this.city$.next(city);
  }
}
