import React from 'react';
import { FormContent, StyledForm, Button } from './formStyles';
import { BsChevronRight } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const Form = () => {
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleOnSubmit = (data) => {
        console.log(data);
        // alert(data.email);

        history.push(`/login/${data.email}`);
    };

    return (
        <FormContent>
            <p>
                Ready to watch? Enter your email to create or restart your
                membership.
            </p>
            <StyledForm onSubmit={handleSubmit(handleOnSubmit)}>
                <div>
                    <input
                        type='text'
                        {...register('email', {
                            required: 'Email is required!',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email address',
                            },
                        })}
                        id='email'
                        placeholder='Email address'
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <Button type='submit'>
                    Get Started
                    <span>
                        <BsChevronRight />
                    </span>
                </Button>
            </StyledForm>
        </FormContent>
    );
};

export default Form;
