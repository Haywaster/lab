import { Component } from 'react';

import './app-filter.css'

class AppFilter extends Component {    
    render() {
        const buttonsData = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'like', label: 'На повышку'},
            {name: 'more10k', label: 'Стипендия больше 10к'}
        ]

        const buttons = buttonsData.map(({name, label}) => {
            const active = this.props.filter === name
            const clazz = active ? 'btn-light' : 'btn-outline-light'
            return (
                <button
                    className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}>
                        {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default AppFilter;