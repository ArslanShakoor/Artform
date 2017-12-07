/* made this utility which can be very helpful in future all type of Forms and theri in
the application can easily be rendered and can also use in other applications as well
*/
import '../../post/css/index.css';

import React from 'react';

export default ({
  input,
  label,
  type,
  design,
  req,
  rows,
  meta: { error, touched }
}) => {
  if (type === 'text')
    return (
      <div>
        <label>
          {label}
          <span className={req ? 'req' : ''} />
        </label>
        <input {...input} type={type} className={design} />
        <div className="error">{touched && error}</div>
      </div>
    );
  else {
    return (
      <div>
        <label>
          {label}
          <span className={req ? 'req' : ''} />
        </label>
        <textarea {...input} rows={rows} className={design} />
        <div className="error">{touched && error}</div>
      </div>
    );
  }
};
