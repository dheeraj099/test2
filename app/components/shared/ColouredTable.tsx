// Necessary imports
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Box from "@mui/material/Box";
import { alpha, styled, SxProps, Theme } from "@mui/material/styles";


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
const getBlueColor = (theme: Theme, shade: 50 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900): string => {
  try {
    const customPalette = theme.palette as any;
    if (customPalette.blues && customPalette.blues[shade]) {
      return customPalette.blues[shade];
    }
    console.warn(`Blues palette or shade ${shade} not found, using primary color`);
    return theme.palette.primary.main;
  } catch (error) {
    console.error('Error accessing blues palette:', error);
    return theme.palette.primary.main;
  }
};

const getGreenColor = (theme: Theme, shade: 50 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900): string => {
  try {
    const customPalette = theme.palette as any;
    if (customPalette.greens && customPalette.greens[shade]) {
      return customPalette.greens[shade];
    }
    console.warn(`Greens palette or shade ${shade} not found, using fallback green`);
    return '#4CAF50'; // Fallback to Material Design green
  } catch (error) {
    console.error('Error accessing greens palette:', error);
    return '#4CAF50';
  }
};

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: 0,
  padding: "0px 12px",
  minHeight: 300, // Ensure minimum height for the grid itself
  height: "100%", // Take full height of parent
  flex: 1, // Allow growth within flex container
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
  // Alternating row colors: Blue for 1st, 3rd, 5th... and Green for 2nd, 4th, 6th...
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: alpha(getBlueColor(theme, 600), 0.2), // Blue background for odd rows (1st, 3rd, 5th...)
  },
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: alpha(getGreenColor(theme, 600), 0.2), // Green background for even rows (2nd, 4th, 6th...)
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
    backgroundColor: alpha(getBlueColor(theme, 600), 0.6),
    "&:hover": {
      backgroundColor: alpha(getBlueColor(theme, 600), 0.6),
    },
  },
  "& .MuiDataGrid-row.odd:hover": {
    backgroundColor: alpha(getBlueColor(theme, 600), 0.4), // Darker blue on hover for blue rows
    ".actionButton": {
      display: "block",
    },
  },
  "& .MuiDataGrid-row.even:hover": {
    backgroundColor: alpha(getGreenColor(theme, 600), 0.4), // Darker green on hover for green rows
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
  height,
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
  height?: number | string; // Optional explicit height for the DataGrid container
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
    <Box sx={{ 
      height: height || "100%", 
      width: "100%",
      minHeight: height ? undefined : 400, // Only use fallback minHeight if no explicit height is provided
      display: "flex",
      flexDirection: "column"
    }}>
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
            params.indexRelativeToCurrentPage % 2 === 0 ? "odd" : "even")
        }
        sx={{
          width: "100%", // Or set a fixed width like '600px' to ensure scrollable behavior
          height: "100%", // Ensure DataGrid takes full height of container
          minHeight: 300, // Minimum height fallback
          overflowX: "auto", // Ensures horizontal scrolling is enabled
          flex: 1, // Allow DataGrid to grow and fill available space
          ...sx,
        }}
        disableMultipleRowSelection={disableMultipleRowSelection ?? false}
      />
    </Box>
  );
}
