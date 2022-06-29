import { ChangeDetectionStrategy, Component
  , Inject, OnInit } from '@angular/core';
  import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public message: string) {}

  ngOnInit(): void {
  }

}
