import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { Login } from "@trq-fundacion/frontend-design-system";

export default function LoginPage() {
  return (
    <div className={styles.general}>
      aqui estara el login
      <Link className={styles.link} to="/user/dashboard">
        <button className={styles.buttontolink}>
          click aqui para simular login
        </button>
      </Link>
    </div>
  );
}