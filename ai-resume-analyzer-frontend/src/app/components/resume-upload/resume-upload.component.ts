import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resume-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-upload.component.html',
})
export class ResumeUploadComponent {
  @Output() resumeParsed = new EventEmitter<string>();
  uploaded = false;

  constructor(private http: HttpClient) { }
  upload(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    this.http
      .post<any>('http://localhost:3000/resume/upload', formData)
      .subscribe(res => {
        this.uploaded = true;
        this.resumeParsed.emit(res.text);
      });
  }
}
