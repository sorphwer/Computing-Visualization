import React from 'react';
import { EntropyPool } from './EntropyPool'

export default {
    //meta
    title: 'Example/EntropyPool',
    //target component
    component: EntropyPool,
    //global props settings
    argTypes: {
        // data: { table: { disable: false } },
        indexBy: {table: { disable: true}},
        margin: { table: { disable: true } },
        width: { table: { disable: true } },
        height: { table: { disable: true } },
        // onClick: { action: 'clicked' }
      },
    //global init props
    args: {
        margin: { top: 60, right: 80, bottom: 60, left: 80 },
        indexBy:'index',
        width: 900,
        height: 400,
    }
};

const Template = (args) => <EntropyPool {...args} />;

export const Default = Template.bind({});
//story props
Default.args = {
    col:4,
    row:5,
}