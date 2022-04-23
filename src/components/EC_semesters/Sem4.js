import React from "react";
import { Link } from "react-router-dom";
function Sem4() {
  return (
    <>
      <table table_sem1_2 border="5px">
        <th>
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="panel-title">
                <h2>
                  <b>
                    <i class="fa fa-book font-green-sharp"></i>Semester : 4
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
                      <a title="DE2 - Design Engineering - I B - GTU">
                        2140005
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a title="Design Engineering - I B - GTU">DE2</a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a title="DE2 - GTU">Design Engineering - I B</a>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a href="syllabus/sem_4/3141002.pdf">3141002</a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a href="syllabus/sem_4/3141002.pdf">SS</a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem4_ss">Signals & System</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="PE - Professional - GTU"
                        href="syllabus/sem_4/3141007.pdf"
                      >
                        3141007
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3141007 - Professional - GTU"
                        href="syllabus/sem_4/3141007.pdf"
                      >
                        PE
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem4_pe">Professional Ethics</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="MM - Microprocessor & Microcontroller - GTU"
                        href="syllabus/sem_4/3141008.pdf"
                      >
                        3141008
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3141008 - Microprocessor & Microcontroller - GTU"
                        href="syllabus/sem_4/3141008.pdf"
                      >
                        MM
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem4_mm">
                        Microprocessor & Microcontroller
                      </Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="ET - Electromagnetic - GTU"
                        href="syllabus/sem_4/3141009.pdf"
                      >
                        3141009
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3141009 - Electromagnetic - GTU"
                        href="syllabus/sem_4/3141009.pdf"
                      >
                        ET
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem4_et">Electromagnetic Theory</Link>{" "}
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
export default Sem4;
