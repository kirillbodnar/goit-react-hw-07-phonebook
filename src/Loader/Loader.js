import { TailSpin } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.Loader}>
      <TailSpin color="#000000" width={21} height={21} />
    </div>
  );
}
