import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {IMedia} from "../Interfaces/IMedia";
import {DataService} from "../data.service";

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

  sub: Subscription;
  mediaList: IMedia[] = [];
  moviesOnly: IMedia[] = [];
  booksOnly: IMedia[] = [];
  constructor(private data: DataService) {
    this.sub = this.data.$mediaList.subscribe((mediaList) => {
      this.mediaList = mediaList;
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.mediaList = this.data.getMediaList();
  }

}
