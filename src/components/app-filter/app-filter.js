import './app-filter.css'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                    Все сотрудники
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    На повышку
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Стипендия больше 10к
            </button>
        </div>
    )
}

export default AppFilter;