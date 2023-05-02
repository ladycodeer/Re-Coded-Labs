import user from '../data/user'

function Links(){

    return(
        <>
        <h2>Links</h2>
        <a href = {user.links.github} > {user.links.github} </a>
        <a href = {user.links.linkedin} > {user.links.linkedin} </a>
        </>
    )
}

export default Links