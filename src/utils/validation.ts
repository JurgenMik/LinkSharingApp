import Joi from 'joi';

const urlRegExp = /\b(?:(?:https?|ftp):\/\/|www\.)[^\s/$.?#].[^\s]*\b/;

export const linksValidationSchema = () => {
    return (
        Joi.object({
            link: Joi.string()
                .max(100)
                .pattern(urlRegExp)
                .message('Please provide a valid URL format')
                .required(),
            platform: Joi.string()
                .min(1)
                .required()
        })
    );
}