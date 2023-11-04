import {Search} from './components/Search/Search';
import styles from './App.module.scss'
import LabelVector from './img/skillactive.svg'
import {Card} from './components/Card/Card';

function App() {
  return (
    <div className={styles.page}>
      <img className={styles.skillactive} src={LabelVector} alt="Skillactive" />
      <Search />
      <Card/>
    </div>
  );
}

export default App;
