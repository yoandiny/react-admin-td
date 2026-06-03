import { Button, useNotify, useRecordContext, useRefresh, useUpdate } from 'react-admin';

export const QuickStatusToggle = () => {
  const record = useRecordContext();
  const notify = useNotify();
  const refresh = useRefresh();
  const [update, { isPending }] = useUpdate();

  if (!record) {
    return null;
  }

  const nextActive = !record.active;

  const handleClick = () => {
    update(
      'employees',
      {
        id: record.id,
        data: { active: nextActive },
        previousData: record,
        meta: { method: 'PATCH' },
      },
      {
        onSuccess: () => {
          notify(nextActive ? 'Employé activé' : 'Employé désactivé', { type: 'info' });
          refresh();
        },
        onError: () => notify('La mise à jour a échoué', { type: 'error' }),
      },
    );
  };

  return (
    <Button
      label={record.active ? 'Désactiver' : 'Activer'}
      color={record.active ? 'error' : 'success'}
      disabled={isPending}
      onClick={handleClick}
    />
  );
};
