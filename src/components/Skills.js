import React from 'react'
function Skills({ currentYear, startYear }) {
  return (
    <div>
      <h2>Skills</h2>
      <p>
        I speak web languages – the web API was my first love and I have enjoyed
        its evolution for the last{' '}
        <strong>{currentYear - startYear} years</strong> of my career.
      </p>
      <p>
        <strong>Some things I like:</strong> JavaScript, React DOM & React
        Native, Angular, Progressive Mobile, GraphQL, Static Site Generators,
        Headless CMS, Node.js, Serverless, Containerization, Cloud Deployment,
        SQL/NoSql/In-Memory Databases, Linux based servers.
      </p>
      <p>
        I also care deeply about cross-functional teams working well together. I
        have extensive experience leading teams in Agile processes, creating
        shared language, and helping curate a culture of innovative thought.{' '}
      </p>
      <p>
        <strong>I am profficient with:</strong> Agile Process, SCRUM
        Methodology, Google Sprints, Product Roadmap Development, Design
        Strategy.
      </p>
    </div>
  )
}

export default Skills
