import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from './Button';

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
const emphases: Array<ButtonProps['emphasis']> = [
    'text',
    'outlined',
    'contained',
];

export const Emphases = () => (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {emphases.map((emphasis) => (
            <div key={emphasis}>
                <Button emphasis={emphasis} onClick={() => alert('eae')}>
                    Click
                </Button>
            </div>
        ))}
    </div>
);

Emphases.story = {
    parameters: {
        notes: 'Emphases',
    },
};

const sizes: Array<ButtonProps['size']> = ['sm', 'md', 'lg'];

export const Sizes = () => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
        }}
    >
        {sizes.map((size) => (
            <div key={size}>
                <Button size={size} onClick={() => alert('eae')}>
                    Click
                </Button>
            </div>
        ))}
    </div>
);

export const outlined = () => (
    <Button emphasis={'outlined'} onClick={() => alert('eae')} size={'lg'}>
        Click
    </Button>
);
outlined.story = {
    parameters: {
        notes: 'outlined',
    },
};
export const Text = () => (
    <Button emphasis={'text'} onClick={() => alert('eae')} size={'lg'}>
        Click
    </Button>
);
Text.story = {
    parameters: {
        notes: 'Text',
    },
};

export const emoji = () => (
    <Button emphasis={'outlined'} onClick={() => alert('eae')} size={'lg'}>
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
