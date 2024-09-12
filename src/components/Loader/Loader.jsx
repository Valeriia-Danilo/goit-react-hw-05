import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
    return (<div className={css.loaderContainer}>
        <Oval
  visible={true}
  height="50"
  width="50"
  color="#4fa94d"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div>)
}