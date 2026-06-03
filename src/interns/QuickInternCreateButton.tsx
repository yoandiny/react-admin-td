import { Button as MuiButton, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from '@mui/material';
import { FormEvent, useState } from 'react';
import { Button, useCreate, useGetList, useNotify, useRefresh } from 'react-admin';

export const QuickInternCreateButton = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [managerId, setManagerId] = useState('');
  const notify = useNotify();
  const refresh = useRefresh();
  const [create, { isPending }] = useCreate();
  const { data: managers = [] } = useGetList('employees', {
    filter: { active: true },
    pagination: { page: 1, perPage: 100 },
    sort: { field: 'lastName', order: 'ASC' },
  });

  const close = () => setOpen(false);

  const reset = () => {
    setFirstName('');
    setLastName('');
    setManagerId('');
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const manager = managers.find((item) => String(item.id) === managerId);

    create(
      'interns',
      {
        data: {
          firstName,
          lastName,
          managerId: Number(managerId),
          email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
          department: manager?.department ?? '',
          isRemunerate: false,
          salary: null,
        },
      },
      {
        onSuccess: () => {
          reset();
          close();
          refresh();
          notify('Stagiaire créé', { type: 'info' });
        },
        onError: () => notify('La création a échoué', { type: 'error' }),
      },
    );
  };

  return (
    <>
      <Button label="Ajouter stagiaire rapide" onClick={() => setOpen(true)} />
      <Dialog open={open} onClose={close} fullWidth maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <DialogTitle>Ajouter stagiaire rapide</DialogTitle>
          <DialogContent sx={{ display: 'grid', gap: 2, pt: 2 }}>
            <TextField label="Prénom" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
            <TextField label="Nom" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
            <TextField select label="Manager" value={managerId} onChange={(event) => setManagerId(event.target.value)} required>
              {managers.map((manager) => (
                <MenuItem key={manager.id} value={manager.id}>
                  {manager.firstName} {manager.lastName}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <DialogActions>
            <MuiButton onClick={close}>Annuler</MuiButton>
            <MuiButton type="submit" variant="contained" disabled={isPending}>Créer</MuiButton>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
