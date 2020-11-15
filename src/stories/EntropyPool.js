import React from 'react';
import { useState, useEffect } from 'react';
import { HeatMap,ResponsiveHeatMap,ResponsiveHeatMapCanvas } from '@nivo/heatmap';
import MartrixProvider from './data/MatrixProvider';
import './entropyPool.css';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const EntropyPool = ({width,height,col,row,...args}) => {
    const keys = [];
    for(let j=0;j<col;j++){
        keys.push('Col'+j.toString());
    }
    
    const initialState = {
        data:new MartrixProvider(col,row).getCurrentValue(),
        keys:keys
    }

    let [state, setState] = useState(initialState);
    console.log('Component Init');
    console.log(state.data);
    useEffect(()=>{
       // forceUpdate();
    })

    return (
        <div className="chart-container">
            <ResponsiveHeatMapCanvas
                width={width}
                height={height}
                data={state.data}
                keys={state.keys}
                indexBy="index"
                hoverTarget={'cell'}
                colors={'greens'}
                onClick={(e)=>{
                    let temp = state.data;
                    let xKey = e.xKey;
                    let yKey = e.yKey;
                    temp[parseInt(yKey.charAt(yKey.length-1))][xKey]+=10;
                    setState({
                        ...state,
                        data: temp
                    });
                    console.log('You Clicked',e.xKey,e.yKey,'where value is:',e.value);
                }}
                {...args}
            ></ResponsiveHeatMapCanvas>
            <h1>0</h1>
        </div>
      );
};
