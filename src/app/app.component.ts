import { Component } from '@angular/core';

import { MusicService } from './services/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private musicService: MusicService) {
    this.musicService = musicService
  }

  fileToUpload: File | null = null;

  title = 'styletransfer-criatividade';

  styles = [
    {
      name: "soul",
      selected: true
    },

    {
      name: "kpop",
      selected: false
    },

    {
      name: "edm",
      selected: false
    }
  ];

  selectStyle(name: string): void {
    for (const style of this.styles) {
      if(name === style.name) {
        style.selected = true;
      }else {
        style.selected = false;
      }
    }
  }

  sendFile(): void{
    var genre = this.styles.find(style => style.selected);
    if(this.fileToUpload != null && genre?.name != null)
      this.musicService.sendFile(this.fileToUpload, genre.name);
  }

  processFile(target: any) {
    this.fileToUpload = target?.files?.item(0) ?? null;
  }
}
