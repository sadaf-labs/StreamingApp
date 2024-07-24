import { IMedia } from "../../../components/mediaList/media-list.interface";

export interface IMediaProvider {
  fetchMedia(): Promise<IMedia[]>;
}
