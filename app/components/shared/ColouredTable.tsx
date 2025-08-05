// Necessary imports
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Box from "@mui/material/Box";
import { alpha, styled, SxProps, Theme } from "@mui/material/styles";

// Ensure custom theme types are available
declare module '@mui/material/styles' {
  interface Palette {
    blues?: {
      50?: string;
      100?: string;
      200?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
  }
}
import {
  DataGrid,
  gridClasses,
  GridColDef,
  GridColumnVisibilityModel,
  GridRowParams,
  GridRowSelectionModel,
  GridRowSpacingParams,
} from "@mui/x-data-grid";
// import { useTranslations } from "next-intl";

// Helper function to safely access custom theme colors
const getBlueColor = (theme: Theme, shade: keyof NonNullable<Theme['palette']['blues']>): string => {
  return theme.palette.blues?.[shade] || theme.palette.primary.main;
};

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: 0,
  padding: "0px 12px",
  "& .MuiDataGrid-overlayWrapper": {
    height: "100px",
  },
  "& .MuiDataGrid-container--top [role=row]": {
    backgroundColor: theme.palette.background.default,
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    color: theme.palette.text.primary,
    fontSize: theme.breakpoints.down("xl") ? "14px" : "16px",
    fontWeight: 500,
    lineHeight: "18px",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  ".MuiDataGrid-iconButtonContainer": {
    visibility: "visible",
    width: "auto",
  },
  ".MuiDataGrid-sortIcon": {
    opacity: "inherit !important",
  },
  "& .MuiDataGrid-columnHeader:focus": {
    outline: "none",
  },
  "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
    outline: "none !important",
  },
  "& .MuiDataGrid-row, & .MuiDataGrid-cell": {
    cursor: "pointer",
    border: "none !important",
  },
  "& .MuiDataGrid-topContainer::after": {
    height: "3px",
    backgroundColor: theme.palette.background.paper,
    width: "calc(var(--DataGrid-rowWidth) + 24px)",
    margin: "0px -12px",
  },
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.background.paper,
  },
  [`& .${gridClasses.row}.error`]: {
    color: "rgba(255, 0, 0, 0.5)",
  },
  [`& .${gridClasses.row}.disabled`]: {
    color: alpha(theme.palette.grey[400], 1),
  },
  "& .MuiDataGrid-row--firstVisible, & .MuiDataGrid-row--lastVisible": {
    borderRadius: "0px",
  },
  "& .MuiDataGrid-row.Mui-selected": {
    backgroundColor: alpha(getBlueColor(theme, '600'), 0.4),
    "&:hover": {
      backgroundColor: alpha(getBlueColor(theme, '600'), 0.4),
    },
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: alpha(getBlueColor(theme, '600'), 0.4),
    ".actionButton": {
      display: "block",
    },
  },
  "& .MuiDataGrid-filler": {
    display: "none",
  },
  "& .actionButton": {
    display: "none",
  },
}));

// Main function
export default function ColouredDataGridComponent({
  data,
  headers,
  loading,
  handleRowContextMenu,
  onCellClick,
  onRowSelectionModelChange,
  rowSelectionModel,
  columnVisibilityModel,
  checkboxSelection,
  onRowClick,
  isRowSelectable,
  sx,
  rowHeight,
  hideFooter,
  pageSize,
  columnHeaderHeight,
  getRowClassName,
  disableMultipleRowSelection,
}: Readonly<{
  data: any[];
  headers: GridColDef<any>[];
  loading?: boolean;
  handleRowContextMenu?: any;
  checkboxSelection: boolean;
  onCellClick?: any;
  onRowSelectionModelChange?: any;
  rowSelectionModel?: GridRowSelectionModel;
  columnVisibilityModel?: GridColumnVisibilityModel;
  onRowClick?: any;
  isRowSelectable?: (params: GridRowParams<any>) => boolean;
  sx?: SxProps;
  rowHeight?: number;
  hideFooter?: boolean;
  pageSize?: number;
  columnHeaderHeight?: number;
  getRowClassName?: any;
  disableMultipleRowSelection?: any;
}>) {
  // useTranslations library for translations
  // const t = useTranslations();

  const StyledGridOverlay = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  });

  function CustomNoRowsOverlay() {
    return (
      <StyledGridOverlay>
        <div className="text-main">no rows</div>
      </StyledGridOverlay>
    );
  }

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <StyledDataGrid
        rows={data}
        columns={headers}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize ?? 10,
            },
          },
        }}
        pageSizeOptions={[10, 20, 30]}
        disableColumnFilter={true}
        disableColumnMenu={true}
        disableColumnResize={true}
        hideFooter={hideFooter ?? true}
        loading={loading}
        onRowClick={onRowClick}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick={true}
        rowSelectionModel={rowSelectionModel}
        onCellClick={onCellClick}
        onRowSelectionModelChange={onRowSelectionModelChange}
        // slots={{
        //   columnSortedAscendingIcon: ArrowDropUpIcon,
        //   columnSortedDescendingIcon: ArrowDropDownIcon,
        //   noRowsOverlay: CustomNoRowsOverlay,
        // }}
        slotProps={{
          row: {
            onContextMenu: handleRowContextMenu
              ? (e) => handleRowContextMenu(e)
              : undefined,
            style: { cursor: "context-menu" },
          },
        }}
        isRowSelectable={isRowSelectable}
        columnVisibilityModel={columnVisibilityModel}
        rowHeight={rowHeight ?? 40}
        columnHeaderHeight={columnHeaderHeight ?? 56}
        getRowSpacing={(params: GridRowSpacingParams) => {
          return {
            top: params.isFirstVisible ? 16 : 0,
            bottom: params.isLastVisible ? 16 : 0,
          };
        }}
        getRowClassName={
          getRowClassName ??
          ((params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd")
        }
        sx={{
          width: "100%", // Or set a fixed width like '600px' to ensure scrollable behavior
          overflowX: "auto", // Ensures horizontal scrolling is enabled
          ...sx,
        }}
        disableMultipleRowSelection={disableMultipleRowSelection ?? false}
      />
    </Box>
  );
}
