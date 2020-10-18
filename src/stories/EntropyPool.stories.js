import React from 'react';
import { EntropyPool } from './EntropyPool'
// import { storiesOf } from '@storybook/react'
// import { generateCountriesData } from '@nivo/generators'
export default {
    title: 'Example/EntropyPool',
    component: EntropyPool
};
const Template = (args) => <EntropyPool {...args} />;
const keys = [
    'key1',
    'key2'
]

export const Default = Template.bind({});

Default.args = {
    width: 900,
    height: 500,
    margin: { top: 60, right: 80, bottom: 60, left: 80 },
    keys,
    data: [{"country":"AD","key1":96,"key1Color":"hsl(176, 70%, 50%)","key2":51,"key2Color":"hsl(179, 70%, 50%)"},{"country":"AE","key1":97,"key1Color":"hsl(51, 70%, 50%)","key2":83,"key2Color":"hsl(181, 70%, 50%)"}],
    indexBy: 'country',
}