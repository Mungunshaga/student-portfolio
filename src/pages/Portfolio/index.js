import React from "react";
import { studentData } from "./studentData";
import styles from "./style.module.scss";
import StudentCard from "../../components/StudentCard";
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {
  return (
    <div>
      <h2>Pinecone Leap - Azure Students portfolio</h2>
      <Fade cascade>
        <div className={styles.Container}>
          {studentData.map((student) => {
            return <StudentCard student={student} />;
          })}
        </div>
      </Fade>
    </div>
  );
};

export default Portfolio;
