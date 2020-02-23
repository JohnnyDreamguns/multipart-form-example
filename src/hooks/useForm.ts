/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setForm, setFormField } from '../store/form/actions';
import { FormState, Fields } from '../store/form/types';
import { ObjStringVals } from '../types';

const useForm = (formName: string, initialFieldValues: Fields) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setForm({ formName, initialFieldValues }));
  }, [dispatch, formName]);

  const fieldValues: ObjStringVals = useSelector(
    (state: FormState) => state.form[formName] || {},
    shallowEqual
  );

  const onChange = useCallback(
    e => {
      const payload = { formName, field: e.target.name, value: e.target.value };
      dispatch(setFormField(payload));
    },
    [formName, dispatch]
  );

  const fields = {
    ...initialFieldValues,
    ...fieldValues
  };

  const exported = {
    fields,
    onChange
  };

  return exported;
};

export default useForm;
