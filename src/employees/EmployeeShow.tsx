import { Box } from '@mui/material';
import { BooleanField, FunctionField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { DepartmentStats } from './DepartmentStats';
import { InternsByManager } from './InternsByManager';

export const EmployeeShow = () => (
  <Show>
    <Box display="grid" gap={2} gridTemplateColumns={{ xs: '1fr', md: '2fr 1fr' }}>
      <SimpleShowLayout>
        <FunctionField label="Nom complet" render={(record) => `${record.firstName} ${record.lastName ?? ''}`.trim()} />
        <TextField source="email" label="Email" />
        <TextField source="department" label="Département" />
        <NumberField source="salary" label="Salaire" options={{ style: 'currency', currency: 'EUR' }} />
        <BooleanField source="active" label="Actif" />
      </SimpleShowLayout>
      <Box display="grid" gap={2}>
        <InternsByManager />
        <DepartmentStats />
      </Box>
    </Box>
  </Show>
);
