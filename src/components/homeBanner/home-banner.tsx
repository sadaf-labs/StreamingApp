import React from 'react';
import './home-banner.scss';
import { HOME_BANNER_URL } from '../../utils/constant';

const HeroBanner: React.FC = () => (
  <div className="home-banner">
    <img src={HOME_BANNER_URL} alt="Live Streaming" className="home-banner_image" />
  </div>
);

export default HeroBanner;
