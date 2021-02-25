import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  uri = 'http://localhost:4000/app/';

  constructor(private http: HttpClient) {}
  addCustomer(first_name, last_name, phone_number, ID_Number, zip_code, city_, street, house_number) {
    const obj = {
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      ID_Number: ID_Number,
      address: {
        zip_code: zip_code,
        city_: city_,
        street: street,
        house_number: house_number
      }
    };
    this.http.post(`${this.uri}customerAdd`, obj).subscribe(res => console.log('Done Customer'));
  }

addConnection(first_name, last_name, phone_number, ID_Number) {
  const obj = {
    customer: {
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      ID_Number: ID_Number
    }
  };
  this.http.post(`${this.uri}ConnectionAdd`, obj).subscribe(res => console.log('Done Connection'));
}
  addDVD(title, dateOfGet){
    const obj = {
      title: title,
      dateOfGet: dateOfGet
    };
    this.http.post(`${this.uri}addDVD/`, obj).subscribe(res => console.log('Done'));
  }

  getCustomer(){
    return this.http.get(`${this.uri}getCustomer/`);
  }
  getCustomerById(id){
    return this.http.get(`${this.uri}getCustomer/${id}`);
  }
  getDVD(){
    return this.http.get(`${this.uri}getDVD/`);
  }
  getConnection(){
    return this.http.get(`${this.uri}getConnection`);
  }
  editCustomer(id){
    console.log(id)
    return this.http.get(`${this.uri}editCustomer/${id}`);
  }
  deleteFromConnection(dvdid, connectionID){
    const obj = {
      _id: dvdid
    }
      console.log("2.lépés")
      console.log(connectionID)
    this.http.post(`${this.uri}bringBack/${connectionID}`, obj).subscribe(res => console.log('Done'));
  }
  addDVDtoConnection(DVDid, title, ConnectionID){
    const obj = {
        id: DVDid,
        title: title,
        state: "borrowed"
      }
    console.log(obj);
    console.log(ConnectionID);
    this.http.post(`${this.uri}updateConnectionWithDVD/${ConnectionID}`, obj).subscribe(res => console.log('Done'));
  }

  updateCustomer(first_name, last_name, phone_number, ID_Number, zip_code, city_, street, house_number, id){
    const obj = {
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      ID_Number: ID_Number,
      address:{
        zip_code: zip_code,
        city_: city_,
        street: street,
        house_number: house_number
      }
    };
    this.http.post(`${this.uri}customerUpdate/${id}`, obj).subscribe(
      res => console.log('Done'));
  }

  UpdateConnectionWithCustomer(first_name, last_name, phone_number, ID_Number, id){
    const obj ={
      customer:{
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        ID_Number: ID_Number,
      }
    };
    console.log(id)
    this.http.post(`${this.uri}updateConnectionWithCustomer/${id}`, obj).subscribe(res => console.log('Done'));
  }

  deleteCustomer(id) {
    return this
      .http
      .get(`${this.uri}getCustomer/delete/${id}`);
  }
  deleteConnection(id) {
    return this
      .http
      .get(`${this.uri}getConnection/delete/${id}`);
  }
  updateDVDwithWaste(id) {

    const obj ={
      state: "wasted"
    }
    this.http.post(`${this.uri}getWasted/${id}`, obj).subscribe(res => console.log('Done'));
  }
  updateDVDwithBorrowed(id) {
    console.log(id)
    const obj ={
      state: "borrowed"
    }
    this.http.post(`${this.uri}getBorrowed/${id}`, obj).subscribe(res => console.log('Done'));
  }
  updateDVDwithFree(id) {
    console.log(id)
    const obj ={
      state: "free"
    }
    this.http.post(`${this.uri}getFree/${id}`, obj).subscribe(res => console.log('Done'));
  }

}

