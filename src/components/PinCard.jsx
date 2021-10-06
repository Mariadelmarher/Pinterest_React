import React from 'react';

const PinCard = (props) => {
  return (
    <div style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size]}}>
      <div style={{..._stylesPinCard.pin_card_button, ..._stylesPinCard.pin_card_button_board_flecha}}>
      <p className="btn-tablero" href="#Tablero">Tablero</p>
      <svg className="tablero" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 25 40">
              <path fill="#fff"
                  d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z">
              </path>
          </svg>
      </div>
      <div className="btn-save" style={{..._stylesPinCard.pin_card_button, ..._stylesPinCard.pin_card_button_save}}>
        Guardar
      </div>
      <div className="icons-bottom-card" style={{..._stylesPinCard.pin_card_button, ..._stylesPinCard.icons_bottom_position, ..._stylesPinCard[props.tam]}}>
        <div className="icon-bottom" style={{..._stylesPinCard.icons_bottom_card}}>
          <svg className="icon" fill="currentColor" width="24" height="24" viewBox="0 0 25 30">
            <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9v6h-4V9H5l7-7 7 7h-5z"/>
          </svg>
        </div>
        <div className="icon-bottom" style={{..._stylesPinCard.icons_bottom_card}}>
          <svg className="icon" fill="currentColor" width="24" height="24" viewBox="0 0 25 26">
            <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </div>
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
  pin_card_button:{
    position: 'absolute',
    zIndex:'1988',
    borderRadius: '25px',
    fontWeight: 'bold',
  },
  pin_card_button_save:{
    backgroundColor: '#e60023',
    marginLeft: '8em',
    padding:'15px',
    color:'white',
    marginTop:'15px',
  },
  pin_card_button_board_flecha:{
    marginLeft: '1em',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:'white',
    marginTop:'15px',
  },
  icons_bottom_card:{
    height: '24px',
    width: '24px',
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '25px',
    backgroundColor: 'rgba(208,208,208,0.8)',
    color:'black',
    marginLeft:'7px'
  },
  icons_bottom_position:{
    display:'flex',
    marginLeft:'8em'
  },
  small_icon:{
    marginTop:'11em'
  },
  medium_icon:{
    marginTop:'15.3em'
  },
  large_icon:{
    marginTop:'23em'
  }
};

export default PinCard;
