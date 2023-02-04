import { useState } from "react";

import { Acordeon, Arrow, Aside, Brand, Category } from "./styles";
import { FilterLink } from "./styles";

import { FaChevronDown } from "react-icons/fa";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <Aside>
      <h3
        className="aside-title"
        onClick={() => {
          setOpenFilter(!openFilter);
        }}
      >
        Filtrar por <Arrow openFilter={openFilter}><FaChevronDown/></Arrow>
      </h3>

      <Acordeon openFilter={openFilter}>
        <Category>
          <h4>Categoría</h4>
          <ul>
            <li>
              <FilterLink to="/category/components">Componentes</FilterLink>
            </li>
            <li>
              <FilterLink to="/category/peripherics">Periféricos</FilterLink>
            </li>
            <li>
              <FilterLink to="/category/accesories">Accesorios</FilterLink>
            </li>
          </ul>
        </Category>

        <hr />

        <Brand>
          <h4>Marca</h4>

          <div>
            <h4>Componentes</h4>
            <ul>
              <li>
                <FilterLink to="/brand/AMD">AMD</FilterLink>
              </li>
              <li>
                <FilterLink to="/brand/EVGA">EVGA</FilterLink>
              </li>
            </ul>
          </div>

          <hr />

          <div>
            <h4>Periféricos</h4>
            <ul>
              <li>
                <FilterLink to="/brand/HyperX">HyperX</FilterLink>
              </li>
              <li>
                <FilterLink to="/brand/Logitech">Logitech</FilterLink>
              </li>
              <li>
                <FilterLink to="/brand/T-Dagger">T-Dagger</FilterLink>
              </li>
              <li>
                <FilterLink to="/brand/Redragon">Redragon</FilterLink>
              </li>
              <li>
                <FilterLink to="/brand/Samsung">Samsung</FilterLink>
              </li>
            </ul>
          </div>

          <hr />

          <div>
            <h4>Accesorios</h4>
            <FilterLink to="/brand/Redragon">Redragon</FilterLink>
          </div>
        </Brand>
      </Acordeon>
    </Aside>
  );
};

export default Filter;
