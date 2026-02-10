import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-description',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-description.component.html',
})
export class JobDescriptionComponent {
  jobDescription = '';
  @Output() jobDescriptionChange = new EventEmitter<string>();

  emitJD() {
    this.jobDescriptionChange.emit(this.jobDescription);
  }
}
