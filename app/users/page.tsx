type User = {
  id: number;
  name: string;
};
export default async function UserPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    // you get new get new every time
    // use if data change frequently
    { cache: "no-store" }
    // in here you get new value every 10 sec
    // use if data don't change frequently
    // { next: { revalidate: 10 } }
  );
  const users: User[] = await res.json();
  return (
    <div>
      userPage
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
              <br />
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
