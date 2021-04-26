import './styles.css'
import UserCard from './UserCard'
import users from './users'

function Home(props) {
    // console.log(users.length)

    return (
        <div>
            <h1>Users from Acme Inc</h1 >
            <div className='cardContainer'>
                {users.map(user => { return <UserCard name={user.name.first + ' ' + user.name.last} email={user.email} img={user.picture.thumbnail} /> })}
            </div>
        </div>
    )
}

export default Home