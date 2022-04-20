import React from "react";
import { Link } from "react-router-dom";
function Sem3() {
  return (
    <>
      <table table_sem1_2 border="5px">
        <th>
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="panel-title">
                <h2>
                  <b>
                    <i class="fa fa-book font-green-sharp"></i>Semester : 3
                  </b>
                </h2>{" "}
              </div>
            </div>
            <div class="table-responsive">
              <table
                class="table_sem1_2 table-striped table-bordered table-hover"
                border="4px"
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
                        title="ETC - Effective Technical Communication - GTU"
                        href="syllabus/sem_3/316.pdf"
                      >
                        3130004
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="313 - Effective Technical Communication - GTU"
                        href="syllabus/sem_3/316.pdf"
                      >
                        ETC
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem3_etc">
                        Effective Technical Communication
                      </Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="PS - Probability and Statistics - GTU"
                        href="syllabus/sem_3/2130002.pdf"
                      >
                        3130006
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3130006 - Probability and Statistics - GTU"
                        href="syllabus/sem_3/2130002.pdf"
                      >
                        PS
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem3_ps">Probability and Statistics</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="IS - Indian Constitution - GTU"
                        href="syllabus/sem_3/3130007.pdf"
                      >
                        3130007
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="3130007 - Indian Constitution - GTU"
                        href="syllabus/sem_3/3130007.pdf"
                      >
                        IC
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem3_ic">Indian Constitution</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="DE-I - Design Engineering - I - GTU"
                        href="syllabus/sem_3/2130005.pdf"
                      >
                        3130008
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title=" Design Engineering - I - GTU"
                        href="syllabus/sem_3/2130005.pdf"
                      >
                        DE-I
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a title="  DE-I - GTU" href="syllabus/sem_3/2130005.pdf">
                        Design Engineering - Indian
                      </a>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="CS - Control System - GTU"
                        href="syllabus/sem_3/2130901.pdf"
                      >
                        3131101
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title="Control System - GTU"
                        href="syllabus/sem_3/2130901.pdf"
                      >
                        CS
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem3_cs">Control System</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="DSD - Diigital System Design - GTU"
                        href="syllabus/sem_3/2131004.pdf"
                      >
                        3131102
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title=" Diigital System Design - GTU"
                        href="syllabus/sem_3/2131004.pdf"
                      >
                        DSD
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem3_dsd">Digital System Design</Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <a
                        title="EM - Network Theory - GTU"
                        href="syllabus/sem_3/2131005.pdf"
                      >
                        3131103
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <a
                        title=" Network Theory - GTU"
                        href="syllabus/sem_3/2131005.pdf"
                      >
                        NT
                      </a>{" "}
                    </td>
                    <td>
                      {" "}
                      <Link to="/sem3_nt">Network Theory</Link>{" "}
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
export default Sem3;
