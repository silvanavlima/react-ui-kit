import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
    component: Button,
    title: 'components/Button',
    parameters: {
        myAddon: {
            data: 'this data is passed to the addon',
        },
    },
    decorators: [withKnobs],
};

export const hello = () => <Button bg="red">Hello Button</Button>;

export const emoji = () => (
    <Button bg="blue">
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
);

emoji.story = {
    parameters: {
        notes: 'A small component',
    },
};
