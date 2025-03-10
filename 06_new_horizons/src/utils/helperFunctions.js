export function idfy(obj) {
  return obj.map((e, i) => {
    return { ...e, id: i + 1 };
  });
}

export function updateEmploeesData(arr, newObj) {
  let updatedArr = [...arr, newObj];
  localStorage.setItem('emploees', JSON.stringify(idfy(updatedArr)));
}
