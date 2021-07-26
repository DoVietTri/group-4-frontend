import React from 'react';
import useStyles from './styles';
import { Typography, List } from '@material-ui/core';
import CommentItem from '../../../../components/comment-item';

const CommentSection = (props) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='body1' className={classes.comment}><b>Comments({props.listAllComment.length})</b></Typography>
      <List className={classes.commentContainer}>
        {props.listAllComment.map((com, index) => {
          return (
            <CommentItem
              key={index}
              contentComment={com.content}
              authorCreate={com.user ? com.user.name : ''}
              dateCreate={com.created_at}
            />
          )
        })}
      </List>
    </>
  )
}

export default CommentSection
