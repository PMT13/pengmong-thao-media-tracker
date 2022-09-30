import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {IMedia} from "../Interfaces/IMedia";
import {DataService} from "../data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit {

  sub: Subscription;
  mediaList: IMedia[] = [];
  name: string = "";
  picURL: string = "";
  typeOfMedia: string = "";
  description: string = "";
  year: number = new Date().getFullYear();

  constructor(private data: DataService,private modalService: NgbModal) {
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

  open(content:any) {
    this.modalService.open(content);
  }

  addToList(){
    this.data.addToList({
      type:this.typeOfMedia,
      mediaInfo: {
        year: this.year,
        name: this.name,
        description: this.description,
        picture: this.picURL
      },
      id: uuidv4()
    });
    this.modalService.dismissAll();
  }
  resetInput(){
    this.name = "";
    this.picURL = "";
    this.typeOfMedia = "";
    this.description = "";
    this.year = new Date().getFullYear();
  }
}
