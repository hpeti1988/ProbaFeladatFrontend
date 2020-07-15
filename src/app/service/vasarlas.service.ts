import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Vasarlas } from '../models/vasarlas';

@Injectable({
  providedIn: 'root'
})
export class VasarlasService {

  constructor(private http: HttpClient) { }

  getAllVasarlas() {
    return this.http.get<any>(`http://localhost:8080/api/vasarlas`);
  }

  getVasarlasById(id:number) {
    return this.http.get<any>(`http://localhost:8080/api/vasarlas/${id}`);
  }

  createVasarlas(boltId:number, vasarlas:Vasarlas) {
    return this.http.post<any>(`http://localhost:8080/api/bolt/${boltId}/vasarlas`, vasarlas);
  }

  deleteVasarlas(id:number) {
    return this.http.delete<any>(`http://localhost:8080/api/vasarlas/${id}`);
  }

  updateVasarlas(id:number, vasarlas:Vasarlas) {
    return this.http.put(`http://localhost:8080/api/vasarlas/${id}`, vasarlas)
  }

  findAllVasarlas(page: number, size:number) {
    return this.http.get<any>(`http://localhost:8080/api/vasarlas/page?page=${page}&size=${size}`);
  }

  exportVasarlas() {
    return this.http.get<any>(`http://localhost:8080/api/vasarlas/export`)
  }
}
