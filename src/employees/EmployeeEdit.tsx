import { Edit, SimpleForm, TextInput, BooleanInput, NumberInput, useRecordContext } from 'react-admin';

const EmployeeRecordSummary = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <div style={{ marginBottom: '1rem', padding: '0.75rem', border: '1px solid #ddd', borderRadius: 4 }}>
      <strong>Résumé employé :</strong> {record.firstName} — {record.department} — {record.active ? 'Actif' : 'Inactif'}
    </div>
  );
};

export const EmployeeEdit = () => (
  <Edit>
    <SimpleForm>
      <EmployeeRecordSummary />
      <TextInput source="firstName" label="Prénom" />
      <TextInput source="email" label="Email" type="email" />
      <TextInput source="department" label="Département" />
      <NumberInput source="salary" label="Salaire" />
      <BooleanInput source="active" label="Actif" />
    </SimpleForm>
  </Edit>
);
