import React, { useState, lazy, Suspense } from 'react';
import { Card } from 'react-bootstrap';
import { IMediaItemProps } from './media-item.interface';
import { labels } from '../../utils/constant';
import { IsNewMedia, mediaURL } from './media-item.helper';
import './media-item.scss';

const VideoModal = lazy(() => import('../modal/media-item-modal'));

const MediaItem: React.FC<IMediaItemProps> = React.memo(({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleMouseEnter = () => setShowPreview(true);
  const handleMouseLeave = () => setShowPreview(false);

  return (
    <>
      <Card
        onClick={handleShowModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-dark text-white cursor-pointer media-item"
      >
        <Card.Img src={item.thumbnail_vertical} alt={item.title} />
        <Card.Title>{item.title}</Card.Title>

        {IsNewMedia(item?.release_year) && (
          <div className="new-badge">New</div>
        )}

        <Card.ImgOverlay className="media-item-overlay">
          {showPreview && (
            <div className="media-item-preview">
              <p className="rating">Rating: {item.rating}</p>
              <p className="duration">Duration: {item.duration_minutes} mins</p>
              <p className="genre">Genre: {item.genre.join(', ')}</p>
            </div>
          )}
        </Card.ImgOverlay>
      </Card>

      <Suspense fallback={<div>{labels.LOADING}</div>}>
        <VideoModal show={showModal} handleClose={handleCloseModal} title={item.title} videoUrl={mediaURL} />
      </Suspense>
    </>
  );
});

export default MediaItem;
