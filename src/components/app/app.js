import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Vova', salary: 900, increase: false, like: false, id: 1},
                {name: 'Nadya', salary: 600, increase: false, like: false, id: 2},
                {name: 'Nastya', salary: 550, increase: false, like: false, id: 3},
                {name: 'Vika', salary: 200, increase: false, like: false, id: 4},
                {name: 'Yana', salary: 10000, increase: false, like: false, id: 5},
                {name: 'Sanat', salary: 15000, increase: true, like: true, id: 6}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 7
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(elem => elem.id !== id)}
        })
    }

    addItem = (name, salary) => {
        const newItem = {name: name, salary: salary, increase: false, like: false, id: this.maxId++}
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {data: newArr}
        })
    }

    onToggleProps = (id, props) => {
        this.setState(({data}) => ({
            data: data.map(elem => {
                if (elem.id === id) {
                    return {...elem, [props]: !elem[props]}
                }
                return elem
            })
        }))
    }

    searchEmp = (term, items) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like)
            case 'more10k':
                return items.filter(item => item.salary >= 10000)
            default:
                return items
        }
    }

    onSetTerm = (term) => {
        this.setState({term})
    }

    onSetSalary = (name, salary) => {
        this.setState((state) => ({
            data: state.data.map(item => {
                if(item.name === name) {
                    return {...item, salary}
                }
                return item;
            })
        }))
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {term, data, filter} = this.state
        const students = this.state.data.length
        const lucky = this.state.data.filter(elem => elem.increase).length
        const visibleData = this.filterPost(this.searchEmp(term, data), filter)

        return (
            <div className="app">
                <AppInfo 
                    students={students}
                    lucky={lucky}/>
    
                <div className="search-panel">
                    <SearchPanel onSetTerm={this.onSetTerm}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeersList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProps={this.onToggleProps}
                    onSetSalary={this.onSetSalary}/>
                <EmployeersAddForm addItem={this.addItem}/>
            </div>
        )
    }
}

export default App;