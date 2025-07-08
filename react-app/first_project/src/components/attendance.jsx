import React from 'react'

const students = [
    { rollNumber: 21, name: "Aarav" },
    { rollNumber: 34, name: "Priya" },
    { rollNumber: 45, name: "Rahul" },
    { rollNumber: 52, name: "Sneha" }
  ];
  
  const styles = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    fontSize: '18px',
    color: '#333',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '4px',

        
  }


const Attendance = () => {
  return (
    <div>
        <ul>
        {
            students.map(student=>
                <li key={student.rollNumber} id='student' style={styles}>
                    {student.rollNumber} - {student.name}
                </li>
            )
        }
</ul>
    </div>
  )
}

export default Attendance