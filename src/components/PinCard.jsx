import React from 'react';

const PinCard = (props) => {
  return (
    <div style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}>
      <div style={{..._stylesPinCard.pin_card_buttom, ..._stylesPinCard.pin_card_buttom_board_flecha}}>
      <p className="btn-tablero" href="#Tablero">Tablero</p>
      <svg className="tablero" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 25 40">
              <path fill="#fff"
                  d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z">
              </path>
          </svg>
      </div>
      <div style={{..._stylesPinCard.pin_card_buttom, ..._stylesPinCard.pin_card_buttom_save}}>
        Guardar
      </div>
      <img className='imagen' src={props.image} alt='img' width='100%' style={{..._stylesPinCard.pin_card.img}} />
    </div>
  );
};

const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'red',
    display: 'flex',
    cursor: 'pointer',
    img:{
      borderRadius:'16px',
    }
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
  pin_card_buttom:{
    position: 'absolute',
    zIndex:'1988',
    borderRadius: '25px',
    color:'white',
    fontWeight: 'bold',
    marginTop:'15px',
  },
  pin_card_buttom_save:{
    backgroundColor: 'red',
    marginLeft: '8em',
    padding:'15px',
  },
  pin_card_buttom_board_flecha:{
    marginLeft: '1em',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default PinCard;
