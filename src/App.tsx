
import { Admin, Resource } from 'react-admin';
import { Layout } from './Layout';
import { EmployeeList } from './employees/EmployeeList';
import { EmployeeCreate } from './employees/EmployeeCreate';
import { EmployeeEdit } from './employees/EmployeeEdit';
import { InternList } from './interns/InternList';
import { InternCreate } from './interns/InternCreate';
import { InternEdit } from './interns/InternEdit';
import { dataProvider } from './dataProvider';

export const App = () => (
    <Admin
        layout={Layout}
        dataProvider={dataProvider}
    >
        <Resource name="employees" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit} />
        <Resource name="interns" list={InternList} create={InternCreate} edit={InternEdit} />
    </Admin>
);

