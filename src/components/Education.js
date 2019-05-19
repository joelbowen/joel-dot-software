import React from 'react'

function Education({ currentYear, startYear }) {
  return (
    <div>
      <h2>Education</h2>
      <p>
        I received a Bachelor’s Degree in Digital Information Design from
        Winthrop University, with a special concentration in Digital Commerce as
        well as training in Interactive Media and Business Management.
      </p>
      <p>
        I also spent two years at York Technical College taking courses in Art &
        Computer Science.
      </p>
      <p>
        In addition my formal education, I have been working with creative teams
        for <strong>{currentYear - startYear} years</strong> bringing products
        and experiences to life.
      </p>
    </div>
  )
}

export default Education
