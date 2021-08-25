import React, { useState } from "react";

function Form() {
  const [Kimden, setKimden] = useState("");
  const [name, setName] = useState("");
  const [GörevTipi, setGörevTipi] = useState("");
  const [Öncelik, setÖncelik] = useState("");
  const [Bilgi, setBilgi] = useState("");
  const [Konu, setKonu] = useState("");
  const [Açıklama, setAçıklama] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");

  const yeniGörevEkle = (e) => {
    e.preventDefault();

    const görev = {
      name,
      Açıklama,
      Bilgi,
      startDate,
      endDate,
      time,
    };
    console.log(görev);

    fetch("http://localhost:8000/input", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(görev),
    });
  };

  return (
    <div className="container">
      <div className=" text-center mt-5 ">
        <h2 style={{ color: "#4b9ac7" }}>Yeni Görev</h2>
      </div>
      <div className="row ">
        <div className="col-lg-12 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <div className="container">
                <form id="contact-form" onSubmit={yeniGörevEkle}>
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          {" "}
                          <input
                            placeholder="Kime"
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          {" "}
                          <select
                            required
                            name=""
                            id=""
                            className="form-control input-sm"
                            placeholder="Name"
                            value={GörevTipi}
                            onChange={(e) => {
                              setGörevTipi(e.target.value);
                            }}
                          >
                            <option value="" hidden>
                              Görev Tipi
                            </option>
                            <option>Tekil Görev</option>
                            <option>Havuz Görevi</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <select
                            required
                            name=""
                            id=""
                            className="form-control input-sm"
                            placeholder="Lastname"
                            value={Öncelik}
                            onChange={(e) => {
                              setÖncelik(e.target.value);
                            }}
                          >
                            <option value="" hidden>
                              Öncelik
                            </option>
                            <option>Acil</option>
                            <option>Yüksek</option>
                            <option>Orta</option>
                            <option>Düşük</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            value={Bilgi}
                            onChange={(e) => {
                              setBilgi(e.target.value);
                            }}
                            placeholder="Bilgi"
                            type="text"
                            className="form-control"
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group">
                          {" "}
                          <input
                            placeholder="Konu"
                            type="text"
                            className="form-control"
                            value={Konu}
                            onChange={(e) => {
                              setKonu(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 m-4 ">
                          <button
                            style={{ fontSize: 12, width: 125, height: 35 }}
                            className="btn btn-outline-primary rounded-pill"
                          >
                            Döküman Ekle
                          </button>
                        </div>
                        <div className="col-md-3 m-4">
                          <button
                            style={{ fontSize: 12, width: 150, height: 35 }}
                            className="btn btn-outline-primary rounded-pill"
                          >
                            Bilimp Döküman Ekle
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          {" "}
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            rows="10"
                            value={Açıklama}
                            onChange={(e) => {
                              setAçıklama(e.target.value);
                            }}
                          ></textarea>{" "}
                        </div>
                      </div>
                      <div className="col-md-12"> </div>
                    </div>
                    {/* second last row */}

                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          {" "}
                          <input
                            type="text"
                            placeholder="Başlangiç Tarihi"
                            className="form-control"
                            value={startDate}
                            onChange={(e) => {
                              setStartDate(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          {" "}
                          <input
                            type="text"
                            placeholder="Bitiş Tarihi"
                            className="form-control"
                            value={endDate}
                            onChange={(e) => {
                              setEndDate(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          {" "}
                          <input
                            type="text"
                            placeholder="Sure(Saat)"
                            className="form-control"
                            value={time}
                            onChange={(e) => {
                              setTime(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    {/* last row */}
                    {/* <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          {" "}
                          <select
                            required
                            name=""
                            id=""
                            className="form-control input-sm"
                            defaultValue={{ label: "Select Dept", value: 0 }}
                          >
                            <option value="" hidden>
                              İlişkilendir
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          {" "}
                          <select
                            name=""
                            id=""
                            className="form-control input-sm"
                            placeholder="Name"
                            required
                          >
                            <option value="" hidden>
                              Görevi Tekrarla
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          {" "}
                          <select
                            name=""
                            id=""
                            className="form-control input-sm"
                            placeholder="Name"
                            required
                          >
                            <option value="" hidden>
                              Etiket
                            </option>
                          </select>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-primary ">
                        Kaydet
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
