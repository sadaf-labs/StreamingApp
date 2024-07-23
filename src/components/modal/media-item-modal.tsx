import React from 'react';
import { Modal } from 'react-bootstrap';
import './media-item-modal.scss';
import { IMediaItemModalProps } from './media-item-interface';

const MediaItemModal: React.FC<IMediaItemModalProps> = ({ show, handleClose, title, videoUrl }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="media-item-modal">
      <Modal.Header closeButton className="media-item-modal-header">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="media-item-modal-body">
        <div className="video-responsive">
          <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MediaItemModal;
