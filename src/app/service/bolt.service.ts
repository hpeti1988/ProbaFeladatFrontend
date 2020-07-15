import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bolt } from '../models/bolt';

@Injectable({
  providedIn: 'root'
})
export class BoltService {

  constructor(private http: HttpClient) { }

  getBoltById(id: number) {
    return this.http.get<any>(`http://localhost:8080/api/bolt/${id}`);
  }

  getAllBolt() {
    return this.http.get<any>(`http://localhost:8080/api/bolt`)
  }

  createBolt(bolt: Bolt) {
    return this.http.post(`http://localhost:8080/api/bolt`, bolt)
  }

  updateBolt(id:number, bolt:Bolt) {
    return this.http.put(`http://localhost:8080/api/bolt/${id}`, bolt)
  }

  deleteBolt(id: number) {
    return this.http.delete(`http://localhost:8080/api/bolt/${id}`)
  }

  exportBolt() {
    return this.http.get<any>(`http://localhost:8080/api/bolt/export`)
  }
}
