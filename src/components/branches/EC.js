import React from "react";
import { Link } from "react-router-dom";

function EC() {
  return (
    <>
      <div className="sem_body">
        <div className="row_for_sem">
          <div className="column_for_sem">
            <div className="card_for_sem">
              <Link to="/sem1_2">
                <h3>Semester 1</h3>
              </Link>
            </div>
          </div>

          <div className="column_for_sem">
            <div className="card_for_sem">
              <Link to="/sem1_2">
                <h3>Semester 2</h3>
              </Link>
            </div>
          </div>

          <div className="column_for_sem">
            <div className="card_for_sem">
              <Link to="/sem3">
                <h3>Semester 3</h3>
              </Link>
            </div>
          </div>

          <div className="column_for_sem">
            <div className="card_for_sem">
              <Link to="/sem4">
                <h3>Semester 4</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="row_for_sem">
          <div className="column_for_sem">
            <div className="card_for_sem">
              <Link to="/sem5">
                <h3>Semester 5</h3>
              </Link>
            </div>
          </div>

          <div className="column_for_sem">
            <div className="card_for_sem">
              <Link to="/sem6">
                <h3>Semester 6</h3>
              </Link>
            </div>
          </div>

          <div className="column_for_sem">
            <div className="card_for_sem">
              <Link to="/sem7">
                <h3>Semester 7</h3>
              </Link>
            </div>
          </div>

          <div className="column_for_sem">
            <div className="card_for_sem">
              <Link to="/sem8">
                <h3>Semester 8</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EC;
