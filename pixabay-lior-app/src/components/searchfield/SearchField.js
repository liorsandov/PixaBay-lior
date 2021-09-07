import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      width: '25ch',
      marginTop: 10,
    },
  },
}));

const SearchField = (props) => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  const handelInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
    props.onSearch(text);
  };

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        fullWidth
        id="standard-basic"
        label="Search"
        value={searchText}
        onChange={handelInput}
      />
    </div>
  );
};

export default SearchField;
