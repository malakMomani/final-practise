'use strict';

let tableSectionEl = document.getElementById('appotable');
let tableEl = document.createElement('table');
tableSectionEl.appendChild(tableEl);
let tableHeadings = ['Patient Name', 'Patient Age','Status' ,'Doctor Name', 'Time', 'Emergency']
let days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thersday'];
let patients = [];


function Appointment(patientName, patientAge, status, doctorName, time, isEmergency) {
  this.patientName = patientName;
  this.patientAge = patientAge;
  this.status = status;
  this.doctorName = doctorName;
  this.time = time;
  this.isEmergency = isEmergency;
  patients.push(this);
}

Appointment.prototype.renderTable = function() 
{
  tableEl.remove();
  tableEl = document.createElement('table');
  tableSectionEl.appendChild(tableEl);
  let theadEl, trEl, thEL;
  theadEl = document.createElement('thead');
  tableEl.appendChild(theadEl);
  trEl = document.createElement('tr');
  theadEl.appendChild(trEl);
  for (let i = 0; i < tableHeadings.length; i++) {
    thEL = document.createElement('th');
    trEl.appendChild(thEL);
    thEL.textContent = tableHeadings[i];
  }

  let tbodyEl , tdEL;
  tbodyEl = document.createElement('tbody');
  tableEl.appendChild(tbodyEl);
  for (let i = 0; i < patients.length; i++) {
    trEl = document.createElement('tr');
    tbodyEl.appendChild(trEl);
    tdEL = document.createElement('td');
    trEl.appendChild(tdEL);
    tdEL.textContent = patients[i].patientName;
    tdEL = document.createElement('td');
    trEl.appendChild(tdEL);
    tdEL.textContent = patients[i].patientAge;
    tdEL = document.createElement('td');
    trEl.appendChild(tdEL);
    tdEL.textContent = patients[i].status;
    tdEL = document.createElement('td');
    trEl.appendChild(tdEL);
    tdEL.textContent = patients[i].doctorName;
    tdEL = document.createElement('td');
    trEl.appendChild(tdEL);
    tdEL.textContent = patients[i].time;

    tdEL = document.createElement('td');
    trEl.appendChild(tdEL);
    if(patients[i].isEmergency)
    {
      tdEL.textContent = 'Yes';
      trEl.setAttribute('style','background-color:rgba(238, 10, 10, 0.776);');
    } else {
      tdEL.textContent = 'No';
    }
  }
}


let button = document.getElementById('submit').addEventListener('click', newAppointment);

function newAppointment(event) {
  event.preventDefault();
  //console.log(event);
  //console.log(event.target.form.emergancy.checked);
  let pName = event.target.form.name.value;
  let pAge = event.target.form.age.value;
  let pStatus = event.target.form.status.value;
  let dName = event.target.form.doctor.value;
  let aDay = event.target.form.day.value;
  let eme = event.target.form.emergancy.checked;

  let appointment = new Appointment(pName, pAge, pStatus, dName, aDay, eme);
  //g//etlocalStorage();
  setlocalStorage();
  console.log(patients);
  appointment.renderTable();

}


function reInstance(){
  let patientsArray = getlocalStorage();
  if (patientsArray) {
    for (let i = 0; i < patientsArray.length; i++) {
      let appointmentObject = patientsArray[i];
      new Appointment(
        appointmentObject.patientName,
        appointmentObject.patientAge,
        appointmentObject.status,
        appointmentObject.doctorName,
        appointmentObject.time,
        appointmentObject.isEmergency,
      );
    }
  }
  return patientsArray;
}

reInstance();