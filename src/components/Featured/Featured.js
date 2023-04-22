import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';

export default function Featured() {
  return (
    <div className='featured'>
      <img src='https://cdn.zoomg.ir/2023/3/baradarane-leila.jpg' alt='' />
      <div className='info'>
        <div className='headPic'>برادران لیلا</div>
        <span className='desc'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          maiores, quos exercitationem suscipit cupiditate minus, enim provident
          consequatur, ducimus voluptatem unde possimus? Cum asperiores ipsa
          corrupti molestias officiis. Dolorem, et. Porro laborum nemo corrupti,
          tempore molestias dignissimos recusandae officiis natus numquam quas
          optio esse minima adipisci tenetur ducimus, deserunt vel soluta
          asperiores. Voluptates aperiam nihil quo molestias quos quia placeat.
          orporis impedit porro officia aspernatur obcaecati debitis quod
          eligendi quasi, quibusdam quas. Corrupti, quia.
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
