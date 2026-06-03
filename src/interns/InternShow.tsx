import { Box } from '@mui/material';
import { BooleanField, FunctionField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { ManagerCard } from './ManagerCard';

export const InternShow = () => (
  <Show>
    <Box display="grid" gap={2} gridTemplateColumns={{ xs: '1fr', md: '2fr 1fr' }}>
      <SimpleShowLayout>
        <FunctionField label="Nom complet" render={(record) => `${record.firstName} ${record.lastName}`} />
        <TextField source="email" label="Email" />
        <TextField source="department" label="Département" />
        <ReferenceField source="managerId" reference="employees" label="Manager" link="show">
          <FunctionField render={(record) => `${record.firstName} ${record.lastName}`} />
        </ReferenceField>
        <BooleanField source="isRemunerate" label="Rémunéré" />
        <NumberField source="salary" label="Rémunération" options={{ style: 'currency', currency: 'EUR' }} emptyText="-" />
      </SimpleShowLayout>
      <ManagerCard />
    </Box>
  </Show>
);
