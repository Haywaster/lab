import { Component } from 'react'

import './employeers-list-item.css'

class EmployeersListItem extends Component {
    constructor (props) {
        super (props)
        this.state = {
            currentSalary: this.props.salary
        }
    }

    onValueChange = (e) => {
        const value = e.target.value.slice(0, -1);
        this.setState({currentSalary: value});
        this.props.onSetSalary(this.props.name, value);
    }
    
    render() {
        const {name, salary, onDelete, onToggleProps, increase, like} = this.props

        let classNames = "list-group-item d-flex justify-content-between"
        if (increase) {
            classNames += ' increase'
        }
        if (like) {
            classNames += ' like'
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                        onClick={onToggleProps} 
                        data-toggle="like">{name}</span>
                <input type="text" 
                    className="list-group-item-input"
                    onChange={this.onValueChange} 
                    defaultValue={salary + '$'}
                    onChange={this.onValueChange}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProps}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}
                            data-toggle="like">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeersListItem;