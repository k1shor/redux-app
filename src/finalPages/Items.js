import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../components/Item';
import Navbar from '../components/Navbar';


const Items = () => {
  const all_items = useSelector(store => store.items.itemsdata)

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {all_items.map((individual_item, i) => {
            return <Item key={i} data={individual_item} />
          })}
        </div>
      </div>
    </>);
};

export default Items;
