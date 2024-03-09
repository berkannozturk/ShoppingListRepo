import PropTypes from "prop-types";
import ListShow from "./ListShow";
const ListItem = ({ shoppingListItems, onDelete }) => {
  return (
    <div>
      <div>
        {shoppingListItems.map((item) => {
          return <ListShow key={item.id} item={item} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default ListItem;

ListItem.propTypes = {
  onDelete: PropTypes.func,
  value: PropTypes.string,
  shoppingListItems: PropTypes.any,
};
