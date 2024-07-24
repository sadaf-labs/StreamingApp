import { Container } from 'inversify';
import { RemoteMediaProvider, LocalMediaProvider } from './media-provider';
import { TYPES } from './types';
import { IMediaProvider } from './media-interface';

const container = new Container();
container.bind<IMediaProvider>(TYPES.MediaProvider).to(RemoteMediaProvider).whenTargetNamed('api');
container.bind<IMediaProvider>(TYPES.MediaProvider).to(LocalMediaProvider).whenTargetNamed('json');

export { container };
