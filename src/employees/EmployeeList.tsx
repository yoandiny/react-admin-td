import { BooleanField, Datagrid, List, TextField, EditButton, DeleteButton } from 'react-admin';
import { EmployeeFilter } from './EmployeeFilter';
import { QuickStatusToggle } from './QuickStatusToggle';

export const EmployeeList = () => (
  <List perPage={5} filters={EmployeeFilter}>
    <Datagrid rowClick="show">
      <TextField source="id" label="ID" />
      <TextField source="firstName" label="Prénom" />
      <TextField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <TextField source="salary" label="Salaire" />
      <BooleanField source="active" label="Actif" />
      <QuickStatusToggle />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
