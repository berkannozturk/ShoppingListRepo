import { useState } from "react";
import ShopList from "./components/ShopList";
import ListItem from "./components/ListItem";

function App() {
  const [shopItem, setShopItem] = useState([]);
  function createShoppingItem(value, setValue) {
    const createdItems = [
      ...shopItem,
      {
        id: Math.random(Math.random() * 99999),
        value: value,
        setValue: setValue,
      },
    ];
    setShopItem(createdItems);
  }

  function deleteItemById(id) {
    const nonDeletedItems = shopItem.filter((item) => {
      return item.id !== id;
    });

    setShopItem(nonDeletedItems);
  }

  return (
    <div>
      <ShopList onCreate={createShoppingItem} />
      <h1 className="text-3xl font-bold text-[black] max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden bg-green-100 mt-5 ">
        Alışveriş Listem
      </h1>
      <ListItem shoppingListItems={shopItem} onDelete={deleteItemById} />
    </div>
  );
}

export default App;
