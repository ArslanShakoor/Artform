import React from 'react';
import _ from 'lodash';
import { Field } from 'redux-form';
import field from './field';

const renderForm = postFields => {
  return _.map(postFields, ({ name, label, type, req, design, rows }) => {
    return (
      <Field
        key={name}
        label={label}
        name={name}
        type={type}
        design={design}
        rows={rows}
        req={req}
        component={field}
      />
    );
  });
};

export default renderForm;
