function UserCard(props) {
    console.log(props)
    return (
        <div className='user-card'>
            <img src={props.img} alt=''></img>
            <div className="user-info">
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default UserCard