import { DataService } from './../services/data.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { City } from '../types/City';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'App 1';
  url = 'https://i.blogs.es/9c16f8/chrysler-airflow-concept-1/1366_2000.jpeg';
  name!: string;
  selection!: City;
  criteria!: string;
  @ViewChild(NgModel) filterInput!: NgModel;

  //cities = ['Barcelona', 'Bellingham', 'Buenos Aires'];
  cities: City[] = [];

  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {
    this.filterInput.valueChanges?.subscribe((value) => {
      console.log(value);
      this.currentFilter(value);
    });
  }

  ngOnInit(): void {
    this.dataService.selectedCity$.subscribe(
      (city: City) => (this.selection = city)
    );
    this.dataService.getCities().subscribe((response) => {
      this.cities = [...response];
      console.log(response);
    });
  }

  currentFilter(query: string): void {
    console.log('query: ', query);
  }

  onCitySelected(city: City): void {
    console.log(city);
    // this.selection = city;
    this.dataService.setCity(city);
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: '',
    };
  }

  addNewCity(newCity: string): void {
    // this.cities.push(newCity);
    this.dataService
      .addNewCity(newCity)
      .subscribe((response) => this.cities.push(response));
  }

  onCityDelete(id: string): void {
    if (confirm('Are you sure?')) {
      this.dataService.deleteCity(id).subscribe((response) => {
        const tempArr = this.cities.filter((city) => city._id !== id);
        this.cities = [...tempArr];
        this.onClear();
      });
    }
  }

  updateCity(city: City): void {
    this.dataService.updateCity(city).subscribe((response) => {
      const tempArr = this.cities.filter((item) => city._id !== item._id);
      this.cities = [...tempArr, city];
      this.onClear();
    });
  }
}
