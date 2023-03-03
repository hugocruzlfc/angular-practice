import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { City } from '../types/City';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent {
  @Input() city!: City;
  @Input() selection!: City;
  @Output() citySelectedEvent = new EventEmitter<City>();
  @Output() cityDeleteEvent = new EventEmitter<string>();

  onCitySelected(city: City): void {
    this.citySelectedEvent.emit(city);
  }

  counterRender(): boolean {
    console.log('Render button');
    return true;
  }

  onCityDelete(id: string): void {
    this.cityDeleteEvent.emit(id);
  }
}
