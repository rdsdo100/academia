import {celebrate, Joi, Segments} from "celebrate";

const treinoValidations = celebrate(
    {
        [Segments.BODY]:Joi.object().keys({


            }
        )
    }
)

export {treinoValidations}
