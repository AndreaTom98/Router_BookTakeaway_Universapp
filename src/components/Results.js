import styles from '../style/Results.module.css';
import SingleResult from './SingleResult';


const Results = ({data}) => {
    console.log('dati da results.js', data.items);
    const myData = data.items;
    const renderElement = () => {
        return myData.map((book, index) => {
            return <SingleResult key={index} title={book.volumeInfo.title} description={book.volumeInfo.description} />
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.resultsContainer}>
               {renderElement()}
            </div>
            
        </div>
    )
}

export default Results;
 