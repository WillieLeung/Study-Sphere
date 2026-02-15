const Joi = require('joi');

const envSchema = Joi.object({
    PORT: Joi.number().default(5000),
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test')
        .default('development')
}).unknown(); // Allow other env variables

const validateEnv = () => {
    const { error, value } = envSchema.validate(process.env);

    if (error) {
        throw new Error(`Environment validation error: ${error.message}`);
    }

    return value;
};

module.exports = validateEnv;