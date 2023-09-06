import cn from "classnames";

import styles from "./UiAlert.module.scss";

interface Props {
  message: String;
  isHidden: Boolean;
}

const UiAlert = ({ message, isHidden }: Props) => {
  return (
    <div className={cn(styles.wrapper, isHidden ? styles.wrapper__hidden : "")}>
      <h3>{message}</h3>
    </div>
  );
};

export default UiAlert;