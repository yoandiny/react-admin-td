import { BooleanField, Datagrid, List, ReferenceField, TextField, EditButton, DeleteButton } from 'react-admin';
import { EmployeeFilter } from '../employees/EmployeeFilter';

export const InternList = () => (
  <List perPage={5} filters={EmployeeFilter}>
    <Datagrid rowClick="show">
      <TextField source="id" label="ID" />
      <TextField source="firstName" label="Prénom" />
      <TextField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <BooleanField source="isPaid" label="Rémunéré" />
      <ReferenceField source="referentId" reference="employees" label="Référent">
        <TextField source="firstName" />
      </ReferenceField>
      <BooleanField source="active" label="Actif" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
