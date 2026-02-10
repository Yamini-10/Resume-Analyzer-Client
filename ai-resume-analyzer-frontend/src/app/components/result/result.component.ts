import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './result.component.html',
})
export class ResultComponent {
  @Input() result: any;

  get statusClass() {
    if (!this.result) return '';
    return this.result.status === 'Excellent'
      ? 'excellent'
      : this.result.status === 'Good'
        ? 'good'
        : 'poor';
  }
}
