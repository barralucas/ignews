import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
        <Head>
            <title>Posts | ignews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time>12 de março de 2021</time>
                    <strong>Lorem Ipsum</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse voluptatibus sunt eaque culpa repellat praesentium officiis aspernatur quidem reprehenderit veritatis ducimus commodi accusantium neque distinctio, voluptatum, magnam ad fuga.</p>
                </a>
                <a href="#">
                    <time>12 de março de 2021</time>
                    <strong>Lorem Ipsum</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse voluptatibus sunt eaque culpa repellat praesentium officiis aspernatur quidem reprehenderit veritatis ducimus commodi accusantium neque distinctio, voluptatum, magnam ad fuga.</p>
                </a><a href="#">
                    <time>12 de março de 2021</time>
                    <strong>Lorem Ipsum</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse voluptatibus sunt eaque culpa repellat praesentium officiis aspernatur quidem reprehenderit veritatis ducimus commodi accusantium neque distinctio, voluptatum, magnam ad fuga.</p>
                </a><a href="#">
                    <time>12 de março de 2021</time>
                    <strong>Lorem Ipsum</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse voluptatibus sunt eaque culpa repellat praesentium officiis aspernatur quidem reprehenderit veritatis ducimus commodi accusantium neque distinctio, voluptatum, magnam ad fuga.</p>
                </a>
            </div>
        </main>
        </>
    );
}