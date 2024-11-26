import '../Style/Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({ formData, handleChange, handleAddCargo }) => {
    return (
        <div className="form">
            {/* Вызываем handleAddCargo при отправке формы */}
            <form className="mb-4 form-inner" onSubmit={handleAddCargo}>
                <div className="form-group">
                    <label className="group-title" htmlFor="cargoName">Название груза</label>
                    <input
                        type="text"
                        id="cargoName"
                        name="name" // Добавляем name, чтобы handleChange знал, какое поле обновлять
                        className="form-control"
                        placeholder="Введите название груза"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="group-title" htmlFor="cargoOrigin">Пункт отправления</label>
                    <input
                        type="text"
                        id="cargoOrigin"
                        name="origin"
                        className="form-control"
                        placeholder="Город отправления"
                        value={formData.origin}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="group-title" htmlFor="cargoDestination">Пункт назначения</label>
                    <input
                        type="text"
                        id="cargoDestination"
                        name="destination"
                        className="form-control"
                        placeholder="Город назначения"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="group-title" htmlFor="cargoDepartureDate">Дата отправления</label>
                    <input
                        type="date"
                        id="cargoDepartureDate"
                        name="departureDate"
                        className="form-control"
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Добавить груз</button>
            </form>
        </div>
    );
};

export default Form;
