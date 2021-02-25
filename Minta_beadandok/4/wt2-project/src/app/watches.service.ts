import {Injectable} from '@angular/core';
import {Watch} from "./watch";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WatchesService {
  watches: Watch[] = [];
  url: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  listWatches(): Observable<Watch[]> {
    return this.http.get<Watch[]>(this.url + '/watches');
  }

  addWatch(watch: Watch): Observable<Watch> {
    return this.http.post<Watch>(this.url + '/watches', watch);
  }

  updateWatch(watch: Watch): Observable<Watch> {
    return this.http.put<Watch>(this.url + '/watches', watch);
  }

  deleteWatch(watch: Watch): Observable<Watch> {
    return this.http.delete<Watch>(this.url + '/watches/' + watch._id);
  }
}
