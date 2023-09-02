import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function WhoAmI(props) {
  return (
    <div>
      <h1>
        My name is {props.name} , surname - {props.surname}
      </h1>
      <a href={props.link}>my profile</a>
    </div>
  );
}
function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList />
      <EmployeesAddForm />
      <WhoAmI name="Jack" surname="Smitd" link="google.com" />
      <WhoAmI name="Jakson" surname="Smoth" link="ya.com" />
    </div>
  );
}

export default App;
