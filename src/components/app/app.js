import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css'

const data = [
    {name: 'Vova', salary: 800, increase: true},
    {name: 'Nikita', salary: 300, increase: false},
    {name: 'Sanat', salary: 1500, increase: true}
]

function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeersList data={data}/>
            <EmployeersAddForm/>
        </div>
    )
}

export default App;