const formatDate = (val, par) => {
  let cts = val;
  if (cts) {
    return new Date(cts).toLocaleDateString('en-US');
  }
};

export default formatDate;
