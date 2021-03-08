
function setlocalStorage() {
  let array = JSON.stringify(patients);
  localStorage.setItem('patients', array);
}

function getlocalStorage() {
  let arr = localStorage.getItem('patients');
  let patientsArr = JSON.parse(arr);
  return patientsArr;
}

