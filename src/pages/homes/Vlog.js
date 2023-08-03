import React, { useState } from "react";
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // Your custom styles go here
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
  },

  // class: cardContainer
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '10%',
  },

  // class: vlogContainer
  vlogContainer: {
    height: '100%',
    marginBottom: '10%',
  },

  // class: card
  card: {
    minWidth: '200px',
    maxWidth: '400px',
    minHeight: '200px',
    maxHeight: '200px',
    width: '100%',
    height: '100%',

    backgroundColor: 'blue',
    margin: '20px',
    borderRadius: '30px',
  },

}));

const Vlog = () => {
  const [expandedVideoId, setExpandedVideoId] = useState(null);

  const handleToggleDescription = (id) => {
    setExpandedVideoId(id === expandedVideoId ? null : id);
  };

  const classes = useStyles();
  
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/dBCo5aAJmlw",
      description: "赤道に合わせてメジャーを引く幼女の動画",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=vDKZawTrgZ4",
      description: "うんちを食べて総理大臣が喜ぶ動画",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=zJVyhst5hns",
      description: "OP",
    },
    // Add more videos here as needed
  ];
  return ( 
    <>
      <h2 className="vlog-title">日々の日常をVlogにしました</h2>
      <Fade bottom big>
        <div className={classes.vlogContainer}>
          {videos.map((video) => (
            <li
            key={video.id}
            onClick={() => handleToggleDescription(video.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: video.id % 2 === 1 ? 'flex-start' : 'flex-end',
            }}
          >
            <div style={{ order: video.id % 2 === 1 ? 1 : 2 , width: '35vw', height: '20vw' }}>
              <ReactPlayer url={video.url} controls width="100%" height="100%"  />
            </div>
            <div style={{ order: video.id % 2 === 1 ? 2 : 1, margin: '20px' }}>
              <h2>{video.title}</h2>
              {expandedVideoId === video.id && <p>{video.description}</p>}
            </div>
          </li>
              ))}
        </div>
      </Fade>
    </>
  );
};

export default Vlog;
