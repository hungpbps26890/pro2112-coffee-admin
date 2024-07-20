import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TableWithPagination = () => {
  const [dataSource, setDataSource] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  const fetchRecords = async (page, pageSize) => {
    setLoading(true);

    const response = await axios.get(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${pageSize}`
    );

    console.log("Response: ", response);

    if (response.status === 200) {
      const dataResponse = response.data;
      console.log("Data Reponse: ", dataResponse);

      const data = dataResponse.data.map((data, index) => ({
        ...data,
        key: index + 1,
      }));
      console.log("Data: ", data);

      setDataSource(data);
      setTotal(dataResponse.totalPassengers);
      setPageSize(pageSize);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords(0, pageSize);
  }, []);

  console.log({ dataSource, total });

  const columns = [
    { title: "#", dataIndex: "key" },
    { title: "Name", dataIndex: "name" },
    { title: "Trips", dataIndex: "trips" },
  ];

  return (
    <div className="templatemo-content-widget white-bg">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <h2>Table With Pagination Tutorial</h2>
      </div>

      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={{
          pageSize: pageSize,
          total: total,
          onChange: (page, pageSize) => {
            fetchRecords(page - 1, pageSize);
          },
        }}
      ></Table>
    </div>
  );
};

export default TableWithPagination;
