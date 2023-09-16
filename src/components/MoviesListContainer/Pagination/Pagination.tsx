import React, { ChangeEvent } from 'react'
import { Pagination as RowPagination } from '@mui/material';

import './Pagination.scss';
interface IPaginationProps {
    count?: number,
    page?: number
    handleChangePage?: (event: ChangeEvent<unknown>, page: number) => void
}

export const Pagination = ({ page, count = 500, handleChangePage }: IPaginationProps) => {

    return (
        <>
            <RowPagination
                className={'custom-pagination'}
                count={count}
                color="primary"
                page={page}
                onChange={handleChangePage}
            />
        </>
    )
}
