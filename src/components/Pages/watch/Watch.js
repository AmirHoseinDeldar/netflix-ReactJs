import { ArrowBackIosOutlined } from '@material-ui/icons';
import './watch.scss';

export default function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackIosOutlined />
        Home
      </div>
      <video
        className='video'
        autoPlay
        progress
        controls
        src='https://www.s921.ifilo.net/filo/video/TVRRd01TOHhNaTh4TlE9PQ==/TmtOQlowUTBkUT09/nnxc-360.mp4'
      ></video>
    </div>
  );
}
