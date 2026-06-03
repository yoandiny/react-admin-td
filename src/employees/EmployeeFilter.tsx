import { SearchInput, SelectInput } from "react-admin";

export const EmployeeFilter = [
    <SearchInput source="q" alwaysOn key="search" />,
    <SelectInput
        source="department"
        label="Département"
        choices={[
            { id: 'Informatique', name: 'Informatique' },
            { id: 'Marketing', name: 'Marketing' },
            { id: 'RH', name: 'RH' },
        ]}
        key="department"
    />,
];
