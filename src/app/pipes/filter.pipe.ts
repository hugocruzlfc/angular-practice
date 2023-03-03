import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../types/City';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(cities: City[], arg: string): City[] {
    if (!arg || arg?.length < 3) return cities;
    let result: City[] = [];
    for (const city of cities) {
      if (
        city.name.toLocaleLowerCase().indexOf(arg.toLocaleLowerCase()) !== -1
      ) {
        result = [...result, city];
      }
    }
    return result;
  }
}
