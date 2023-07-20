import { useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

import { setSearchForm } from "@redux/slices/hotelsSlice";
import { getHotelsAsync } from "@redux/sagas/hotelsSaga";

import UiButton from "@ui/UiButton";
import UiInput from "@ui/UiInput";

import styles from "./FormSearch.module.scss";

const SignupSchema = Yup.object().shape({
  location: Yup.string().required("*поле обязательно"),
  checkInDate: Yup.string().required("*поле обязательно"),
  countDays: Yup.number()
    .typeError("*поле должно содержать только цифры")
    .required("*поле обязательно"),
});

interface formValues {
  location: string;
  checkInDate: string;
  countDays: number;
}

export const FormSearch = () => {
  const location = useAppSelector((state) => state.hotels.location);
  const checkInDate = useAppSelector((state) => state.hotels.checkInDate);
  const countDays = useAppSelector((state) => state.hotels.countDays);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHotelsAsync());
  }, []);

  const submitForm = (values: formValues) => {
    dispatch(setSearchForm(values));
    dispatch(getHotelsAsync());
  };

  return (
    <div>
      <Formik
        initialValues={{
          location,
          checkInDate,
          countDays,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {() => (
          <Form className={styles.form}>
            <Field component={UiInput} name="location" title="Локация" />
            <Field
              component={UiInput}
              name="checkInDate"
              type="Date"
              title="Дата заселения"
            />
            <Field
              component={UiInput}
              name="countDays"
              title="Колличество дней"
            />
            <UiButton type="submit" disabled={false} title={"Найти"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSearch;