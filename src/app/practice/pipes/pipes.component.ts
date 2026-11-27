import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipePipe } from './custom-pipe.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,CurrencyPipe,DecimalPipe,
  PercentPipe,DatePipe,CustomPipePipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  employeeName='harshini angular developer';

  today=new Date();

  apiDate = '2026-11-25T14:30:00';

  myName='Angular Developer'
}
