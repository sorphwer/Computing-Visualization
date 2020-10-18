import React from 'react';
// import { ResponsiveHeatMap } from '@nivo/heatmap'
// import { generateCountriesData } from '@nivo/generators'
import PropTypes from 'prop-types';
import { HeatMap } from '@nivo/heatmap';


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const EntropyPool = ({ width, height, data, indexBy}) => {
    return (
        <div>
            <h1>0</h1>
            <HeatMap
                width={width}
                height={height}
                data={data}
                indexBy={indexBy}
            ></HeatMap>

        </div>
      );
};

//User Control
EntropyPool.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    indexBy: PropTypes.string,
  };


EntropyPool.defaultProps = {
    margin: { top: 60, right: 80, bottom: 60, left: 80 },
  };