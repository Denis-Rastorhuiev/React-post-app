import React, {useMemo} from 'react';
import {getPagesArray} from "../../../hooks/usePagination";

const Pagination = ({totalPages,page,changePage}) => {
    let pagesArray = useMemo(()=>{
        return getPagesArray(totalPages)
    },[totalPages])

    return (
        <div>
            <div className="page__wrapper">
                {pagesArray.map(p =>
                    <span
                        onClick={()=>changePage(p)}
                        key={p}
                        className={p === page ? "page page__current" : "page"}
                    >
                      {p}
                  </span>
                )}
            </div>
        </div>
    );
};

export default Pagination;