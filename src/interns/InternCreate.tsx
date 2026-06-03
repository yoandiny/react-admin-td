import { BooleanInput, Create, FormDataConsumer, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput, email, required } from 'react-admin';

export const InternCreate = () => {
  return (
    <Create>
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
        <BooleanInput source="isRemunerate" label="Rémunéré" defaultValue={false} />
        <FormDataConsumer>
          {({ formData }) => formData.isRemunerate && (
            <NumberInput source="salary" label="Rémunération" validate={required()} />
          )}
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
};

