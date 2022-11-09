import React from 'react';
import Card from "../component/Card";

function Education() {
  return (
    <div className="condiv">
      <h1 className='subtopic'>My Education</h1>
      <Card title="B.Tech (Computer Science & Engineering)" where="S.A.T.I ,Vidisha (M.P.)" from="August 2018" to="June 2022" CGPA="7.5"/>
      <Card title="12th" where="S.R. Public School" from="2017" to="2018" CGPA="7.0"/>
      <Card title="10th" where="D.A.V Public school" from="2015" to="2016" CGPA="7.4" />
    </div>
  )
}

export default Education