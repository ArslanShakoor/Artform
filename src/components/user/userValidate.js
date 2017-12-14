import userBioField from './userBioField';
import _ from 'lodash';

export default values => {
  const errors = {};
  _.each(userBioField, ({ name, req, min_length, max_length }) => {
    if (!values[name] && req) {
      errors[name] = `Please enter the ${name}`;
    } else if (
      values[name] &&
      (values[name].length < min_length || values[name].length > max_length)
    ) {
      errors[
        name
      ] = `${name} should between ${min_length} and ${max_length} characters`;
    }
  });
  return errors;
};
