import { Card, CardContent, Typography } from '@mui/material';
import { useGetList, useRecordContext } from 'react-admin';

export const DepartmentStats = () => {
  const employee = useRecordContext();
  const { total, isPending } = useGetList(
    'employees',
    {
      filter: { department: employee?.department, active: true },
      pagination: { page: 1, perPage: 1 },
      sort: { field: 'id', order: 'ASC' },
    },
    { enabled: Boolean(employee?.department) },
  );

  if (!employee) {
    return null;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Département</Typography>
        <Typography>{employee.department}</Typography>
        <Typography>{isPending ? 'Chargement...' : `${total ?? 0} collègue(s) actif(s)`}</Typography>
      </CardContent>
    </Card>
  );
};
