import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './style.css';
import SearchObjectButton from '../../Button/searchObjectButton/searchObject';
import { setSearchInput, setDatalistOptions } from '../../../store/inputSearchSlice';

import { useNavigate } from "react-router-dom";

function SearchObject() {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.inputSearch.searchInput);
  const datalistOptions = useSelector((state) => state.inputSearch.datalistOptions);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'c8e53ee1-6729-4af1-99b8-056d70169c75';
        const response = await axios.post(
          `https://cors-anywhere.herokuapp.com/https://reestr-api.ru/?adress=${encodeURIComponent(searchInput)}&token=${token}`
        );
        const options = response.data?.list || [];
        dispatch(setDatalistOptions(options));
        console.log(response.data);
      } catch (error) {
        console.error(error);
        // Обработка ошибки здесь
      }
    };

    fetchData();
  }, [dispatch, searchInput]);





  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const token = 'c8e53ee1-6729-4af1-99b8-056d70169c75';
  //       const response = await axios.get(
  //         `https://reestr-api.ru&adress=${searchInput}&token=${token}`
  //       );
  //       const options = response.data?.list || []; // Handle undefined or empty response
  //       dispatch(setDatalistOptions(options));
  //     } catch (error) {
  //       console.error(error);
  //       // Handle the error here
  //     }
  //   };

  //   fetchData();
  // }, [dispatch, searchInput]);







  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth_token = 'c8e53ee1-6729-4af1-99b8-056d70169c75';
    const url = `https://cors-anywhere.herokuapp.com/https://reestr-api.ru/v1/search/address?auth_token=${auth_token}`;

    const datas = new URLSearchParams({ address: searchInput });

    try {
      const response = await axios.post(url, datas.toString());
      console.log(response.data);

      navigate('/objectInfo', {state: {data: response.data.list.map(item => (
        <div key={item.obj_type + item.cad_num}>
          <p>Object Type: {item.obj_type}</p>
          <p>Cad Number: {item.cad_num}</p>
          <p>Address: {item.address}</p>
          <p>Area: {item.area}</p>
          <p>Cad Cost: {item.cad_cost}</p>
          <p>Status: {item.status}</p>
        </div>
      ))}})
      
      // Обработка ответа от сервера
    } catch (error) {
      console.error(error);
      // Обработка ошибки
    }
  };

  const handleSearchInputChange = (event) => {
    dispatch(setSearchInput(event.target.value));
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="text"
            className="input"
            placeholder="Москва, Конькова, ул. Бутлерова, д. 4, кв. 28 или 77:0006003:9295"
            id="search"
            value={searchInput}
            onChange={handleSearchInputChange}
            list="searchOptions" // Added the "list" attribute to associate the input with the datalist
          />
          <div className="fancy-bg"></div>
          <div className="search">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
            >
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
              </g>
            </svg>
          </div>
        </label>
        {/* data in fetchData */}
        <datalist id="searchOptions">
          {datalistOptions.map((option, index) => (
            <option key={index} value={option.adress} />
          ))}
        </datalist>

        <SearchObjectButton />
      </form>
    </>
  );
}

export default SearchObject;
