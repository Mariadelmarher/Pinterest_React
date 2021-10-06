import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
  return (
    <div style={_stylesLayout.pin_container}>
      <PinCard size='small' image='https://picsum.photos//299/450'/>
      <PinCard size='medium' image='https://picsum.photos//301/450'/>
      <PinCard size='large' image='https://picsum.photos//298/450'/>
      <PinCard size='small' image='https://picsum.photos//280/450'/>
      <PinCard size='medium' image='https://picsum.photos//330/450'/>
      <PinCard size='large' image='https://picsum.photos//399/450'/>
      <PinCard size='small' image='https://picsum.photos//297/450'/>
      <PinCard size='medium' image='https://picsum.photos//455/450'/>
      <PinCard size='large' image='https://picsum.photos//251/450'/>
      <PinCard size='small' image='https://picsum.photos//211/450'/>
      <PinCard size='medium' image='https://picsum.photos//780/450'/>
      <PinCard size='large' image='https://picsum.photos//296/450'/>
      <PinCard size='small' image='https://picsum.photos//555/450'/>
      <PinCard size='medium' image='https://picsum.photos//666/450'/>
      <PinCard size='large' image='https://picsum.photos//111/450'/>
      <PinCard size='small' image='https://picsum.photos//999/450'/>
      <PinCard size='medium' image='https://picsum.photos//632/450'/>
      <PinCard size='large' image='https://picsum.photos//588/450'/>
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '90vw',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
  },
};

export default PinterestLayout;
