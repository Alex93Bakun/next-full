import { useRouter } from 'next/router';
import styles from '../../styles/user.module.scss';
import axios from 'axios';
import MainContainer from '../../components/MainContainer';
import { Card, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';

const myLoader = ({ src, width, quality }) => {
    return `https:///via.placeholder.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function User({ user }) {
    const { query } = useRouter();

    return (
        <div className="container">
            <MainContainer keywords={`${user.name} page`}>
                <div className={styles.user}>
                    <Card className={styles.pagePhoto}>
                        <Image
                            src="215x350"
                            loader={myLoader}
                            width={215}
                            height={350}
                            alt="user"
                        />
                    </Card>
                    <Card className={styles.pageInfo}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className={styles.userName}
                        >
                            {user.name.split(' ')[0]} <i>@{user.username}@</i>{' '}
                            {user.name.split(' ')[1]}
                        </Typography>
                        <Typography variant="body2" className={styles.userData}>
                            <b>Address</b>: {user.address.city},{' '}
                            {user.address.street} st., {user.address.suite}
                        </Typography>
                        <Typography variant="body2" className={styles.userData}>
                            <b>Email:</b> {user.email}
                        </Typography>
                        <Typography variant="body2" className={styles.userData}>
                            <b>Phone:</b> {user.phone}
                        </Typography>
                        <Typography variant="body2" className={styles.userData}>
                            <b>Website:</b> {user.website}
                        </Typography>
                    </Card>
                </div>
            </MainContainer>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const { data } = await response;
    return {
        props: { user: data },
    };
}
