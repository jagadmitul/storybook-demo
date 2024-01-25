import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

export default function CustomDateTimePicker({ dateTimePickerVariant, orientation, onTimeChange }) {
  const renderDateTimePickerVariant = () => {
    switch (dateTimePickerVariant) {
      case 'MobileDateTimePicker':
        return <MobileDateTimePicker onChange={onTimeChange} defaultValue={dayjs(new Date())} />;
      case 'DesktopDateTimePicker':
        return <DesktopDateTimePicker onChange={onTimeChange} defaultValue={dayjs(new Date())} />;
      case 'StaticDateTimePicker':
        return <StaticDateTimePicker orientation={orientation} onChange={onTimeChange} defaultValue={dayjs(new Date())} />;
      default:
        return <DateTimePicker onChange={onTimeChange} defaultValue={dayjs(new Date())} />;
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
        ]}
      >
        <DemoItem label={`${dateTimePickerVariant} variant`}>
          {renderDateTimePickerVariant()}
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

CustomDateTimePicker.propTypes = {
  dateTimePickerVariant: PropTypes.string,
  orientation: PropTypes.string
};

CustomDateTimePicker.defaultProps = {
  dateTimePickerVariant: 'DateTimePicker',
  orientation: 'portrait'
};
