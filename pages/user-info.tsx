import { withRouter } from 'next/router';
import { UserDetail } from '../models';
import { StatelessComponent } from 'react';
import { fetchUsers, fetchUserDetail } from '../rest-api/github';


interface Props {
    login: string;
    userDetail: UserDetail
}
// const UserInfo = withRouter((props) => {
//     console.log('LOG', props)
//     return (
//         <div>
//             <h3>{props.router.query.id}</h3>
//             <h3>{props.router.query.login}</h3>
//         </div>
//     )
// })

const UserInfo: StatelessComponent<Props> = props => {
    return (
        <div>
            <h2>I'm the user infopage</h2>
            <p>User ID: {props.userDetail.id}</p>
            <img src={props.userDetail.avatar_url} style={{ maxWidth: '10rem' }} />
            <p>User name: {props.login}</p>
            <p>Company: {props.userDetail.company}</p>
            <p>Followers: {props.userDetail.followers}</p>
        </div>
    )
}

UserInfo.getInitialProps = async props =>{
    const login = props.query.login as string
    const userDetail = await fetchUserDetail(login)

    return {
        login,
        userDetail
    }
}

export default UserInfo