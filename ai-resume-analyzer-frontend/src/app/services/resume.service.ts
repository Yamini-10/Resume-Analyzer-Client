import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private API = 'http://localhost:3000/resume';

  constructor(private http: HttpClient) {}

  uploadResume(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.API}/upload`, formData);
  }
}
