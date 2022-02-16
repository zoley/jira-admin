interface User{
  id:string,
  name:string
}
interface SearchPanelProps{
  param:{
    name:string,
    personId:string
  },
  setParam:(param:SearchPanelProps['param'])=>void,
  users:User[]
}
export const SearchPanel = ({param,setParam,users}:SearchPanelProps) => {
  
  return (
    <form>
      <input type="text" value={param.name} onChange={evt=>setParam({
        ...param,
        name:evt.target.value
      })}/>
      <select value={param.personId} onChange={evt=>setParam({
        ...param,
        personId:evt.target.value
      })}>
        <option value="">全部</option>
        {
          users.map(user=><option key={user.id} value={user.id}>{user.name}</option>)
        }
      </select>
    </form>
  )
}