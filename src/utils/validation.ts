import Joi from 'joi';

const urlRegExp = /\b(?:(?:https?|ftp):\/\/|www\.)[^\s/$.?#].[^\s]*\b/;

export const linksValidationSchema = () => {
    return (
        Joi.object({
            link: Joi.string()
                .max(100)
                .pattern(new RegExp(urlRegExp))
                .message('Please provide a valid URL format')
                .required()
                .label('Link'),
            platform: Joi.string()
                .min(1)
                .required()
                .label('Platform')
        })
    );
}

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const detailsValidationSchema = () => {
    return (
        Joi.object({
            profile_img: Joi.string()
                .min(1)
                .required()
                .label('Profile Image'),
            first_name: Joi.string()
                .min(3)
                .message('Provide a valid first name')
                .required()
                .label('First Name'),
            last_name: Joi.string()
                .min(3)
                .message('Provide a valid last name')
                .required()
                .label('Last Name'),
            email: Joi.string()
                .min(1)
                .pattern(new RegExp(emailRegExp))
                .message('Please provide a valid email format')
                .required()
                .label('Email')
        })
    );
}