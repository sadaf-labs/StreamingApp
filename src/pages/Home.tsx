import React, { Suspense, lazy } from 'react';
import Sidebar from '../components/sideBar/side-bar';
import { labels } from '../utils/constant';

const HomeBanner = lazy(() => import('../components/homeBanner/home-banner'));
const MediaList = lazy(() => import('../components/mediaList/media-list'));

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="content">
        <Suspense fallback={<div>{labels.LOADING}</div>}>
          <HomeBanner />
          <MediaList />
        </Suspense>
      </div>
    </React.Fragment>
  );
};


export default Home;
