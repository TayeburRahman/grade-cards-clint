import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';
import useFeedJson from './useFeedJson';

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
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
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


export default function CustomPaginationActionsTable () { 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const {rows} = useFeedJson()

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer className='tabMain p-5' component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <div className='row colorWhite'>
              <div className='customWhd1 textLeft ps-4'>
                 <Typography variant="subtitle2" gutterBottom component="div">
                    CARD
                 </Typography>
              </div>
              <div className='customWhd2  '>
                 <Typography variant="subtitle2" gutterBottom component="div">
                    DATE
                 </Typography>
              </div>
              <div className='customWhd2  '>
                 <Typography variant="subtitle2" gutterBottom component="div">
                  CERTIFICATE#
                 </Typography>
              </div>
              <div className='customWhd2  '>
                 <Typography variant="subtitle2" gutterBottom component="div">
                  TYPES
                 </Typography>
              </div>
              <div className='customWhd2 textLeft'>
                 <Typography variant="subtitle2" gutterBottom component="div">
                    GRADE
                 </Typography>
              </div>
          </div>
          <hr></hr>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
             <div>
              <Link to={`${row?.id}`} className='tabLink'>
                <div className='row tableRow'>
                 <div className="d-flex customWhd1">
                     <img
                        className='imageCard'
                        src={row.images.small}
                        alt={row.images.small}
                        loading="lazy"
                        width="8%"
                      />
                 <div className='textLeft ms-3'>
                    <Typography variant="subtitle2" gutterBottom component="div">
                    {row.artist}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      {row.rules[0].slice(0,70)}
                    </Typography>
                 </div>
                 </div>
                 <div className="customWhd2">
                       <Typography variant="body2" display="block" gutterBottom>
                       {row.set.updatedAt}
                       </Typography>
                 </div>
                 <div className="customWhd2">
                       <Typography variant="body2" display="block" gutterBottom>
                         0000{row.hp}
                       </Typography> 
                 </div>
                 <div className="customWhd2">
                       <Typography variant="body2" display="block" gutterBottom>
                       {row.subtypes}
                       </Typography> 
                 </div>
                 <div className="customWhd2">
                     <div className='priceBg'>
                         <Typography variant="overline" display="block" gutterBottom>
                           {row.set.ptcgoCode}
                         </Typography>
                         <Typography variant="h6" display="block" gutterBottom>
                           {row.cardmarket.prices.averageSellPrice}
                         </Typography>
                     </div>
                </div>
          
                </div>
            </Link>
            <hr/>
             </div>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter >
          <TableRow>
            <TablePagination
              className="Pagination"
              rowsPerPageOptions={[8, 14, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
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
