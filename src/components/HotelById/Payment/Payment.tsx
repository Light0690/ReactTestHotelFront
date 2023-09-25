import { useState } from "react";
import cn from "classnames";

import UiButton from "@ui/UiButton";

import styles from "./Payment.module.scss";

interface Props {
  price: number;
}

const Payment = ({ price }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className={cn("block", styles.wrapper)}>
      <div className={styles.wrapper__flex}>
        <h4>Стоимость номера</h4>
        <span className={styles.wrapper__price}>{price} ₽</span>
      </div>
      <div className={styles.wrapper__flex}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span className={styles.wrapper__promo}>У меня есть промокод</span>
      </div>
      {isChecked && (
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
      )}
      <hr className={styles.wrapper__hr} />
      <h4>Итого: {price} ₽</h4>
      <div>
        <UiButton title="оплатить" size="large" onClick={() => console.log()} />
      </div>
    </div>
  );
};

export default Payment;