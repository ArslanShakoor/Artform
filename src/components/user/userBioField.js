export default [
  {
    name: 'first_name',
    label: 'First Name',
    type: 'text',
    design: 'col-md-11 col-xs-12',
    req: true,
    min_length: 3,
    max_length: 20
  },

  {
    name: 'last_name',
    label: 'Last Name',
    type: 'text',
    design: 'col-md-12 col-xs-12',
    req: true,
    min_length: 3,
    max_length: 20
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    design: 'col-md-12 col-xs-12',
    min_length: 3,
    req: true,
    max_length: 100
  },

  {
    name: 'title',
    label: 'Title',
    type: 'text',
    design: 'col-md-12 col-xs-12',
    req: true,
    min: 10,
    max: 50
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    rows: 5,
    req: true,
    design: 'col-md-12 col-xs-12',
    min: 30,
    max: 300
  }
];
