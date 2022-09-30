import {IBook} from "./IBook";
import {IMovie} from "./IMovie";

export interface IMedia{
  type: string,
  mediaInfo: IMovie | IBook,
  id: string
}
