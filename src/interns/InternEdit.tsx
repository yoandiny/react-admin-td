import { Edit, SimpleForm, TextInput, BooleanInput, ReferenceInput, SelectInput, FormDataConsumer, NumberInput } from 'react-admin';

export const InternEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="firstName" label="Prénom" />
        <TextInput source="email" label="Email" type="email" />
        <TextInput source="department" label="Département" />
        <FormDataConsumer>
          {({ formData }) => (
            <ReferenceInput
              source="referentId"
              reference="employees"
              label="Référent (Actif, même département)"
              filter={
                formData.department
                  ? { active: true, department: formData.department }
                  : { active: true }
              }
            >
              <SelectInput optionText="firstName" />
            </ReferenceInput>
          )}
        </FormDataConsumer>
        <BooleanInput source="isPaid" label="Rémunéré" />
        <FormDataConsumer>
          {({ formData }) => formData.isPaid && (
            <NumberInput source="salary" label="Salaire" />
          )}
        </FormDataConsumer>
        <BooleanInput source="active" label="Actif" defaultValue={true} />
      </SimpleForm>
    </Edit>
  );
};

