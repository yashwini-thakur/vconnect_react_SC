import React from "react";
import { Link } from "react-router-dom";

function Sem1_2() {
  return (
    <>
      <html className="html_sem1_2">
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EC</title>
        <link rel="stylesheet" href="table.css" />
        <body className="body_sem1_2">
          <table className="table_sem1_2" border="3px">
            <th>
              <h4>Sem:1&2</h4>
              {/* style for following p tag: style="text-align: right; color: #aaa; margin-top:-35px;" */}
              {/* <p className="p_sem1_2">
                <small>
                  <i>Click on Subject to view details</i>
                </small>
              </p> */}
              <div className="table-responsive">
                <table className="table_sem1_2 table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th rowSpan="2">
                        {" "}
                        <span>
                          GTU
                          <br />
                          Code
                        </span>{" "}
                      </th>
                      <th rowSpan="2">
                        {" "}
                        <span>
                          Known
                          <br />
                          As
                        </span>{" "}
                      </th>
                      <th rowSpan="2">
                        {" "}
                        <span>
                          Subject
                          <br />
                          Name
                        </span>{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="CHEMISTRY - Chemistry - GTU"
                          href="syllabus/sem_9/301.pdf"
                        >
                          3110001
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="301 - Chemistry - GTU"
                          href="syllabus/sem_9/301.pdf"
                        >
                          CHEMISTRY
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="301 - CHEMISTRY - GTU"
                          href="syllabus/sem_9/301.pdf"
                        >
                          Chemistry
                        </a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="CS - Communication Skills - GTU"
                          href="syllabus/sem_9/302.pdf"
                        >
                          3110002
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="302 - Communication Skills - GTU"
                          href="syllabus/sem_9/302.pdf"
                        >
                          english
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <Link to="/sem1_2_english">English</Link>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="CPU - Computer Programming and Utilization - GTU"
                          href="syllabus/sem_9/303.pdf"
                        >
                          3110003
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="303 - Computer Programming and Utilization - GTU"
                          href="syllabus/sem_9/303.pdf"
                        >
                          PPS
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <Link to="/sem1_2_pps">
                          Programming for Problem Solving
                        </Link>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="ECE - Elements of Civil Engineering - GTU"
                          href="syllabus/sem_9/304.pdf"
                        >
                          3110005
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="304 - Elements of Civil Engineering - GTU"
                          href="syllabus/sem_9/304.pdf"
                        >
                          BEE
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <Link to="/sem1_2_bee">
                          Basic Electrical Engineering
                        </Link>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="EEE - Elements of Electrical Engineering - GTU"
                          href="syllabus/sem_9/305.pdf"
                        >
                          3110006
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="305 - EEE - GTU"
                          href="syllabus/sem_9/305.pdf"
                        >
                          BME
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <Link to="sem1_2_bme">
                          Basic Mechanical Engineering
                        </Link>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="EME - Elements of Mechanical Engineering - GTU"
                          href="syllabus/sem_9/306.pdf"
                        >
                          3110007
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="306 - Elements of Mechanical Engineering - GTU"
                          href="syllabus/sem_9/306.pdf"
                        >
                          ES
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <Link to="/sem1_2_es">Environmental Science</Link>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="ES - Environmental Studies - GTU"
                          href="syllabus/sem_9/307.pdf"
                        >
                          3110012
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="307 - Environmental Studies - GTU"
                          href="syllabus/sem_9/307.pdf"
                        >
                          Workshop
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a title="307 - ES - GTU" href="syllabus/sem_9/307.pdf">
                          Workshop/ Manufacturing Practices
                        </a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="PHYSICS - Physics - GTU"
                          href="syllabus/sem_9/311.pdf"
                        >
                          3110013
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="311 - Physics - GTU"
                          href="syllabus/sem_9/311.pdf"
                        >
                          EGD
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <Link to="/sem1_2_egd">
                          Engineering Graphics & Design
                        </Link>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="WS - Workshop - GTU"
                          href="syllabus/sem_9/312.pdf"
                        >
                          3110014
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="312 - Workshop - GTU"
                          href="syllabus/sem_9/312.pdf"
                        >
                          Mathematics{" "}
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <Link to="/sem1_2_math1">Mathematics - 1</Link>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="EG - Engineering Graphics - GTU"
                          href="syllabus/sem_9/313.pdf"
                        >
                          3110015
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="313 - Engineering Graphics - GTU"
                          href="syllabus/sem_9/313.pdf"
                        >
                          Mathematics{" "}
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <Link to="sem1_2_math2">Mathematics - 2</Link>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="Maths-1 - Calculus - GTU"
                          href="syllabus/sem_9/314.pdf"
                        >
                          3110016
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="314 - Calculus - GTU"
                          href="syllabus/sem_9/314.pdf"
                        >
                          BE
                        </a>{" "}
                      </td>
                      <td>
                        <Link to="/sem1_2_BE">Basic Electronics</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="MATHS-II - Vector Calculus and Linear Algebra - GTU"
                          href="syllabus/sem_9/315.pdf"
                        >
                          3110017
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="315 - Vector Calculus and Linear Algebra - GTU"
                          href="syllabus/sem_9/315.pdf"
                        >
                          IP
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="315 - MATHS-II - GTU"
                          href="syllabus/sem_9/315.pdf"
                        >
                          {" "}
                          Induction Program
                        </a>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <a
                          title="BE - Basic Electronics - GTU"
                          href="syllabus/sem_9/316.pdf"
                        >
                          3110018
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <a
                          title="316 - Basic Electronics - GTU"
                          href="syllabus/sem_9/316.pdf"
                        >
                          physics
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <Link to="/sem1_2_phy"> Physicss</Link>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </th>
          </table>
        </body>
      </html>
    </>
  );
}
export default Sem1_2;
