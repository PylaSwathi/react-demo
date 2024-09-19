import React, { useEffect, useState } from 'react';
import './index.css';

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from json-server
    fetch('http://localhost:3006/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className='dashboard-container'>
      <h2>Student Dashboard</h2>
      <table className="border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">Roll No</th>
            <th className="border border-slate-300 p-2">Name</th>
            <th className="border border-slate-300 p-2">Email</th>
            <th className="border border-slate-300 p-2">Phone Number</th>
            <th className="border border-slate-300 p-2">Check In Time</th>
            <th className="border border-slate-300 p-2">Check Out Time</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td className="border border-slate-300 p-2">{student.rollNumber}</td>
              <td className="border border-slate-300 p-2">{student.name}</td>
              <td className="border border-slate-300 p-2">{student.email}</td>
              <td className="border border-slate-300 p-2">{student.phoneNumber}</td>
              <td className="border border-slate-300 p-2">{student.checkinTime}</td>
              <td className="border border-slate-300 p-2">{student.checkoutTime}</td>

              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
