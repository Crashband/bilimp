import React, { useState, useEffect } from "react";
import Datatable from "../datatable";
import Form from "../form/Form";
import "./styles.css";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="gorevler">
      <div
        style={{ paddingLeft: 12 }}
        className="portlet-title tabbable-line"
      ></div>

      <ul className="list-group list-group-horizontal ">
        {newItem === false ? (
          <div className="buttonContainer">
            <button
              style={{
                background: "#4b9ac7",
                border: "none",
              }}
              onClick={() => {
                setNewItem(true);
              }}
              className="addNewItem btn btn-primary rounded-pill "
            >
              + Yeni
            </button>
          </div>
        ) : (
          ""
        )}

        <li className="list-group-item border-top-0">Bekleyen</li>
        <li className="list-group-item border-top-0">Havuz</li>
        <li className="list-group-item border-top-0">Oluşturulan</li>
        <li className="list-group-item border-top-0">İzlenen</li>
        <li className="list-group-item border-top-0">İletilen</li>
        <li className="list-group-item border-top-0">Tamamlanan</li>
      </ul>
      {newItem === true ? (
        <div className="closeMenu">
          <button
            style={{ width: 45, fontSize: 20 }}
            className="btn btn-primary rounded-circle"
            onClick={() => {
              setNewItem(false);
            }}
          >
            {" "}
            X
          </button>
        </div>
      ) : (
        ""
      )}
      <div>{newItem === false ? <Datatable data={data} /> : <Form />}</div>
    </div>
  );
}
