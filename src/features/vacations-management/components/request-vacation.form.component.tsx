import { Button, DatePicker, Form, Input, Space } from 'antd';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { requestVacationFormValidations } from '../validations/request-vacation-form-validations';
import FormItem from 'antd/es/form/FormItem';
import { useState } from 'react';
import type { RequestVacationForm } from '../interfaces/request-vacation-form.interface';
import { cn } from '../../../utils/cn';
import { VacationsManagementService } from '../services/vacations-management.service';

export const RequestVacationFormComponent = () => {
  const [diasUtilizados, setDiasUtilizados] = useState(null);
  const [step, setStep] = useState(1);

  const formik = useFormik<RequestVacationForm>({
    initialValues: {
      name: '',
      startDate: dayjs(new Date()),
      lastDate: dayjs(new Date()).add(1, 'day'),
    },
    validationSchema: requestVacationFormValidations,
    onSubmit: (values) => {
      if (step === 1) {
        const diff = values.lastDate.diff(values.startDate, 'day');
        setDiasUtilizados(diff);
        console.log('Formulario:', values);
        console.log('fecha de inicio:', values.startDate.toDate());
        return setStep(2);
      }

      if (step === 2) {
        alert('Vacaciones solicitadas exitosamente');
        VacationsManagementService.createVacationRequest(values);
        formik.resetForm();
        return setStep(1);
      }

      return alert('error, step no válido');
    },
  });

  return (
    <>
      <Form layout="vertical" onFinish={formik.handleSubmit}>
        <div className={cn(step === 2 ? 'hidden' : 'block')}>
          <p>Programa tus 30 dias de vacaciones restantes</p>
          <FormItem
            required
            label="Nombre"
            validateStatus={
              formik.errors.name && formik.touched.name ? 'error' : ''
            }
            help={formik.touched.name && formik.errors.name}
          >
            <Input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormItem>

          <FormItem
            label="Fecha de inicio de vacaciones"
            required
            validateStatus={
              formik.errors.startDate && formik.touched.startDate ? 'error' : ''
            }
            help={
              formik.touched.startDate && (formik.errors.startDate as string)
            }
          >
            <DatePicker
              format="YYYY-MM-DD"
              value={formik.values.startDate}
              onChange={(date) => formik.setFieldValue('startDate', date)}
              onBlur={() => formik.setFieldTouched('startDate', true)}
            />
          </FormItem>

          <FormItem
            required
            label="Fecha de fin de vacaciones"
            validateStatus={
              formik.errors.lastDate && formik.touched.lastDate ? 'error' : ''
            }
            help={formik.touched.lastDate && (formik.errors.lastDate as string)}
          >
            <DatePicker
              format="YYYY-MM-DD"
              value={formik.values.lastDate}
              onChange={(date) => formik.setFieldValue('lastDate', date)}
              onBlur={() => formik.setFieldTouched('lastDate', true)}
            />
          </FormItem>
        </div>
        {step === 1 && (
          <FormItem>
            <Button type="primary" htmlType="submit">
              Continuar
            </Button>
          </FormItem>
        )}

        {diasUtilizados !== null && step === 2 && (
          <>
            <FormItem label="Confirme los días a utilizar">
              <Input value={`${diasUtilizados} día(s)`} readOnly />
            </FormItem>
            <Space direction="horizontal" style={{ width: '100%' }}>
              <FormItem>
                <Button
                  type="dashed"
                  htmlType="reset"
                  onClick={() => {
                    setDiasUtilizados(null);
                    setStep(1);
                  }}
                >
                  Cancelar
                </Button>
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  Confirmar
                </Button>
              </FormItem>
            </Space>
          </>
        )}
      </Form>
    </>
  );
};
