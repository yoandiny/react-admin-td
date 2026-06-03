import { BooleanField, BooleanInput, CreateButton, Datagrid, DeleteButton, EditButton, FunctionField, List, NumberField, ReferenceField, TextField, TextInput, TopToolbar } from 'react-admin';
import { QuickInternCreateButton } from './QuickInternCreateButton';

const internFilters = [
  <TextInput source="department" label="Département" key="department" />,
  <BooleanInput source="isRemunerate" label="Rémunéré" key="isRemunerate" />,
];

const InternListActions = () => (
  <TopToolbar>
    <QuickInternCreateButton />
    <CreateButton />
  </TopToolbar>
);

export const InternList = () => (
  <List perPage={5} filters={internFilters} actions={<InternListActions />}>
    <Datagrid rowClick="show">
      <FunctionField label="Nom complet" render={(record) => `${record.firstName} ${record.lastName}`} />
      <TextField source="email" label="Email" />
      <TextField source="department" label="Département" />
      <ReferenceField source="managerId" reference="employees" label="Manager">
        <FunctionField render={(record) => `${record.firstName} ${record.lastName}`} />
      </ReferenceField>
      <BooleanField source="isRemunerate" label="Rémunéré" />
      <NumberField source="salary" label="Rémunération" options={{ style: 'currency', currency: 'EUR' }} emptyText="-" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

