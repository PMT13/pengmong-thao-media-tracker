import {Component, Input, OnInit} from '@angular/core';
import {IMedia} from "../Interfaces/IMedia";
import {DataService} from "../data.service";
import {Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-media-content',
  templateUrl: './media-content.component.html',
  styleUrls: ['./media-content.component.css']
})
export class MediaContentComponent implements OnInit {

  @Input() media!: IMedia;
  sub: Subscription;
  mediaList: IMedia[] = [];
  name!:string;
  year!: number;
  typeOfMedia!: string;
  description!: string;
  picURL!: string;
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
    this.name = this.media.mediaInfo.name;
    this.year = this.media.mediaInfo.year;
    this.typeOfMedia = this.media.type;
    this.description = this.media.mediaInfo.description;
    this.picURL = this.media.mediaInfo.picture;
  }

  open(content:any) {
    this.modalService.open(content);
  }

  edit(){
    this.mediaList = this.mediaList.filter(media => media.id !== this.media.id);
    const mediaCopy = {
      type:this.typeOfMedia,
      mediaInfo: {
        year: this.year,
        name: this.name,
        description: this.description,
        picture: this.picURL
      },
      id: this.media.id
    };
    this.mediaList.unshift(mediaCopy);
    this.data.updateList(this.mediaList);
    this.modalService.dismissAll();
  }

  delete(){
    this.mediaList = this.mediaList.filter(media => media.id !== this.media.id);
    this.data.updateList(this.mediaList);
  }

}
