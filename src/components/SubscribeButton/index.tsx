import styles from './styles.module.scss';

interface SubscribebuttonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribebuttonProps) {
    return (
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}