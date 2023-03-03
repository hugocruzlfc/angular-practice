import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  @Input() color!: string;
  @Input() label!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes:', changes);
  }

  ngOnInit(): void {
    console.log('On Init');
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  counterRender(): boolean {
    console.log('Render button');
    return true;
  }
}
