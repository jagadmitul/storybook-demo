import React from 'react';
import CustomDateTimePicker from '../components/CustomDateTimePicker';
import { action } from '@storybook/addon-actions';

export default {
    title: 'CustomDateTimePicker',
    component: CustomDateTimePicker,
    tags: ['autodocs'],
    argTypes: {
        dateTimePickerVariant: {
            control: 'select',
            options: ['DateTimePicker', 'MobileDateTimePicker', 'DesktopDateTimePicker', 'StaticDateTimePicker'],
            description: 'Select the date time picker variant'
        },
        orientation: {
            control: 'radio',
            options: ['portrait', 'landscape'],
            description: 'Select the orientation (applicable only for StaticDateTimePicker)',
        },
        onTimeChange: {
            control: 'function',
            description: 'Handle the date time change'
        }
    },
};

export const DateTimePicker = {
    args: {
        dateTimePickerVariant: 'DateTimePicker'
    },
};
export const MobileDateTimePicker = {
    args: {
        dateTimePickerVariant: 'MobileDateTimePicker'
    },
};
export const DesktopDateTimePicker = {
    args: {
        dateTimePickerVariant: 'DesktopDateTimePicker'
    },
};
export const StaticDateTimePicker = {
    args: {
        dateTimePickerVariant: 'StaticDateTimePicker',
        orientation: 'portrait'
    },
};

const Template = (args) => <CustomDateTimePicker {...args} onTimeChange={action('Date time changed')} />;

export const Default = Template.bind({});
Default.args = {
    dateTimePickerVariant: 'DateTimePicker',
    orientation: 'portrait'
};
