import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthSelector from '../auth/authSelector'
import { Redirect } from 'react-router-dom'
import { getUsers } from './usersReducer'
import UsersSelector from './usersSelector'
import { DataGrid } from '@material-ui/data-grid'
import TextField from '@material-ui/core/TextField'

const sortModel = [
  {
    field: 'id',
    sort: 'asc',
  },
]

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'number',
  },
  { field: 'username', headerName: 'Username', sortable: false, width: 160 },
  {
    field: 'first_name',
    headerName: 'First name',
    sortable: false,
    width: 160,
  },
  {
    field: 'last_name',
    headerName: 'Last name',
    sortable: false,
    width: 160,
  },
  {
    field: 'last_login',
    headerName: 'Last login',
    sortable: false,
    width: 230,
  },
  {
    field: 'is_active',
    headerName: 'Is active',
    sortable: false,
    width: 90,
  },
  {
    field: 'is_superuser',
    headerName: 'Is superuser',
    sortable: false,
    width: 120,
  },
]

const UsersPage = () => {
  const isAuth = useSelector(AuthSelector.getIsAuth)

  const dispatch = useDispatch()
  useEffect(() => {
    if (isAuth) {
      dispatch(getUsers())
    }
  }, [dispatch, isAuth])

  const users = useSelector(UsersSelector.getUsers)
  const isLoading = useSelector(UsersSelector.getIsLoading)

  const [searchName, setSearchName] = useState('')
  const handleFilter = useCallback(
    (event) => {
      setSearchName(event.target.value)
    },
    [setSearchName]
  )

  const filteredUsers = useMemo(
    () =>
      users.filter((el) =>
        el.username.toUpperCase().includes(searchName.toUpperCase())
      ),
    [users, searchName]
  )

  return (
    <>
      {isAuth ? (
        <div style={{ height: '100vh' }}>
          <TextField
            label="Username filter"
            variant="filled"
            fullWidth
            value={searchName}
            onChange={handleFilter}
          />
          <div style={{ height: 'calc(100vh - 56px)' }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              loading={isLoading}
              hideFooterSelectedRowCount
              disableSelectionOnClick
              hideFooter
              sortingOrder={['desc', 'asc']}
              sortModel={sortModel}
            />
          </div>
        </div>
      ) : (
        <Redirect to={'/'} />
      )}
    </>
  )
}

export default UsersPage
