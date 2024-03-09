import PropTypes from "prop-types";
import { useState } from "react";

function ShopList({ onCreate }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (value.trim() === "") {
      console.error("alanları doldur!!");
      return;
    } else onCreate(value, setValue);
    setValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="text-3xl font-bold text-[black] max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden bg-green-100 ">
          Alış Veriş Listesi
        </h3>
        <div className="form-item-wrapper max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-5 bg-yellow-100">
          <label className="inline-flex flex flex-col">
            <strong className="mt-2">Alış veriş maddesi Ekleyiniz</strong>
            <input
              value={value}
              type="text"
              className="p-1 rounded-lg bg bg-blue-500 mt-2"
              placeholder="Alışveriş maddesi giriniz"
              onChange={handleChange}
            />
          </label>
          <button className=" mt-2 flex flex-col bg-blue-200">Ekle</button>
        </div>
      </form>
    </div>
  );
}

export default ShopList;

ShopList.propTypes = {
  onCreate: PropTypes.func,
};
