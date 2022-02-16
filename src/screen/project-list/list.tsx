interface User {
  id: string,
  name: string
}
interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: string;
}
interface ListProps {
  list: Project[],
  users: User[]
}
export const List = ({ list, users }: ListProps) => {
  return <>
    <table>
      <thead>
        <tr>
          <th>项目名</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(v => (
            <tr key={v.id}>
              <td>{v.name}</td>
              <td>{users.find(x => Object.is(x.id, v.personId))?.name || ''}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </>
}
