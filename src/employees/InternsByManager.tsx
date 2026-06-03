import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link, useGetList, useRecordContext } from 'react-admin';

export const InternsByManager = () => {
  const employee = useRecordContext();
  const { data, total, isPending } = useGetList(
    'interns',
    {
      filter: { managerId: employee?.id },
      pagination: { page: 1, perPage: 25 },
      sort: { field: 'lastName', order: 'ASC' },
    },
    { enabled: Boolean(employee?.id) },
  );

  if (!employee) {
    return null;
  }

  if (isPending) {
    return <Typography>Chargement des stagiaires...</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Stagiaires encadrés ({total ?? 0})</Typography>
        {!data?.length ? (
          <Typography>Aucun stagiaire encadré</Typography>
        ) : (
          <List dense>
            {data.map((intern) => (
              <ListItem key={intern.id} disablePadding>
                <ListItemText
                  primary={<Link to={`/interns/${intern.id}/show`}>{intern.firstName} {intern.lastName}</Link>}
                  secondary={`${intern.department} — ${intern.isRemunerate ? 'Rémunéré' : 'Non rémunéré'}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
};
