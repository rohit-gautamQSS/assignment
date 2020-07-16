/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { 
  Admin, 
  Resource, 
  ListGuesser , 
  List, 
  Datagrid, 
  TextField, 
  Show, 
  SimpleShowLayout,
  NumberInput,
  Create, 
  Edit, 
  SimpleForm,
	TextInput, 
	EditButton, 
	ShowButton, 
	required
} from 'react-admin';

import dataProvider from '../../dataProvider'

const UserList = (props) => {
  return <List {...props} title="List of users">
			<Datagrid>
				<TextField label="First Name" source="doc.firstName" />
				<TextField label="Last Name" source="doc.lastName" />
				<TextField label="Age" source="doc.age" />
				<EditButton />
				<ShowButton />
			}
			</Datagrid>
    </List>
  };
  
const UserShow = (props) => {
	return <Show title="User Details" {...props}>
		<SimpleShowLayout>
			<TextField label="First Name" source="doc.firstName" />
			<TextField label="Last" source="doc.lastName" />
			<TextField label="Age" source="doc.age" />
		</SimpleShowLayout>
	</Show>
};
  
const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
          <TextInput label="First Name" source="firstName" validate={required()}/>
					<TextInput label="Last Name" source="lastName" validate={required()} />
          <NumberInput label="Age" source="age" validate={required()}/>
        </SimpleForm>
    </Create>
);

const UserEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput label="First Name" source="doc.firstName" />
			<TextInput label="Last Name" source="doc.lastName" />
			<NumberInput label="Age" source="doc.age" />
		</SimpleForm>
	</Edit>
);

const App = (props) => (
	<Admin 
		dataProvider={dataProvider} 
		history={props.history}
	> 
		<Resource name="users" list={UserList} show={UserShow} create={UserCreate} edit={UserEdit}/>
	</Admin>
);

  
export default App;