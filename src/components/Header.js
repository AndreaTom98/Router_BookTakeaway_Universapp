import styles from '../style/Header.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookReader, faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon size="3x" icon={faBookReader} />
            <div className={styles.rightContainer}>
              <p style={{marginRight: '20px'}}>i miei libri</p>
              <FontAwesomeIcon size="3x" icon={faPlusSquare} />
            </div>
        </div>
    )
}

export default Header;