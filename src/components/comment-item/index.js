import React from 'react';
import { Typography, Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import igniz from '../../assets/images/igniz.jpg';
import useStyles from './styles';
import hasJsonStructure from '../../helpers/hasJSONStructure';
import clsx from 'clsx';

const CommentItem = (props) => {
  const classes = useStyles();

  /**
   * show comment
   * @param {string} strComment 
   * @returns 
   */
  const showComment = (strComment) => {
    if (!hasJsonStructure(strComment)) {
      return (
        <Typography variant="body2" className={classes.commentText} noWrap>{props.contentComment}</Typography>
      )
    }
    const objComment = JSON.parse(strComment);
    let arr = [<Typography variant="body2" key={'update'} className={clsx(classes.commentText, classes.title)} >Cập nhật request: </Typography>];

    for (let key in objComment) {
      arr = [...arr, 
      <Typography 
        variant="body2" 
        key={key} 
        className={classes.commentText} 
        noWrap
      >
        <em className={classes.title}>
          {key}
        </em>: { objComment[key] }
      </Typography>];
    }
    return arr;
  }

  return (
    <div className={classes.commentItem}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={igniz} alt="Igniz" />
        </ListItemAvatar>
        <ListItemText primary={props.authorCreate} secondary={props.dateCreate} />
      </ListItem>
      { showComment(props.contentComment) }
    </div>
  )
}

export default CommentItem
