import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '25ch',
    marginTop: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectButton = (props) => {
  const classes = useStyles();
  const [amount, setAmount] = useState(5);

  const handleChange = (e) => {
    const amountFromUser = e.target.value;
    setAmount(amountFromUser);
    props.onAmount(amountFromUser);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Images amount</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={amount}
          onChange={handleChange}
        >
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectButton;