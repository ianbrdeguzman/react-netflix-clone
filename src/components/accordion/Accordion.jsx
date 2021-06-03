import React, { useState } from 'react';
import Question from '../question/Question';
import Form from '../form/Form';
import { data } from './accordionData';
import { StyledSection, AccordionContainer } from './accordionStyles';

const Accordion = () => {
    const [selected, setSelected] = useState(null);

    const toggleOnClick = (id) => {
        if (selected === id) {
            return setSelected(null);
        }
        setSelected(id);
    };

    return (
        <StyledSection>
            <AccordionContainer>
                <h2>Frequently Asked Questions</h2>
                {data.map((item) => {
                    return (
                        <Question
                            {...item}
                            key={item.id}
                            selected={selected}
                            toggleOnClick={toggleOnClick}
                        />
                    );
                })}
            </AccordionContainer>
            <Form />
        </StyledSection>
    );
};

export default Accordion;
