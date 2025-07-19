import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  //upload Person data
  postPerson(person: any): Observable<any> {
    return this.http.post(BASIC_URL + "/person", person);
  }

  //fetch all data
  getAllPerson():Observable<any> {
    return this.http.get(BASIC_URL+"/person")    
  }

  //get data by Id
  getPersonById(id: string): Observable<any> {
    return this.http.get(`${BASIC_URL}/person/${id}`);
  }

  //update data on behalf of ID
  updatePersonById(id: string, person: any): Observable<any>{
    return this.http.put(`${BASIC_URL}/person/${id}`,person);
  }

  //delete  Person data by Id
  deletePerson(id: String): Observable<any>{
    return this.http.delete(`${BASIC_URL}/person/${id}`, { responseType: 'text' });
  }

}
