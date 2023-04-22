import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import './ListItem.scss';
import { useState } from 'react';

export default function ListItem({ index }) {
  const [isHoverd, setIsHoverd] = useState(false);
  const trailer =
    'https://www.s921.ifilo.net/filo/video/TVRRd01TOHhNaTh4TlE9PQ==/TmtOQlowUTBkUT09/nnxc-360.mp4';
  return (
    <div
      className='listItem'
      style={{ left: isHoverd && index * 425 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <img
        src='https://www.filimo.com/shot/wp-content/uploads/2023/01/poosteshir-01.jpg'
        alt=''
      />

      {isHoverd && (
        <>
          <video src={trailer} autoPlay loop />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownAltOutlined className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>1 Hour 14 Mins</span>
              <span className='limit'>+16</span>
              <span>1999</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur perspiciatis eaque ullam, totam reprehenderit, nostrum
              accusamus officia ipsa pariatur rem deleniti amet veniam
              cupiditate atque fuga molestias tempora perferendis. Delectus? Ea,
              magnam voluptate eos sint aperiam vero magni atque autem
              necessitatibus excepturi sunt similique est voluptas explicabo
              ducimus nam iusto illum? Excepturi repellendus alias, odio vel
              inventore corporis rerum. In.
            </div>
            <div className='genre'>Action</div>
          </div>
        </>
      )}
    </div>
  );
}
