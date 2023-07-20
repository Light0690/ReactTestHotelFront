import { FC } from "react";

import { useAppDispatch } from "@redux/hooks";
import { setAuth } from "@redux/slices/authSlice";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const dispath = useAppDispatch();

  const onClick = () => {
    dispath(setAuth(false));
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>Simple Hotel Check</div>
      <div className={styles.header__icon} onClick={onClick}>
        <span>Выйти</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 771">
            <g id="log out">
              <path
                id="Vector"
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="#41522E"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M16 17L21 12L16 7"
                stroke="#41522E"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M21 12H9"
                stroke="#41522E"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;