import { Create, SimpleForm, TextInput, BooleanInput, NumberInput } from 'react-admin';

export const EmployeeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="firstName" label="Prénom" />
      <TextInput source="email" label="Email" type="email" />
      <TextInput source="department" label="Département" />
      <NumberInput source="salary" label="Salaire" />
      <BooleanInput source="active" label="Actif" defaultValue={true} />
    </SimpleForm>
  </Create>
);
