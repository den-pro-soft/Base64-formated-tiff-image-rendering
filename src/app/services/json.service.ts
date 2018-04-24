import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JsonService {

  constructor(private http : HttpClient) { }

  url = 'assets/data.json';

  load_json(){
      return this.http.get(this.url);
  }
}
