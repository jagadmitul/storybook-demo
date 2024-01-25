import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComponent = ({ title, content, defaultExpanded, disabled, backgroundColor, onAccordionChange }) => {
    const [isAccordionOpen, setAccordionOpen] = useState(defaultExpanded ? defaultExpanded : false);

    const handleAccordionChange = () => {
        setAccordionOpen(!isAccordionOpen);
        onAccordionChange(!isAccordionOpen);
    };

    return (
        <Accordion expanded={isAccordionOpen} onChange={handleAccordionChange} defaultExpanded={defaultExpanded} disabled={disabled} style={backgroundColor && { backgroundColor }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{content}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionComponent;

AccordionComponent.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    defaultExpanded: PropTypes.bool,
    disabled: PropTypes.bool,
    backgroundColor: PropTypes.string
};

AccordionComponent.defaultProps = {
    backgroundColor: 'white',
    title: 'Accordion Title',
    content: 'Accordion Content',
    defaultExpanded: false,
    disabled: false,
};
