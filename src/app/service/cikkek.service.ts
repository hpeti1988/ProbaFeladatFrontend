import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cikkek } from '../models/cikkek';

@Injectable({
  providedIn: 'root'
})
export class CikkekService {

  constructor(private http: HttpClient) { }

  getAllCikk() {
    return this.http.get<any>(`http://localhost:8080/api/cikkek`)
  }

  getCikkById(id: number) {
    return this.http.get<any>(`http://localhost:8080/api/cikkek/${id}`)
  }

  createCikk(cikk: Cikkek) {
    return this.http.post(`http://localhost:8080/api/cikkek`, cikk)
  }

  updateCikk(id: number, cikk: Cikkek) {
    return this.http.put(`http://localhost:8080/api/cikkek/${id}`, cikk)
  } 

  deleteCikk(id: number) {
    return this.http.delete(`http:localhost:8080/api/cikkek/${id}`)
  }

  exportCikk() {
    return this.http.get<any>(`http://localhost:8080/api/cikk/export`)
  }
}
