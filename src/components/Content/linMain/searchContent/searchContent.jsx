import React from 'react';
import SearchObject from '../../../InputSerch/SerchObject/SerchObject';
import './style.css';

function SearchContent() {
  return (
    <div className="searchContent">
      <div>
        <SearchObject />
      </div>
      <ul>
        <li>ШАГ 1: введите в поисковую строку адрес нажмите кнопку найти объект</li>
        <li>ШАГ 2: выберите услугу</li>
        <li>ШАГ 3: оплатите удобным способом</li>
      </ul>
    </div>
  );
}

export default SearchContent;
