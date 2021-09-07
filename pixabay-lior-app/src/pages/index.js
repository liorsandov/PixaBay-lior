import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Copyright from '../components/copyright';
import NavBar from '../components/navbar/NavBar';
import SearchField from '../components/searchfield/SearchField';
import SelectButton from '../components/selectbutton/SelectButton';
import SubmitButton from '../components/submitbutton/SubmitButton';

const Index = () => {
  const [searchData, setSearchData] = useState('');
  const [amountData, setAmountData] = useState(5);

  const onSearch = (e) => {
    setSearchData(e);
  };

  const onAmount = (e) => {
    setAmountData(e);
  };

  return (
    <Container maxWidth="xl">
      <NavBar />
      <SearchField onSearch={onSearch} />
      <SelectButton onAmount={onAmount} />
      <SubmitButton searchData={searchData} amountData={amountData} />
      <Copyright />
    </Container>
  );
};

export default Index;
