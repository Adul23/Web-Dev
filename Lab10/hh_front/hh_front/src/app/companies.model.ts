import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Companies {

  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}
export interface Vacancies {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: Companies;
    
}
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private apiUrl = 'http://localhost:8000/api/companies/';
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Companies[]> {
    return this.http.get<Companies[]>(this.apiUrl);
  }
}
@Injectable({
  providedIn: 'root'
})
export class VacanciesService{
  private apiUrl = 'http://localhost:8000/api/companies/';
  constructor(private http: HttpClient) {}

  getVacancies(c: Companies): Observable<Vacancies[]> {
    return this.http.get<Vacancies[]>(this.apiUrl + c.id + "/vacancies/");
  } 
}
