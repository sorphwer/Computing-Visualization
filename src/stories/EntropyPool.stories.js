import React from 'react';
import { EntropyPool } from './EntropyPool'
// import { storiesOf } from '@storybook/react'
import { generateCountriesData } from '@nivo/generators'
export default {
    title: 'Example/EntropyPool',
    component: EntropyPool
};
const Template = (args) => <EntropyPool {...args} />;
// const keys = {
//     length : 12
// }
const keys = [
    'hot dogs',
    'burgers',
    'sandwich',
    'kebab',
    'fries',
    'donut',
    'junk',
    'sushi',
    'ramen',
    'curry',
    'udon',
    'bagel',
]

export const Default = Template.bind({});
Default.args = {
    width: 900,
    height: 500,
    // margin: { top: 60, right: 80, bottom: 60, left: 80 },
    keys,
    data: generateCountriesData(keys, { size: 9, min: 0, max: 100 }),
    indexBy: 'country',
}