import React from 'react';
import Plyr from '../Plyr/Plyr';
import { isClient } from '../../util/helpers';
import './VideoBlock.scss';

const VideoBlock = (props) => {
  const {
    videoUrl,
    videoProvider,
  } = props;
  return (
    <div className="video-block">
      {isClient && (
        <Plyr
          videoProvider={videoProvider}
          videoUrl={videoUrl}
        />
      )}
    </div>
  );
};

export default VideoBlock;
