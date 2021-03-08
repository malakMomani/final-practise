'use strict';

let patients = getlocalStorage();
console.log(patients);

let doctors = ['Dr. Ahmad','Dr. Dema','Dr. Yaser','Dr. Lubna','Dr. Maha'];
let days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thersday'];

let counter = [0,0,0,0,0];
let counterDays = [0,0,0,0,0,0];

for (let i = 0; i < patients.length; i++) {
  switch (patients[i].doctorName) {
    case 'Dr. Ahmad':
      counter[0]++;
      break;
    case 'Dr. Dema':
      counter[1]++;
      break;
    case 'Dr. Yaser':
      counter[2]++;
      break;
    case 'Dr. Lubna':
      counter[3]++;
      break;
    case 'Dr. Maha':
      counter[4]++;
      break;
  }

  switch (patients[i].time) {
    case 'Saturday':
      counterDays[0]++;
      break;
    case 'Sunday':
      counterDays[1]++;
      break;
    case 'Monday':
      counterDays[2]++;
      break;
    case 'Tuesday':
      counterDays[3]++;
      break;
    case 'Wedensday':
      counterDays[4]++;
      break;
    case 'Thursday':
      counterDays[5]++;
      break;

  }

}

function renderDoctorStatistics() {
  let sectionEl = document.getElementById('doctorsStat');
  let ulEl = document.createElement('ul');
  sectionEl.appendChild(ulEl);
  let liEl;
  for (let i = 0; i < doctors.length; i++) {
    liEl =  document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${doctors[i]} has ${counter[i]} patients`;
  }
}

function renderDaysStatistics() {
  let sectionEl = document.getElementById('daysStat');
  let ulEl = document.createElement('ul');
  sectionEl.appendChild(ulEl);
  let liEl;
  for (let i = 0; i < days.length; i++) {
    liEl =  document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${days[i]} has ${counterDays[i]} Appoitments`;
  }
}

renderDoctorStatistics();
renderDaysStatistics();