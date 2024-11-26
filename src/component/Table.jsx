import React, { useState } from "react";
import '../Style/Table.css'

const Table = ({ cargoList, setCargoList }) => {
    const [selectedStatus, setSelectedStatus] = useState("Ожидает отправки");
    const [error, setError] = useState(""); // Состояние для ошибки
    const option = ["Ожидает отправки", "В пути", "Доставлен"];

    const handleStatusChange = (id, newStatus, departureDate) => {

        const currentDate = new Date();

        if (newStatus === "Доставлен" && new Date(departureDate) > currentDate) {
            setError("Ошибка: нельзя установить статус 'Доставлен', так как дата отправления в будущем!");
            return;
        }


        setError("");
        const updatedCargoList = cargoList.map((cargo) =>
            cargo.id === id ? { ...cargo, status: newStatus } : cargo
        );
        setCargoList(updatedCargoList);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "Ожидает отправки":
                return "status-pending";
            case "В пути":
                return "status-in-transit";
            case "Доставлен":
                return "status-delivered";
            default:
                return "";
        }
    };

    const filteredCargoList = cargoList.filter((cargo) => cargo.status === selectedStatus);

    return (
        <div>
            {error && <div className="alert alert-danger">{error}</div>} {/* Сообщение об ошибке */}
            <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="form-control mb-3"
            >
                {option.map((status) => (
                    <option key={status} value={status}>{status}</option>
                ))}
            </select>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Статус</th>
                        <th>Пункт отправления</th>
                        <th>Пункт назначения</th>
                        <th>Дата отправления</th>
                        <th>Изменить статус</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCargoList.length > 0 ? (
                        filteredCargoList.map((cargo) => (
                            <tr key={cargo.id}>
                                <td>{cargo.id}</td>
                                <td>{cargo.name}</td>
                                <td className={getStatusClass(cargo.status)}>{cargo.status}</td>
                                <td>{cargo.origin}</td>
                                <td>{cargo.destination}</td>
                                <td>{cargo.departureDate}</td>
                                <td>
                                    <select
                                        value={cargo.status}
                                        onChange={(e) => handleStatusChange(cargo.id, e.target.value, cargo.departureDate)}
                                        className="form-control"
                                    >
                                        {option.map((status) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">
                                Данные отсутствуют
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
