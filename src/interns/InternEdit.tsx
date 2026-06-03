import { BooleanInput, Edit, FormDataConsumer, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput, email, required, useRecordContext } from 'react-admin';

const InternTitle = () => {
  const record = useRecordContext();
  return record ? <span>Modifier : {record.firstName} {record.lastName}</span> : null;
};

export const InternEdit = () => {
  return (
    <Edit title={<InternTitle />}>
      <SimpleForm>
        <TextInput source="firstName" label="Prénom" validate={required()} />
        <TextInput source="lastName" label="Nom" validate={required()} />
        <TextInput source="email" label="Email" type="email" validate={[required(), email()]} />
        <TextInput source="department" label="Département" validate={required()} />
        <FormDataConsumer>
          {({ formData }) => (
            <ReferenceInput
              source="managerId"
              reference="employees"
              label="Manager"
              filter={
                formData.department
                  ? { active: true, department: formData.department }
                  : { active: true }
              }
            >
              <SelectInput optionText={(record) => `${record.firstName} ${record.lastName}`} validate={required()} />
            </ReferenceInput>
          )}
        </FormDataConsumer>
        <BooleanInput source="isRemunerate" label="Rémunéré" />
        <FormDataConsumer>
          {({ formData }) => formData.isRemunerate && (
            <NumberInput source="salary" label="Rémunération" validate={required()} />
          )}
        </FormDataConsumer>
      </SimpleForm>
    </Edit>
  );
};

