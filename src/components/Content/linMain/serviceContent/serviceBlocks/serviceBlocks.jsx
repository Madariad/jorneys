
import './style.css';
import React from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { toggleCheckbox } from '../../../../../store/serviceBlocksSlice';

const ServiceBlocks = () => {
    const checkboxes = useSelector((state) => state.serviceBlocks.checkboxes);
    const dispatch = useDispatch();
  
    const handleToggleCheckbox = (checkboxName) => {
      dispatch(toggleCheckbox(checkboxName));
    };
  

   
        const services = [
          {
            id: 1,
            name: <span style={{fontWeight: '500'}}>Отчет о рисках</span>,
            description: [
              '✔️ Отчет об объекте недвижимости и история перехода прав',
              '✔️ Указываем на риски',
              '✔️ Проверка в 15+ базах',
              '✔️ Юридическая рекомендация'
            ],
            price: '1599₽'
          },

          {
            id: 2,
            name: <span style={{fontWeight: '500'}}> 2 отчета </span>,
            description: [
                <span key={0} style={{ fontWeight: 'bold' }}>Отчет об объекте недвижимости <br />
               История перехода прав <br /> 
               Содержит информацию о владельце, обременение <br />
               и история купли-продажи обьекта
                </span>
             
              
            ],
            price: '799₽'
          },
          {
            id: 3,
            name:  <span style={{ fontWeight: '500' }}>Отчет об основных характеристиках <br /> 
            и правообладателях объекта недвижимости</span>,
            description: [
              <span key={0} >Содержит информацию о текущем владельце, наличии обременений <br />
              (запретов/арестов/ипотеки), кадастровой стоимости...</span>,
              
            ],
            price: '349₽'
          },
          {
            id: 4,
            name: <span style={{fontWeight: '500', marginBottom: '10px'}}> История о переходе прав </span>,
            description: [
              <span key={0}>История купли-продажи объекта, информация обо всех предыдущих <br />
              владельцах...</span>
            ],
            price: '299₽'
          },
        ]

  return (

    <div className="products" style={{ padding: 0, color: 'black' }}>
  {services.map((service, index) => (
    <div key={index} className="product-item product-item_default product-item_selected" data-className="product-item-half" style={{ color: 'black' }}>
      <div className="product-item__left">
        <div className="custom-control custom-checkbox">
          <div className="checkbox-ios">
            <input
              type="checkbox"
              name={`ch_add3_${service.id}`}
              id={`ch_add3_${service.id}`}
              className="custom-control-input"
              checked={checkboxes[`ch_add3_${service.id}`]}
              onChange={() => handleToggleCheckbox(`ch_add3_${service.id}`)}
            />
            <label htmlFor={`ch_add3_${service.id}`} className="checkbox-ios-switch"></label>
          </div>
          <span className="custom-control-label"></span>
        </div>
      </div>
      <div className="product-item__body">
        <div className="product-item__name">{service.name}</div>
        <div className="product-item__desc">
          <span>
            {service.description.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </span>
        </div>
        <div className="product-item__desc"></div>

        <div className="sl_more">
          <div className="custom-control custom-checkbox">
            <div className="checkbox-ios">
              <input type="checkbox" 
              name={`ch_add3_${service.id}_2`} 
              id={`ch_add3_${service.id}_2`} 
              className="custom-control-input" 
              checked={checkboxes[`ch_add3_${service.id}_2`]}
              onChange={() => handleToggleCheckbox(`ch_add3_${service.id}_2`)}
              
              />
              <label htmlFor={`ch_add3_${service.id}_2`} className="checkbox-ios-switch"></label>
            </div>
            <span className="custom-control-label text-danger">Заказать срочно за ~ 50 мин.</span>
          </div>
        </div>

        <div className="product-item__right">
          <div style={{ display: 'flex', position: 'absolute', height: '26px', right: '4px', top: '4px', padding: '2px 6px', background: 'limegreen', color: 'black', textAlign: 'center', borderRadius: '6px', WebkitBorderRadius: '6px', MozBorderRadius: '6px', KhtmlBorderRadius: '6px' }}>
            Рекомендуем
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ height: '16px', width: '16px' }} className="align-middle">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="product-item__price" style={{ marginTop: '24px' }}>
        <span className="product-item__price-original" data-normal3="1599₽" data-add3="2599₽">
          {service.price}
          <i className="fas fa-ruble-sign"></i>
        </span>
        <div className="product-item__time">
          <div className="d-inline-block" style={{ display: 'flex' }}>
            <span className="align-middle" data-normal3="от 8 ч." data-add3="от 50 мин.">
              от 8 ч.
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="align-middle">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
            </svg>
          </div>
          <div className="sl_button sl_show">Подробнее</div>
        </div>
      </div>
    </div>
  ))}
</div>

    
    
  






            )}
export default ServiceBlocks;