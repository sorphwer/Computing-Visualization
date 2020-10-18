import React from 'react';
import { HeatMap } from '@nivo/heatmap';
import MartixProvider from './data/MatrixProvider';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const EntropyPool = ({width,height,col,row,...args}) => {
    const Matrix = new MartixProvider(row,col);
    return (
        <div>
            <HeatMap
                width={width}
                height={height}
                data={Matrix.data}
                keys={Matrix.keys}
                onClick={(e)=>Matrix.data[e.yKey][e.xKey]+=10}
                hoverTarget={'cell'}
                colors={'greens'}
                {...args}
            ></HeatMap>
            <h1>0</h1>
        </div>
      );
};
