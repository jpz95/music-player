import React, { useState } from 'react';
import GridRow from './grid-row';
import GridUtils from './grid-utils';

const Grid = (props) => {
  const { data, columns } = props;

  const [visibleColumns, ] = useState(GridUtils.getVisibleColumns(columns));

  const renderHeaderCells = () => {
    return Array.from(visibleColumns).map((field) => {
      const values = columns[field];

      return (
        <cell className="grid__cell" key={`header-${field}`}>
          {values.label}
        </cell>
      )
    });
  };

  return (
    <grid className="grid d-grid gap-sm">

      <row className="grid__row -header">
        { renderHeaderCells() }
      </row>

      <section className="d-grid gap-md">
        {data.map(item => (
          // TODO handle for mobile view
          <GridRow key={`${item.id}`}
            data={item}
            visibleColumns={visibleColumns}
          ></GridRow>
        ))}
      </section>

    </grid>
  );
};

export default Grid;