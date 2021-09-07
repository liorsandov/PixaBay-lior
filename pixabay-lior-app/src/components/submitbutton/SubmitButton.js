import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
      marginTop: 12,
      marginBottom: 12,
    },
  },
}));

const SubmitButton = (props) => {
  const classes = useStyles();
  const [imagesData, setImagesData] = useState([]);

  let imagesFromData = [];

  const apiUrl = 'https://pixabay.com/api/';
  const apiKey = '20213605-75a0a2b1cbe06a2f84079c4dd';

  const getData = () => {
    axios
      .get(
        `${apiUrl}/?key=${apiKey}&q=${props.searchData}&image_type=photo&per_page=${props.amountData}&safesearch=true`
      )
      .then((response) => {
        setImagesData(response.data.hits);
        console.log(response.data.hits);
        imagesFromData.push(response.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={getData}>
        Submit
      </Button>
      <br />
      <Typography variant="h4" color="textSecondary" align="center">
        Display results for {props.searchData}
      </Typography>
      <GridList cellHeight={360} className={classes.gridList} cols={6}>
        {imagesData.map((e) => (
          <GridListTile key={e.largeImageURL} id={e.id} cols={e.cols || 1}>
            <img src={e.webformatURL} alt={e.tags} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default SubmitButton;