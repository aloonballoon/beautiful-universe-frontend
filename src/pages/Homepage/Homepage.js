import React from 'react';

import { App } from '../../core/App';
import { NavBar } from '../../core/NavBar';
import { Dropdown } from '../../core/Dropdown';

const Homepage = () => {
  return (
    <App>
      <NavBar>
        <Dropdown title='alan'>
          <ul>
            <li>
              <button>Click Me!</button>
            </li>
          </ul>
        </Dropdown>
      </NavBar>
    </App>
  );
};

export { Homepage };
