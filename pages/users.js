import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { Card, CardContent, Typography } from '@material-ui/core';

import MainContainer from '../components/MainContainer';

import styles from '../styles/users.module.scss';

const myLoader = ({ src, width, quality }) => {
    return `https:///via.placeholder.com/${src}?w=${width}&q=${quality || 75}`;
};

const Users = ({ users }) => {
    return (
        <div className="container">
            <MainContainer keywords="Users lists page">
                <h1 className={styles.userTitle}>Users</h1>
                <ul className={styles.userList}>
                    {users.map((user) => (
                        <li key={user.id} className={styles.userItem}>
                            <Link href={`/users/${user.id}`}>
                                <a>
                                    <Card className={styles.card}>
                                        <CardContent
                                            className={styles.cardContent}
                                        >
                                            <Image
                                                src="150"
                                                loader={myLoader}
                                                width={150}
                                                height={150}
                                                alt="user"
                                                className={styles.userImage}
                                            />
                                            <div className={styles.userInfo}>
                                                <Typography variant="body2" className={styles.userName}>
                                                    {user.name.split(' ')[0]}{' '}
                                                    <i>@{user.username}@</i>{' '}
                                                    {user.name.split(' ')[1]}
                                                </Typography>
                                                <Typography variant="body2" className={styles.userCompanyName}>
                                                    Company: {user.company.name}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </MainContainer>
        </div>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    const { data } = await response;

    return {
        props: { users: data },
    };
}
