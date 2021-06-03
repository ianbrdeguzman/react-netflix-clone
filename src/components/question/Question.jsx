import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import {
    QuestionContent,
    QuestionHeader,
    QuestionAnswer,
} from './questionStyles';

const Question = ({
    title,
    answerOne,
    answerTwo,
    id,
    toggleOnClick,
    selected,
}) => {
    return (
        <QuestionContent>
            <QuestionHeader onClick={() => toggleOnClick(id)}>
                <h2>{title}</h2>
                {selected === id ? <MdClose /> : <FiPlus />}
            </QuestionHeader>
            {selected === id && (
                <QuestionAnswer>
                    <p>{answerOne}</p>
                    <p>{answerTwo}</p>
                </QuestionAnswer>
            )}
        </QuestionContent>
    );
};

export default Question;
