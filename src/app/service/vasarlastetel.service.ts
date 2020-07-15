import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VasarlasTetel } from '../models/vasarlasTetel';

@Injectable({
  providedIn: 'root'
})
export class VasarlastetelService {

  constructor(private http: HttpClient) { }

  getAllVasarlasTetel() {
    return this.http.get<any>(`http://localhost:8080/api/vasarlasTetel`)
  }

  getVasarlasTetelById(id: number) {
    return this.http.get<any>(`http://localhost:8080/api/vasarlasTetel/${id}`)
  }

  createVasarlasTetel(vasarlasId: number, vasarlasTetel: VasarlasTetel, cikkId: number) {
    return this.http.post(`http://localhost:8080/api/vasarlas/${vasarlasId}/vasarlasTetel/${cikkId}`, vasarlasTetel)
  }

  updateVasarlasTetel(id: number, vasarlasTetel: VasarlasTetel) {
    return this.http.put(`http://localhost:8080/api/vasarlasTetel/${id}`, vasarlasTetel)
  }

  getVasarlasTetelByVasarlasId(id: number) {
    return this.http.get<any>(`http://localhost:8080/api/vasarlasTetelById/${id}`)
  }

  deleteVasarlasTetelById(id: number) {
    return this.http.delete<any>(`http://localhost:8080/api/vasarlasTetel/${id}`)
  }

  exportVasarlasTetel() {
    return this.http.get<any>(`http://localhost:8080/api/vasarlasTetel/export`)
  }
}
