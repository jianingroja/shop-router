import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log({ match });
  }, []);

  const [item, setItem] = useState({
    images: {},
    //???
    //hook
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();

    console.log(item);
    //console.log(item.data.item.name);
    setItem(item.data.item);
  };

  return (
    <div>
      <h1 className="item-name">{item.name}</h1>
      <img src={item.images.information} alt={item.name} />
    </div>
  );
}

export default ItemDetail;
