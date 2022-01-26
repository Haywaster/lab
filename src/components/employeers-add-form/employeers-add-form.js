import { Component } from 'react';

import './employeers-add-form.css'

class EmployeersAddForm extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name: '',
            salary: '',
            inputText: 'Как его зовут?',
            inputNumber: 'Степа в $?'
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length >= 3 && this.state.salary >= 100) {
            this.props.addItem(this.state.name, this.state.salary)
        } else {
        this.setState({
            inputText: 'Имя min 3 буквы, ёпт',
            inputNumber: 'Сюда min 100$!'
        })
        setTimeout(() =>
            this.setState({
                inputText: 'Как его зовут?',
                inputNumber: 'Степа в $?'
            }), 4000
        )
    }
        this.setState({
            name:'',
            salary:''
        })
    }

    render() {
        const {name, salary, inputText, inputNumber} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового студента</h3>
                <form
                    onSubmit = {this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder={inputText}
                        onChange={this.onValueChange}
                        name='name'
                        value={name} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder={inputNumber}
                        onChange={this.onValueChange}
                        name='salary'
                        value={salary} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeersAddForm;