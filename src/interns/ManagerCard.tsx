import { Card, CardContent, Typography } from '@mui/material';
import { Link, useGetOne, useRecordContext } from 'react-admin';

export const ManagerCard = () => {
  const intern = useRecordContext();
  const { data, isPending, error } = useGetOne(
    'employees',
    { id: intern?.managerId },
    { enabled: Boolean(intern?.managerId) },
  );

  if (!intern?.managerId) {
    return null;
  }

  if (isPending) {
    return <Typography>Chargement du manager...</Typography>;
  }

  if (error) {
    return <Typography color="error">Manager indisponible</Typography>;
  }

  if (!data) {
    return <Typography>Aucun manager trouvé</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Manager</Typography>
        <Typography>
          <Link to={`/employees/${data.id}/show`}>{data.firstName} {data.lastName}</Link>
        </Typography>
        <Typography>{data.department}</Typography>
        <Typography>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </Typography>
        <Typography>{data.active ? 'Actif' : 'Inactif'}</Typography>
      </CardContent>
    </Card>
  );
};
