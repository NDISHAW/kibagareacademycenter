import axios from "axios";
import "./index.js";
import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
function Students() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios("http://localhost:9292/students").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };
  // const emailFormatter = (data, row) => {
  //   return <span>Email = {data}</span>;
  // };
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    selected: [1, 3],
    clickToEdit: true,
  };
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "admision_number",
      text: "ADM_No",
      filter: textFilter(),

      sort: true,
      validator: (newValue, row, column) => {
        if (isNaN(newValue)) {
          return {
            valid: false,
            message: "Please enter numeric value",
          };
        }
        return true;
      },
    },
    {
      dataField: "Full_names",
      text: "Full_Names",
      sort: false,
      editable: true,
    },
    {
      dataField: "date_of_birth",
      text: "Date Of Birth",
      sort: false,
      editable: true,
    },
    // {
    //   dataField: "level",
    //   text: "CLASS",
    //   sort: false,
    //   editable: true,
    // },
    {
      dataField: "level",
      text: "CLASS",
      editor: {
        type: Type.SELECT,
        options: [
          {
            value: "Grade 1",
            label: "Grade 1",
          },
          {
            value: "Grade 2",
            label: "Grade 2",
          },
          {
            value: "Grade 3",
            label: "Grade 3",
          },
          {
            value: "Grade 4",
            label: "Grade 4",
          },
        ],
      },
    },
  ];

  // const updateStudent = () => {
  //   axios.put(`http://localhost:9292/students${admision_number}`,
  //   {
  //     Full_names,
  //     admision_number,
  //     date_of_birth,
  //     level,
  //     updated_at
  //   });
  // };
  return (
    <div className="App">
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({
          mode: "dbclick",
          blurToSave: true,
          nonEditableColumns: () => [1, 2, 3],
        })}
        selectRow={selectRow}
        filter={filterFactory()}
      />
      {/* <button onClick={updateStudent}>Update STUDENT</button> */}
    </div>
  );
}

export default Students;
