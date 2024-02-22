import React, { useState } from 'react';

function PaginatedTable({ data, itemsPerPage }) {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data && data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="container">
            <div className="table-responsive">
    <table className="table table-striped">
        <thead className="table-primary">
            <tr>
                <th className="col-4">Title</th>
                <th className="col-2">Year</th>
                <th className="col-2">Genre</th>
                <th className="col-4">Actors</th>
            </tr>
        </thead>
        <tbody>
            {currentData.map((movie) => (
                <tr key={movie.id}>
                    <td className="col-4">{movie.name}</td>
                    <td className="col-2">{movie.year}</td>
                    <td className="col-2">{movie.genre}</td>
                    <td className="col-4">
                        {movie.actors.map((actor) => (
                            <span key={actor.id}>{actor.name}, </span>
                        ))}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

{/* Estilos para el paginado */}
<nav aria-label="Page navigation">
    <ul className="pagination justify-content-center">
        {Array.from({ length: totalPages }, (_, index) => (
            <li className="page-item" key={index}>
                <button
                    className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </button>
            </li>
        ))}
    </ul>
</nav>
    </div>
    );
}

export default PaginatedTable;
