import './app-info.css'

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1 className="app-info-new">Учёт студентов группы 5А94</h1>
            <h2 className="app-info-new">KORECKAYA & CO</h2>
            <h2>Общее число студентов: {props.students}</h2>
            <h2>Стипендию получат: {props.lucky}</h2>
        </div>
    )
}

export default AppInfo;