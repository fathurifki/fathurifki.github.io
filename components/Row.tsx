import * as Next from 'next';
import { StatelessComponent } from 'react';
import { User } from '../models';
import Link from 'next/link';

interface Props {
    user: User;
}

export const Row: StatelessComponent<Props> = (props) => (
    <tr>
        <td>
            <img src={props.user.avatar_url} style={{ maxWidth: '10rem' }} />
        </td>
        <td>
            <Link as={`user-info/login/${props.user.login}`} href={`/user-info?id=${props.user.id}&login=${props.user.login}`}>
                <a>{props.user.id}</a>
            </Link>
        </td>
        <td>
            <span>{props.user.login}</span>
        </td>
    </tr>
)
