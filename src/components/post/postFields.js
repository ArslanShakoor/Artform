export default [
  {
    name: 'title',
    label: 'Post Title',
    type: 'text',
    design: 'col-md-12 col-xs-12',
    req: true,
    min_length: 5,
    max_length: 50
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    design: 'col-md-12 col-xs-12',
    rows: 7,
    req: true,
    min_length: 20,
    max_length: 300
  },
  {
    name: 'user',
    label: 'user',
    type: 'text',
    design: 'col-md-12 col-xs-12'
  }
];
