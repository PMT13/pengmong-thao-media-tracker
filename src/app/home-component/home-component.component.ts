import { Component, OnInit } from '@angular/core';
import {IMedia} from "../Interfaces/IMedia";
import {Subscription} from "rxjs";
import {DataService} from "../data.service";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  sub: Subscription;
  mediaList: IMedia[] = [];
  constructor(private data: DataService) {
    this.sub = this.data.$mediaList.subscribe((mediaList) => {
      this.mediaList = mediaList;
    });
  }

  ngOnInit(): void {
    this.mediaList = this.data.getMediaList();
  }

}
