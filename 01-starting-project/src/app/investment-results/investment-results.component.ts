import { InvestmentService } from './investment.service';
import { Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultsData());
}