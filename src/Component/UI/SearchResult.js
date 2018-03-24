
import React, { Component } from 'react';
import TableBodyComp from './TableBodyComp';
import TableHeadComp from './TableHeadComp';

const SearchResult = ({ result }) =>
    <div className="container-fluid">
        <table className="table table-hover">
            <TableHeadComp result={result} />
            <TableBodyComp result={result} />
        </table>
    </div>


export default SearchResult;
