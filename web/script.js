// script.js
const attendanceTable = document.getElementById('attendance-table');
const attendanceBody = document.getElementById('attendance-body');

// Monday schedule
const mondaySchedule = [
    {
        time: '8:30 - 9:20',
        subject: 'Math',
        status: 'Absent'
    },
    {
        time: '9:30 - 10:20',
        subject: 'Physics',
        status: 'Present '
    },
    {
        time: '10:30 - 11:20',
        subject: 'Chemistry',
        status: 'Absent'
    },
    {
        time: '11:30 - 12:20',
        subject: 'Biology',
        status: 'Absent'
    },
    {
        time: '12:30 - 1:20',
        subject: 'English',
        status: 'Absent'
    }
];

// Create table rows for each period
mondaySchedule.forEach(period => {
    const tableRow = document.createElement('tr');
    const timeCell = document.createElement('td');
    timeCell.textContent = period.time;
    const subjectCell = document.createElement('td');
    subjectCell.textContent = period.subject;
    const statusCell = document.createElement('td');
    const statusButton = document.createElement('button');
    statusButton.classList.add('btn', 'btn-danger');
    statusButton.textContent = period.status;
    statusButton.addEventListener('click', () => {
        if (statusButton.textContent === 'Absent') {
            statusButton.textContent = 'Present';
            statusButton.classList.remove('btn-danger');
            statusButton.classList.add('btn-success');
        } else {
            statusButton.textContent = 'Absent';
            statusButton.classList.remove('btn-success');
            statusButton.classList.add('btn-danger');
        }
    });
    statusCell.appendChild(statusButton);
    tableRow.appendChild(timeCell);
    tableRow.appendChild(subjectCell);
    tableRow.appendChild(statusCell);
    attendanceBody.appendChild(tableRow);
});
