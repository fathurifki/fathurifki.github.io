import * as Next from 'next';
import { StatelessComponent } from 'react';
import { User } from '../models';
import { Header } from './Header';
import { Row } from './Row';

interface Props {
    users: User;
}

export const Table: StatelessComponent<Props> = (props) => (
    <table>
        <thead>
            <Header />
        </thead>
        <tbody>
            {
                props.users.map(user => (
                    <Row key={user.id} user={user} />
                ))
            }
        </tbody>
    </table>
)