import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import './List.scss';
import ListItem from '../ListItem/ListItem';
import { useRef, useState } from 'react';

export default function List() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [move, setMove] = useState(false);
  const listRef = useRef();
  const clickHandler = (direction) => {
    setMove(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = ` translateX(  ${432 + distance}px)  `;
    }
    if (direction === 'right' && slideNumber < 6) {
      setSlideNumber(slideNumber + 1);

      listRef.current.style.transform = ` translateX(  ${-432 + distance}px)`;
    }
    console.log(distance);
    console.log(move);
  };
  return (
    <div className='list'>
      <span className='listTitle'>Continu to watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='sliderArrow Left'
          onClick={() => clickHandler('left')}
          style={{ display: !move && 'none' }}
        />
        <div className='container' ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
          <ListItem index={12} />
        </div>
        <ArrowForwardIosOutlined
          onClick={() => clickHandler('right')}
          className='sliderArrow Right'
        />
      </div>
    </div>
  );
}
