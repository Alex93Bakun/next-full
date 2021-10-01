import MainContainer from '../components/MainContainer';
import Link from 'next/link';
import { Button } from '@material-ui/core';

import styles from '../styles/index.module.scss';

const Index = () => {
    return (
        <div className="container">
            <MainContainer keywords="Main page">
                <div className={styles.wrapper}>
                    <Link href="/users">
                        <a>
                            <Button
                                variant="contained"
                                color="success"
                                className={styles.mainButton}
                            >
                                Get Started
                            </Button>
                        </a>
                    </Link>
                </div>
            </MainContainer>
        </div>
    );
};

export default Index;
