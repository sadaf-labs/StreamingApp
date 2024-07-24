import { IMedia } from '../../../components/mediaList/media-list.interface';
import data from '../../data/dummyData.json';

export const fetchMediaFromJson = async (): Promise<IMedia[]> => {
  return data.collection;
};