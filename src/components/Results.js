import styles from '../style/Results.module.css';
import SingleResult from './SingleResult';

const fakeData = [
    {title: 'libro 1', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit'},
    {title: 'libro 2', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit'},
    {title: 'libro 3', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit'},
    {title: 'libro 4', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit'},
    {title: 'libro 5', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit'},
    {title: 'libro 6', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit'},
    {title: 'libro 7', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit'},
]

const Results = () => {
    const renderElement = () => {
        return fakeData.map((book) => {
            return <SingleResult title={book.title} description={book.description} />
        })
    }
    return (
        <div className={styles.container}>
            <h1>Results</h1>
            <div className={styles.resultsContainer}>
               {renderElement()}
            </div>
            
        </div>
    )
}

export default Results;
 