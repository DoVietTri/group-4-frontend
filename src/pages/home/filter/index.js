import React, { useState } from 'react';
import useStyles from './styles';
import { Button, Typography, MenuItem, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import InputItem from '../../../components/input-item';
import SelectItem from '../../../components/select-item';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Filter = (props) => {

  const classes = useStyles();

  const [nameRequest, setNameRequest] = useState('');
  const [contentRequest, setContentRequest] = useState('');
  const [dateCreate, setDateCreate] = useState('');
  const [status, setStatus] = useState('');
  const [author, setAuthor] = useState('');
  const [assignee, setAssignee] = useState('');
  const [category, setCategory] = useState('');
  const [department, setDepartment] = useState('');

  const handleClear = () => {
    setNameRequest('');
    setContentRequest('');
    setDateCreate('');
    setStatus('');
    setAuthor('');
    setAssignee('');
    setCategory('');
    setDepartment('');
    props.clearData();
    props.fetchListAllRequest();
  }

  const filter = () => {
    props.onClickHandleFilter({
      nameRequest: nameRequest, contentRequest: contentRequest,
      dateCreate: dateCreate, status: status, assignee: assignee,
      author: author, category: category, department: department
    })
  }

  return (
    <Accordion
      className={classes.btnFilter}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Filter options</Typography>
      </AccordionSummary>
      <AccordionDetails
        classes={{
          root: classes.paper
        }}
      >
        <div className={classes.content}>
          <InputItem
            title={"Name request"}
            type={"text"}
            name={"nameRequest"}
            valueInput={nameRequest}
            handleChangeInput={(e) => setNameRequest(e.target.value)}
          />
          <InputItem
            title={"Content"}
            type={"text"}
            valueInput={contentRequest}
            handleChangeInput={(e) => setContentRequest(e.target.value)}
          />

          <InputItem
            title={"Date Create"}
            type={"date"}
            valueInput={dateCreate}
            handleChangeInput={(e) => setDateCreate(e.target.value)}
          />

          <SelectItem
            title={"Status"}
            selectValue={status}
            handleChangeSelect={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="">
              <em>Status</em>
            </MenuItem>
            {props.statuses ? props.statuses.map(status => {
              return (
                <MenuItem value={status.id} key={status.id} >{status.name}</MenuItem>
              )
            }) : ''}
          </SelectItem>

          <SelectItem
            title={"Author"}
            selectValue={author}
            handleChangeSelect={(e) => setAuthor(e.target.value)}
          >
            <MenuItem value="">
              <em>Author</em>
            </MenuItem>
            {props.users ? props.users.map(user => {
              return (
                <MenuItem value={user.id} key={user.id} >{user.name}</MenuItem>
              )
            }) : ''}
          </SelectItem>

          <SelectItem
            title={"Assign"}
            selectValue={assignee}
            handleChangeSelect={(e) => setAssignee(e.target.value)}
          >
            <MenuItem value="">
              <em>Assign</em>
            </MenuItem>
            {props.admins ? props.admins.map(admin => {
              return (
                <MenuItem value={admin.id} key={admin.id} >{admin.name}</MenuItem>
              )
            }) : ''}
          </SelectItem>

          <SelectItem
            title={"Category"}
            selectValue={category}
            handleChangeSelect={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="">
              <em>Category</em>
            </MenuItem>
            {props.categories ? props.categories.map(category => {
              return (
                <MenuItem value={category.id} key={category.id} >{category.name}</MenuItem>
              )
            }) : ''}
          </SelectItem>

          <SelectItem
            title={"Department"}
            formControl={classes.formControl}
            selectEmpty={classes.selectEmpty}
            selectRoot={classes.selectRoot}
            menuSelect={classes.menuSelect}
            selectValue={department}
            handleChangeSelect={(e) => setDepartment(e.target.value)}
          >
            <MenuItem value="">
              <em>Department</em>
            </MenuItem>
            {props.departments ? props.departments.map(department => {
              return (
                <MenuItem value={department.id} key={department.id} >{department.name}</MenuItem>
              )
            }) : ''}
          </SelectItem>
        </div>
        <div className={classes.action}>
          <Button
            className={classes.btnAction}
            variant="contained"
            color="secondary"
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            className={classes.btnAction}
            variant="contained"
            color="primary"
            onClick={filter}
          >
            Filter
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default Filter;
