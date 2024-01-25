import React from 'react';
import AccordionComponent from '../components/Accordion';
import { action } from '@storybook/addon-actions';

export default {
    title: 'AccordionComponent',
    component: AccordionComponent,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color',
            description: 'Set the background color of the accordion'
        },
        title: {
            control: 'text',
            description: 'Set title of the accordion'
        },
        content: {
            control: 'text',
            description: 'Set content of the accordion'
        },
        defaultExpanded: {
            control: 'boolean',
            description: 'Set to have the accordion opened by default'
        },
        disabled: {
            control: 'boolean',
            description: 'Set to disable the accordion interaction'
        },
        onAccordionChange: {
            control: 'function',
            description: 'Handle the accordion toggle event'
        },
    },
};

export const ExpandedByDefault = {
    args: {
        title: 'Expanded',
        content: 'Expanded by default',
        defaultExpanded: true,
    },
};

export const Disabled = {
    args: {
        title: 'Disabled',
        content: 'Disabled Accordion',
        disabled: true,
    },
};

const Template = (args) => <AccordionComponent {...args} onAccordionChange={action('Accordion Toggled')} />;

export const Default = Template.bind({});
Default.args = {
    backgroundColor: 'white',
    title: 'Accordion Title',
    content: 'Accordion Content',
    defaultExpanded: false,
    disabled: false,
};
