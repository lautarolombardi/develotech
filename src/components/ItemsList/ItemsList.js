import Filter from "./Filter/Filter";
import Item from "./Item/Item";

import { ItemsListLayout, Main} from "./styles";

const ItemsList = ({ productsList }) => {
  return (
    <Main>
      <Filter />
      <ItemsListLayout>
        {productsList.map((i) => (
          <Item key={i.id} product={i} />
        ))}
      </ItemsListLayout>
    </Main>
  );
};

export default ItemsList;
