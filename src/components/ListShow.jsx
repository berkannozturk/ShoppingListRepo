import PropTypes from "prop-types";
const ListShow = ({ item, onDelete }) => {
  function handleDelete() {
    onDelete(item.id);
  }

  return (
    <div>
      <div className="listItem-wrapper">
        <div className="">
          <p className="text-xl font-bold text-[black] max-w-md mx-auto   overflow-hidden mt-6  ">
            {item.value}
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded  max-w-md mx-auto ml-4"
              onClick={handleDelete}
            >
              Sil
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListShow;

ListShow.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func,
};
