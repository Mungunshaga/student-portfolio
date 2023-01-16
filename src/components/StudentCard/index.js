import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import QRCode from "react-qr-code";

const StudentCard = ({ student }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.StudentCard}>
      <QRCode size={100} value={student.portfolioUrl} className={styles.Qr} />
      <p>{student.name}</p>
    </div>
  );
};

export default StudentCard;
