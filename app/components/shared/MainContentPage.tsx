'use client';
import React, { useState } from "react";
import ColouredDataGridComponent from "./ColouredTable";
import { Box, useTheme } from "@mui/material";

const MainContentPage = () => {
     const dummyNodeDetails = [
    {
      id: 1,
      name: "s3a-ingest-hub-01",
      description:
        "Receives incoming surveillance footage from IoT edge devices.",
      status: "Connected",
      createdBy: "Demo aiotel",
      lastModified: "12 sec ago",
    },
    {
      id: 2,
      name: "s3a-processing-zone-1",
      description:
        "Processes video frames for face and motion detection algorithms.",
      status: "Disconnected",
      createdBy: "Demo aiotel",
      lastModified: "1 min ago",
    },
    {
      id: 3,
      name: "s3a-archive-store-01",
      description: "Archives analyzed videos for compliance and backup.",
      status: "Disconnected",
      createdBy: "Demo aiotel",
      lastModified: "4 min ago",
    },
    {
      id: 4,
      name: "s3a-user-uploads",
      description: "User-uploaded videos for manual analysis or training.",
      status: "Disconnected",
      createdBy: "Demo aiotel",
      lastModified: "21 min ago",
    },
    {
      id: 5,
      name: "s3a-event-clips",
      description:
        "Stores 30-second clips of detected activity (e.g. motion, intrusion).",
      status: "Disconnected",
      createdBy: "Demo aiotel",
      lastModified: "12 hrs ago",
    },
    {
      id: 6,
      name: "s3a-transcoded-files",
      description:
        "Output bucket for videos after transcoding into standard formats.",
      status: "Disconnected",
      createdBy: "Demo aiotel",
      lastModified: "14 hrs ago",
    },
    {
      id: 7,
      name: "s3a-failure-logs",
      description:
        "Backup node for logs generated during failed processing jobs.",
      status: "Disconnected",
      createdBy: "Demo aiotel",
      lastModified: "16 hrs ago",
    },
    {
      id: 8,
      name: "s3a-qa-testing-data",
      description:
        "Isolated bucket used for testing new video analytics features in QA pipeline.",
      status: "Disconnected",
      createdBy: "Demo aiotel",
      lastModified: "19 hrs ago",
    },
    {
      id: 9,
      name: "s3a-live-feed-east",
      description:
        "Real-time video stream source from Eastern region monitoring sites.",
      status: "Disconnected",
      createdBy: "Demo aiotel",
      lastModified: "21 hrs ago",
    },
    {
      id: 10,
      name: "s3a-ml-model-input",
      description:
        "Location of pre-trained AI models and metadata used for video classification.",
      status: "Disconnected",
      createdBy: "Demo aiotel",
      lastModified: "2 days ago",
    },
  ];

  const dataWithSno = dummyNodeDetails.map((item, idx) => ({
    ...item,
    sno: idx + 1,
  }));

  const fragmentsTableHeader = [
    { field: "sno", headerName: "No.", width: 70 },
    { field: "name", headerName: "S3a Node Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 2 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => (
        <span
          className={`text-sm font-medium ${
            params.value === "Connected" ? "text-green-600" : "text-red-500"
          }`}
        >
          {params.value}
        </span>
      ),
    },
    { field: "createdBy", headerName: "Created by", flex: 1 },
    { field: "lastModified", headerName: "Last modified", flex: 1 },
  ];
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const handleRowSelection = (newSelection: any) => {
    setSelectedRows(newSelection);
  };

  const handleOnRowClick = (row: any) => {
    console.log("Row clicked:", row);
  };
const theme = useTheme();
  return (
    <ColouredDataGridComponent
      pageSize={100}
      data={dataWithSno}
      headers={fragmentsTableHeader}
      checkboxSelection={false}
      height={500} // Direct height prop instead of wrapping Box
      // rowSelectionModel={selectedRows}
      onRowSelectionModelChange={handleRowSelection}
      onRowClick={handleOnRowClick}
      sx={{
        "& .MuiDataGrid-row.Mui-selected": {
          backgroundColor: theme.palette.grey[700],
          color: "#ffffff",
          "&:hover": {
            backgroundColor: theme.palette.grey[700],
          },
        },
      }}
    />
  );
};

export default MainContentPage;
