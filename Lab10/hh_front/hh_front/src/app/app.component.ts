import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {Companies, CompaniesService, Vacancies, VacanciesService} from './companies.model'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private companyService: CompaniesService, private vacancyService: VacanciesService){};
  companies: Companies[] = [];
  title = 'hh_front';
  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data =>
    { 
      this.companies = data;

    }
    ));
  }
  public vacancies: Vacancies[] = [];
  selectedCompany: Companies | null = null;

  selectCompany(company: Companies) {
    this.selectedCompany = company;
    this.vacancyService.getVacancies(this.selectedCompany).subscribe((data: Vacancies[]) => {
      
      this.vacancies = data;
    });
    
  }


}
