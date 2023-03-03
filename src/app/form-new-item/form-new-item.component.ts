import { City } from '../types/City';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent implements AfterViewInit {
  @Input() label!: string;
  @Input() selection!: City;
  // @Input() className: string = 'btn-primary';
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();
  @ViewChild('newItem') newItem!: ElementRef; // se debe usar cuando el elemento se ha creado

  ngAfterViewInit(): void {
    console.log(this.newItem);
    this.newItem.nativeElement.focus();
  }

  onAddNewItem(): void {
    this.newItemEvent.emit(this.newItem.nativeElement.value);
    this.onClear();
  }

  // onAddNewItem(item: string): void {
  //   this.newItemEvent.emit(item);
  // }

  onUpdateItem(): void {
    const city: City = {
      _id: this.selection._id,
      name: this.newItem.nativeElement.value,
    };
    this.updateItemEvent.emit(city);
    this.onClear();
  }
  // onUpdateItem(item: City, change: string): void {
  //   const city: City = {
  //     _id: item._id,
  //     name: change,
  //   };
  //   this.updateItemEvent.emit(city);
  // }

  counterRender(): boolean {
    console.log('Render form');
    return true;
  }

  private onClear(): void {
    this.newItem.nativeElement.value = '';
  }
}
