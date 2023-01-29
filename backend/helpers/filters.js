function getIds(data) {
  let arr = [];
  for (let item of data) {
    arr.push(item.id);
  }
  return arr;
}

function filterObj(data_1, data_2) {
  const arr = data_1.filter((el) => getIds(data_2).includes(el.id));
  return arr;
}

exports.getSubTasks = filterObj;
