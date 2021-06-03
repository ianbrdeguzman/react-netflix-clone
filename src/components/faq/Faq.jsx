import React, { useState } from 'react';
import Question from '../question/Question';
import Form from '../form/Form';
import { data } from './faqData';
import { StyledSection, FaqContainer } from './faqStyles';

const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggleOnClick = (id) => {
        if (selected === id) {
            return setSelected(null);
        }
        setSelected(id);
    };

    return (
        <StyledSection>
            <FaqContainer>
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
            </FaqContainer>
            <Form />
        </StyledSection>
    );
};

export default Faq;
