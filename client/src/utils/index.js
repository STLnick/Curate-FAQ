export default {
  createObjectFromFields: (fields) => Array.from(fields).filter(el => el.id).reduce((acc, el) => {
    acc[el.id] = el.value;
    return acc;
  }, {})
}