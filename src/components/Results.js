import styles from '../style/Results.module.css';
import SingleResult from './SingleResult';

const Results = () => {
    return (
        <div className={styles.container}>
            <h1>Results</h1>
            <div className={styles.resultsContainer}>
               <SingleResult /> 
               <SingleResult /> 
               <SingleResult /> 
               <SingleResult /> 
            </div>
            
        </div>
    )
}

export default Results;
 