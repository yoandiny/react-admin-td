import { Create, SimpleForm, TextInput, BooleanInput, ReferenceInput, SelectInput } from 'react-admin';

export const InternCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="firstName" label="Prénom" />
      <TextInput source="email" label="Email" type="email" />
      <TextInput source="department" label="Département" />
      <BooleanInput source="isPaid" label="Rémunéré" defaultValue={false} />
      <ReferenceInput source="referentId" reference="employees" label="Référent">
        <SelectInput optionText="firstName" />
      </ReferenceInput>
      <BooleanInput source="active" label="Actif" defaultValue={true} />
    </SimpleForm>
  </Create>
);
