import { useState, useEffect } from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject, useMount, useDebounce } from 'utils'
import qs from 'qs'
const URL = process.env.REACT_APP_URL
export const ProjectList = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const debounceParam = useDebounce(param, 300)
  useEffect(() => {
    fetch(`${URL}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debounceParam])
  useMount(() => {
    fetch(`${URL}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  )
}