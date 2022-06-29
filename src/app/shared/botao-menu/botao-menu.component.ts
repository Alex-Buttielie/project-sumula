import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-menu',
  templateUrl: './botao-menu.component.html',
  styleUrls: ['./botao-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotaoMenuComponent implements OnInit {

  @Input() labelButton:any;

  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickEventButton(): void {
    this.clickEvent.emit();
  }

}
