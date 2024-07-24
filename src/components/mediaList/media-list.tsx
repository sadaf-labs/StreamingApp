import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MediaItem from '../mediaItem/media-item';
import './media-list.scss';
import { responsive } from './media-list.helper';
import { labels } from '../../utils/constant';
import { CustomLeftArrow, CustomRightArrow } from '../carouselArrows/customArrows';
import { IMedia } from './media-list.interface';
import { container } from '../../service/api/media/media-container';
import { IMediaProvider } from '../../service/api/media/media-interface';
import { TYPES } from '../../service/api/media/types';

const apiMediaCollectionProvider = container.getNamed<IMediaProvider>(TYPES.MediaProvider, 'api');
const jsonMediaCollectionProvider = container.getNamed<IMediaProvider>(TYPES.MediaProvider, 'json');


const MediaList: React.FC = () => {
  const [mediaCollection, setMediaCollection] = useState<IMedia[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const mediaCollection = await apiMediaCollectionProvider.fetchMedia();
        setMediaCollection(mediaCollection);
      } catch (err) {
        try {
          const mediaCollection = await jsonMediaCollectionProvider.fetchMedia();
          setMediaCollection(mediaCollection);
        }
        catch (err) {
          console.error('Error in fetchMediaCollection', err);
          setError(labels.FAILED_TO_FETCH_ITEMS)
        }
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div>{labels.LOADING}</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="media-list-container">
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        showDots
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        containerClass="carousel-container"
        itemClass="media-list-container_react-multi-carousel-item"
      >
        {mediaCollection.map(media => (
          <div key={media.id} className="media-list-container_media-item-wrapper">
            <MediaItem item={media} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MediaList;
