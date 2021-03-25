import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import "../components/styles/components/Tabla.css";

export default function SelectSearchTopReverse({ datatable }) {
    return (
        <MDBDataTableV5
            hover
            entriesOptions={[5, 10, 20, 50]}
            entries={10}
            pagesAmount={4}
            data={datatable}
            pagingTop
            searchTop
            searchBottom={false}
            barReverse
            responsive
        />
    );
}
