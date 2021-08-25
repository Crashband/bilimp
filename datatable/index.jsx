import React, { useState, useEffect } from "react";
import "./datatable.css";

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  const [currentColumn, setCurrentColumn] = useState("Kimden");
  const [q, setQ] = useState("Arda");
  const [searchedData, setSearchedData] = useState([]);
  function search(rows) {
    return rows.filter((row) =>
      currentColumn === "Kimden"
        ? row[currentColumn][0].name
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        : row[currentColumn].toString().toLowerCase().indexOf(q.toLowerCase()) >
          -1
    );
  }
  function setColumn(key) {
    switch (key) {
      case 1:
        setCurrentColumn("Kimden");
        break;
      case 2:
        setCurrentColumn("Açıklama");
        break;
      case 3:
        setCurrentColumn("İşlem");
        break;
      case 4:
        setCurrentColumn("Görev Tarihi");
        break;
      case 5:
        setCurrentColumn("Bitiş Tarihi");
        break;
      case 6:
        setCurrentColumn("Görev No");
        break;
      default:
        setCurrentColumn("Görev No");
        break;
    }
  }
  const handleInput = (e, IdX) => {
    setQ(e.target.value);
    setColumn(IdX, currentColumn);
    if (q.trim() !== "") {
      setSearchedData(search(data));
    }
  };

  useEffect(() => {
    setSearchedData(data);
  }, [data]);

  useEffect(() => {
    if (q.trim() === "") {
      setSearchedData(data);
    }
  }, [q, data]);

  return (
    <div className="table-responsive">
      <table
        cellSpacing={0}
        className="datatable table table-hover table-striped"
      >
        <thead>
          <tr className="thead-dark">
            {data[0] &&
              columns.map((heading, IdX) => (
                <th scope="col-xs-2">
                  <input
                    key={IdX++}
                    onChange={(e) => {
                      handleInput(e, IdX);
                    }}
                    placeholder={heading}
                    className="headingInput form-control"
                  ></input>
                </th>
              ))}
          </tr>
        </thead>

        <tbody>
          {searchedData.map((row) => (
            <tr className="">
              {columns.map((column) =>
                column === "Kimden" ? (
                  <td>
                    <div className="pictureContainer">
                      {
                        <img
                          src={row[column][0].picture}
                          alt="/"
                          className="img-thumbnail rounded-circle"
                        />
                      }
                      <div
                        style={{
                          paddingTop: 20,
                          paddingLeft: 20,
                        }}
                      >
                        {row[column][0].name}
                      </div>
                    </div>
                  </td>
                ) : column === "İşlem" ? (
                  <td className="tableContent">
                    <button className="btn btn-outline-primary rounded-pill">
                      {row[column]}
                    </button>
                  </td>
                ) : (
                  <td
                    style={{
                      paddingTop: 20,
                      paddingLeft: 30,
                    }}
                  >
                    {row[column]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
