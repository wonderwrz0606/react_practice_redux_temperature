import React from 'react';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

function average(data) {
  // Get the avg number of the data array
  return _.round(_.sum(data)/data.length);
}

const Chart = (props) => {
  return (
    <div>
      <Sparklines data={props.data} height={props.height} width={props.width} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div title="unit">{average(props.data)} {props.units}</div>
    </div>
  );
}

export default Chart;
