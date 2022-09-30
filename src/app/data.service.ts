import { Injectable } from '@angular/core';
import {IMedia} from "./Interfaces/IMedia";
import {Subject} from "rxjs";
import {IMovie} from "./Interfaces/IMovie";
import {IBook} from "./Interfaces/IBook";
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private mediaList: IMedia[] = [
    {
      type: "Movie",
      mediaInfo: {
        name: "Despicable Me",
        description: "Supervillain Gru, a man who delights in all things wicked, " +
          "hatches a plan to steal the moon. Surrounded by an army of little yellow " +
          "minions and his impenetrable arsenal of weapons and war machines, Gru prepares " +
          "to vanquish all who stand in his way. However, nothing in his calculations and " +
          "groundwork has prepared him for his greatest challenge: " +
          "three adorable orphan girls who want to make him their dad.",
        picture: "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_.jpg",
        year: 2010
      },
      id: uuidv4()
    },
    {
      type: "Movie",
      mediaInfo: {
        name: "Spirited Away",
        description: "Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover " +
          "an abandoned amusement park on the way to their new house. " + "Cautiously venturing inside, she realizes that there is " +
          "more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food " +
          "that turns her " + "parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now " +
          "trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of " +
          "unique characters she meets along the way." + "Vivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of " +
          "Chihiro's journey through an unfamiliar world as she strives to save her parents and return home.",
        picture: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        year: 2001
      },
      id: uuidv4()
    },
    {
      type:"Movie",
      mediaInfo: {
        name: "Avengers",
        description: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube " +
          "called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort" +
          " to defeat the unprecedented threat to Earth. Joining Fury's \"dream team\" are Iron Man (Robert Downey Jr.), " +
          "Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) " +
          "and Hawkeye (Jeremy Renner).",
        picture: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-avengers-2012/large_cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
        year: 2012
      },
      id: uuidv4()
    }
    ];
  $mediaList: Subject<IMedia[]> = new Subject<IMedia[]>();
  constructor() { }

  getMediaList(){
    return this.mediaList;
  }
  addToList(media: IMedia){
    this.mediaList.unshift(media);
    this.$mediaList.next(this.mediaList);
  }
  updateList(mediaList:IMedia[]){
    this.mediaList = mediaList;
    this.$mediaList.next(this.mediaList);
  }
}
