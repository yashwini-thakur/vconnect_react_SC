import React from "react";
import { Link } from "react-router-dom";
function Sem5() {
  return (
    <>
      <table table_sem1_2 border="5px">
        <th>
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="panel-title">
                <h2>
                  <b>
                    <i class="fa fa-book font-green-sharp"></i>Semester :5{" "}
                  </b>
                </h2>{" "}
              </div>
            </div>
            <div class="table-responsive">
              <table
                class="table_sem1_2 table-striped table-bordered table-hover"
                border="5px"
              >
                <thead>
                  <tr>
                    <th rowspan="2">
                      {" "}
                      <span>
                        GTU
                        <br />
                        Code
                      </span>{" "}
                    </th>
                    <th rowspan="2">
                      {" "}
                      <span>
                        Known
                        <br />
                        As
                      </span>{" "}
                    </th>
                    <th rowspan="2">
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
                        title="DE-2A - Design Engineering - II A - GTU"
                        href="syllabus/sem_5/DE-2A_5th%20sem%20-%20Course%20Abstract.pdf"
                      >
                        3150001
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3150001 - Design Engineering - II A - GTU"
                        href="syllabus/sem_5/DE-2A_5th%20sem%20-%20Course%20Abstract.pdf"
                      >
                        DE-2A
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3150001 - DE-2A - GTU"
                        href="syllabus/sem_5/DE-2A_5th%20sem%20-%20Course%20Abstract.pdf"
                      >
                        Design Engineering - II A
                      </a>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="CPD - Contributer Personality Development - GTU"
                        href="syllabus/sem_5/3150004.pdf"
                      >
                        3150004
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3150004 - Contributer Personality Development - GTU"
                        href="syllabus/sem_5/3150004.pdf"
                      >
                        CPD
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3150004 - CPD - GTU"
                        href="syllabus/sem_5/3150004.pdf"
                      >
                        Contributer Personality Development
                      </a>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="IPDC - Intigrated Personality Development Course - GTU"
                        href="syllabus/sem_5/3150005.pdf"
                      >
                        3150005
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3150005 - Intigrated Personality Development Course - GTU"
                        href="syllabus/sem_5/3150005.pdf"
                      >
                        IPDC
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3150005 - IPDC - GTU"
                        href="syllabus/sem_5/3150005.pdf"
                      >
                        Intigrated Personality Development Course
                      </a>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="POM - Principles Of Management - GTU"
                        href="syllabus/sem_5/3151103.pdf"
                      >
                        3151103
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3151103 - Principles Of Management - GTU"
                        href="syllabus/sem_5/3151103.pdf"
                      >
                        POM
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem5_pom">Principles Of Management</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="ADC - Analog & Digital Communication - GTU"
                        href="syllabus/sem_5/3151104.pdf"
                      >
                        3151104
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3151104 - Analog & Digital Communication - GTU"
                        href="syllabus/sem_5/3151104.pdf"
                      >
                        ADC
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem5_adc">
                        Analog & Digital Communication
                      </Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="VLSI - VLSI Design - GTU"
                        href="syllabus/sem_5/3151105.pdf"
                      >
                        3151105
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3151105 - VLSI Design - GTU"
                        href="syllabus/sem_5/3151105.pdf"
                      >
                        VLSI
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem5_vlsid">VLSI Design</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="PE - Power Electronics - GTU"
                        href="syllabus/sem_5/3151106.pdf"
                      >
                        3151106
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3151106 - Power Electronics - GTU"
                        href="syllabus/sem_5/3151106.pdf"
                      >
                        PE
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem5_pe">Power Electronics</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="PP -Python Programing - GTU"
                        href="syllabus/sem_5/3151108.pdf"
                      >
                        3151108
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3151108 - Python Programing - GTU"
                        href="syllabus/sem_5/3151108.pdf"
                      >
                        PP
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem5_pp">Python Programing</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="AM - Advanced Microcontroller - GTU"
                        href="syllabus/sem_5/3151107.pdf"
                      >
                        3151107
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3151107 - Advanced Microcontroller - GTU"
                        href="syllabus/sem_5/3151107.pdf"
                      >
                        AM
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3151107 - AM - GTU"
                        href="syllabus/sem_5/3151107.pdf"
                      >
                        Advanced Microcontroller
                      </a>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </th>
      </table>
    </>
  );
}
export default Sem5;
