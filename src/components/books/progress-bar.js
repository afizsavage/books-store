import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
  const percentage = 66;
  return (
    <div className="progress-wrap flex">
      <div className="progress">
        <CircularProgressbar value={percentage} />
      </div>
      <div className="percentage flex">
        <span>{`${percentage}%`}</span>
        <span className="figure">Complete</span>
      </div>
    </div>
  );
};

export default Progress;
