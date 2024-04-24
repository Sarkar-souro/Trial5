import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// function createData(name, calories, fat) {
// return { name, calories, fat };
// }

// const data = [
//   createData('Cupcake', 305, 3.7),
//   createData('Donut', 452, 25.0),
//   createData('Eclair', 262, 16.0),
//   createData('Frozen yoghurt', 159, 6.0),
//   createData('Gingerbread', 356, 16.0),
//   createData('Honeycomb', 408, 3.2),
//   createData('Ice cream sandwich', 237, 9.0),
//   createData('Jelly Bean', 375, 0.0),
//   createData('KitKat', 518, 26.0),
//   createData('Lollipop', 392, 0.2),
//   createData('Marshmallow', 318, 0),
//   createData('Nougat', 360, 19.0),
//   createData('Oreo', 437, 18.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = React.useState("");
  
  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage]);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Make AJAX request to fetch data from server
      const response = await fetch(
        `https://hammerhead-app-tzlph.ondigitalocean.app/customers?pageNo=${page}&pageSize=${rowsPerPage}`
      );
      const responseData = await response.json();
      setData(responseData.content);
      console.log(responseData.content);
      setTotalPages(responseData.totalElements);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Avoid a layout jump when reaching the last page with empty data.
  const emptyRows = page > 0 ? Math.max(0, rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow key="Table Header">
            <TableCell
              component="th"
              scope="row"
              align="center"
              style={{ width: 160, fontWeight: 800 }}
            >
              Customer Name
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Customer Email
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Customer ID
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Customer Mobile
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Customer Password
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Customer Image
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Sms Send
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Comment
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Created On
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Update On
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              CustomerType
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Taxi Butler Code
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Status
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Customer Otp
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Customer Phone Verification
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Invoice Number
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Recipient
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Invoice Saved
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Token
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Otp Valid Till
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Wallet Amount
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Stripe Id
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              App Status
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Device Id
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Preffered Language
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Customer No
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Birthday
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Health Insurance
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Referral Code
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Referred Customer Id
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Referred Already
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Referred Used
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Job Count For Bonus
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Last Tip
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Discount Price
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Job Count
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Device Type
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Device Name
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              Android Version
            </TableCell>
            <TableCell style={{ width: 160, fontWeight: 800 }} align="right">
              App Version
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <tr>
              <td colSpan="14">Loading...</td>
            </tr>
          ) : (
            data.map((row) => (
              <TableRow key={row.customerId}>
                <TableCell component="th" scope="row" align="center">
                  {row.customerName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.customerEmail}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.customerId}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.customerMobile}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.customerPassword}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.customerImage}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.isSmsSend}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.comment}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.createdOn}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.updateOn}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.updateOn}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.customerType}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.taxiButlerCode}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.status}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.customerOtp}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.customerPhoneVerification}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.invoicenumber}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.recipient}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.isInvoiceSaved}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.token}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.otpValidTill}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.walletAmount}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.stripeId}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.appStatus}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.deviceId}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.prefferedLanguage}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.customerNo}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.birthday}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.healthInsurance}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.referralCode}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.referredCustomerId}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.isReferredAlready}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.isReferredUsed}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.jobCountForBonus}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.lastTip}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.discountPrice}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.jobCount}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.deviceType}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.deviceName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.androidVersion}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.appVersion}
                </TableCell >
                <TableCell style={{ width: 160 }} align="right">
                <Link  to={"/edit/" + row.customerId }>Edit</Link>
                </TableCell>
              </TableRow>
            ))
          )}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[20, { label: "All", value: -1 }]}
              colSpan={3}
              count={totalPages}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    "aria-label": "data per page",
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
