import { BooleanField, Datagrid, DeleteButton, EditButton, FunctionField, List, NumberField, ReferenceField, TextField } from 'react-admin';

const internFilters = [
  <TextField source="department" label="Département" key="department" />,
  <BooleanField source="isRemunerate" label="Rémunéré" key="isRemunerate" />,
];

export const InternList = () => (
  <List perPage={5} filters={internFilters}>
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

