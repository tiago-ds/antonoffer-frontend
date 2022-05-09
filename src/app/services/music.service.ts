import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  baseUrl: string;

  constructor() {
      this.baseUrl = "http://localhost:8000/";
  }

  async sendFile(file: File, name: string): Promise<void>{
      var config = {
        method: 'post',
        url: `${this.baseUrl}/files/${file.name}`,
        headers: { 
         'Content-Type': 'audio/mpeg'
        },
        data : file
      };

      var fileName = file.name.slice(0, -4);
      await axios(config);
      
      var config2 = {
        method: 'get',
        url: `${this.baseUrl}/kpopify/${fileName}/${name}`,
        headers: { }
      };
      
      axios(config2);
  }
}
