import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnalysisService {
  private API = 'http://localhost:3000/analysis';

  constructor(private http: HttpClient) {}

  analyze(resumeText: string, jobDescription: string) {
    return this.http.post(this.API, {
      resumeText,
      jobDescription,
    });
  }
}
