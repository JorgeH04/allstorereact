import React from "react";
import { UpdateContext } from "../../context/update";
import UpdateList from "./UpdateList";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
export default function PaginatedProducts() {
  const { sorted, page, changePage } = React.useContext(UpdateContext);


  if (sorted[page]) {
    return (
      <section>
        <UpdateList update={sorted[page]}></UpdateList>



        {/* buttons */}
        {sorted.length > 1 && (
          <article className="pagination-buttons">
            {/* prev button */}
            {page > 0 && (
              <button
                onClick={() => changePage(page - 1)}
                className="prev-page-btn"
              >
                <FaAngleDoubleLeft></FaAngleDoubleLeft>
              </button>
            )}



            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              );
            })}



            
            {/* next button */}
            {page < sorted.length - 1 && (
              <button
                onClick={() => changePage(page + 1)}
                className="next-page-btn"
              >
                <FaAngleDoubleRight></FaAngleDoubleRight>
              </button>
            )}
          </article>
        )}




      </section>
    );



    
  } else {
    return (
      <h3 className="search-errors">
        lamentablemente su búsqueda no coincidió con ninguno de los productos
      </h3>
    );
  }
}
