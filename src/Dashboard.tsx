import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useGetList } from 'react-admin';

type IndicatorCardProps = {
  title: string;
  resource: string;
  filter?: Record<string, unknown>;
};

const IndicatorCard = ({ title, resource, filter = {} }: IndicatorCardProps) => {
  const { total, isPending } = useGetList(resource, {
    filter,
    pagination: { page: 1, perPage: 1 },
    sort: { field: 'id', order: 'ASC' },
  });

  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary">{title}</Typography>
        <Typography variant="h3">{isPending ? '...' : total ?? 0}</Typography>
      </CardContent>
    </Card>
  );
};

export const Dashboard = () => (
  <Grid container spacing={2}>
    <Grid size={{ xs: 12, md: 6 }}>
      <IndicatorCard title="Total employés" resource="employees" />
    </Grid>
    <Grid size={{ xs: 12, md: 6 }}>
      <IndicatorCard title="Employés actifs" resource="employees" filter={{ active: true }} />
    </Grid>
    <Grid size={{ xs: 12, md: 6 }}>
      <IndicatorCard title="Total stagiaires" resource="interns" />
    </Grid>
    <Grid size={{ xs: 12, md: 6 }}>
      <IndicatorCard title="Stagiaires rémunérés" resource="interns" filter={{ isRemunerate: true }} />
    </Grid>
  </Grid>
);
