import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ResumeUploadComponent } from './components/resume-upload/resume-upload.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';
import { ResultComponent } from './components/result/result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ResumeUploadComponent,
    JobDescriptionComponent,
    ResultComponent,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  resumeText = '';
  jobDescription = '';
  analysisResult: any;
  loading = false;
  darkMode = false;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  onResumeParsed(text: string) {
    this.resumeText = text;
  }

  onJobDescriptionChanged(text: string) {
    this.jobDescription = text;
  }

  analyze() {
    if (!this.resumeText && !this.jobDescription) {
      return this.toast('Upload resume and add job description');
    }
    if (!this.resumeText) {
      return this.toast('Please upload your resume');
    }
    if (!this.jobDescription) {
      return this.toast('Please add job description');
    }

    this.loading = true;

    this.http
      .post<any>('http://localhost:3000/analysis', {
        resumeText: this.resumeText,
        jobDescription: this.jobDescription,
      })
      .subscribe({
        next: (res) => {
          console.log('Response after analysis', res)
          this.analysisResult = res;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.toast('Analysis failed');
        },
      });
  }

  toast(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }
}
