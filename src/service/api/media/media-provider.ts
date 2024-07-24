import { injectable } from 'inversify';
import { IMedia } from '../../../components/mediaList/media-list.interface';
import { fetchMediaCollection } from './media-remote-provider';
import { fetchMediaFromJson } from './media-local-provider';
import { IMediaProvider } from './media-interface';


@injectable()
export class RemoteMediaProvider implements IMediaProvider {
  async fetchMedia(): Promise<IMedia[]> {
    const response = await fetchMediaCollection()
    return response;
  }
}

@injectable()
export class LocalMediaProvider implements IMediaProvider {
  async fetchMedia(): Promise<IMedia[]> {
    const response = await fetchMediaFromJson();
    return response
  }
}
