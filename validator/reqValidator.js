const Joi = require('joi');
// external incomming data validation validation for security
module.exports =  joiSchema = {
    // student_id: Joi.any(),
    request_id: Joi.string().required().min(32),
    subject_selection: Joi.string().required(),
    part_selection: Joi.number().required(),
    subject_selection_MA: Joi.string(),
    subject_selection_MSC: Joi.string(),
    student_name: Joi.string().required(),
    student_f_name: Joi.string().required(),
    student_surname: Joi.string().required(),
    student_blood_group: Joi.string().required(),
    student_cnic_num: Joi.string().required(),
    student_postal_addr: Joi.string().required(),
    student_dateof_birth: Joi.string().required(),
    student_religion: Joi.string().required().required(),
    place_of_birth: Joi.string().required(),
    student_nationality: Joi.string().required(),
    student_social_status: Joi.string().required(),
    student_employee_status: Joi.string().required(),
    student_email: Joi.string(),
    student_phone_num: Joi.string().min(11),
    fathers_name_alive: Joi.any(),
    guardian_name: Joi.any(),
    fathers_cnic_num: Joi.any(),
    guardian_cnic_num: Joi.any(),
    father_occupation: Joi.any(),
    guardian_occupation: Joi.any(),
    occp_addr: Joi.string().min(5),
    emergency_contact: Joi.string().min(11).required(),
    guardian_contact: Joi.string().min(11),
    emergency_email: Joi.string()
}
