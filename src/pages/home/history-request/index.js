import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'
import useStyles from './styles';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const HistoryRequest = (props) => {

  const classes = useStyles();

  return (
    <Box
      className={classes.historyRequest}
      component="div"
    >
      <Typography
        variant="h5"
        className={classes.title}
      >
        History request
      </Typography>

      <div className={classes.content}>
        {props.listAllHistoryRequest.map(item => {
          return (
            <Paper
              key={item.id}
              className={classes.itemHistory}
            >
              <div
                className={classes.flex}
              >
                <EmailOutlinedIcon />
                <Typography
                  noWrap
                  className={classes.author}
                >
                  {item.user.name}
                </Typography>
              </div>

              <Typography
                noWrap
              >
                {item.content}
              </Typography>
              <Typography>
                {item.created_at}
              </Typography>
            </Paper>
          )
        })}
      </div>
      <Pagination
        count={props.total_page_history}
        size="small" color="primary"
        className={classes.pagination}
        siblingCount={0}
        onChange={(e, page) => props.handleChangePageHistory(page)}
      />
    </Box>
  )
}

export default HistoryRequest;
