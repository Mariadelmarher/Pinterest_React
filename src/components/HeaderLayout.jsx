import React, {useState} from 'react';

const HeaderLayout = () => {
  const [mediaqueryheader, setmediaqueryheader] = useState(false);
    window.addEventListener("resize", function(){
      if(window.screen.width <= 400){
        setmediaqueryheader(true);
      }
      else{
        setmediaqueryheader(false);
      }
  });

  let scrollold = window.scrollY;
    window.onscroll = () => {
        //movil-------------
        if(scrollold < window.scrollY){
          document.getElementById("headerMobile").style.top = '0px';
          document.getElementById("headerMobile").style.opacity = '1';
          scrollold = window.scrollY;
        }
        if(scrollold > window.scrollY){
            document.getElementById("headerMobile").style.top = '-75px';
            document.getElementById("headerMobile").style.opacity = '0';
          scrollold = window.scrollY;
        }
    };

  return (
    <div className='Header' style= {{..._stylesHeader.header}}>
      
      <div className='content-header' style={{..._stylesHeader[`${mediaqueryheader || window.screen.width <= 400 ? "contentnone":"content"}`]}}>
        <div className='btn pinterest-margen' style={{..._stylesHeader.icono}}>
          <svg className="pinterest" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#E6001A"
                  d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12">
              </path>
          </svg>
        </div>

        <a className="btn active" href="#Inicio" style={{..._stylesHeader.content.a}}>Inicio</a>
        <a className="btn" href="#Hoy" style={{..._stylesHeader.content.a}}>Hoy</a>

        <div className="btn" style={{..._stylesHeader.searchBar}}>
          <svg className="search-icon" aria-label="ícono de búsqueda" width="16" height="16" viewBox="0 0 24 24">
                <path fill="#767676"
                    d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
                </path>
            </svg>
            <input type="text" placeholder="Buscar" name="buscar" style={{..._stylesHeader.inputSearch}}/>
        </div>

        <div className='btn' style={{..._stylesHeader.icono}}>
          <svg className="campana" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#767676"
                  d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z">
              </path>
          </svg>
        </div>
        <div className='btn' style={{..._stylesHeader.icono}}>
          <svg className="notificaciones" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#767676"
                  d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0">
              </path>
          </svg>
        </div>
        <div className='btn' style={{..._stylesHeader.icono}}>
          <img className="img-profile" alt="" width="24" height="24" src="https://i.pinimg.com/75x75_RS/cc/50/4d/cc504d24a340c4072cdaf27fe4a43a66.jpg"></img>
        </div>
        <div className='btn despliegue-btn' style={{..._stylesHeader.icono}}>
          <svg className="despliegue" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 30 40">
              <path fill="#767676"
                  d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z">
              </path>
          </svg>
        </div>
      </div>
    
      <div id='headerMobile' style={{..._stylesHeader[`${mediaqueryheader || window.screen.width <= 400 ? "headerMobile":"headerMobilenone"}`]}}>
        <a className="btn" href="#parati" style={{..._stylesHeader.headerMobile.a}}>para ti</a>
        <a className="btn" href="#Hoy" style={{..._stylesHeader.headerMobile.a}}>Hoy</a>
        <a className="btn" href="#ilustracion" style={{..._stylesHeader.headerMobile.a}}>ilustracion</a>
        <a className="btn" href="#recetas" style={{..._stylesHeader.headerMobile.a}}>Recetas de</a>
      </div>
    
    </div>
  );
};

const _stylesHeader = {
  header: {
    backgroundColor: '#fff',
    height: '80px',
    width: '100%'
  },
  icono: {
    height: '24px',
    width: '24px',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '25px',
    backgroundColor: '#0000'
  },
  content: {
    backgroundColor: 'white',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '4px',
    width: '100%',
    height: '80px',
    a:{
      float: 'left',
      display: 'block',
      color: 'black',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      fontSize: '17px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", 
      fontWeight: 'bold',
      borderRadius:'24px'
    },
    position:'fixed',
    zIndex:'1000'
  },
  contentnone:{
    display: 'none',
  },
  searchBar:{
    backgroundColor:'#efefef',
    borderRadius: '24px', 
    display: 'flex',
    height: '3em',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '16px',
    flex: '1 1 auto',
    marginRight:'10px',
    marginLeft: '10px'
  },
  inputSearch:{
    width:'100%',
    height:'100%',
    border: 'none',
    outline: 'none',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    borderRadius: '0 24px 24px 0',
    padding:'0',
    marginLeft: '8px',
    backgroundColor:'#0000',
    fontSize:'16px'
  },
  headerMobile:{
    backgroundColor: '#fff',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '16px',
    paddingBottom: '4px',
    width: '100%',
    height: '70px',
    position:'fixed',
    zIndex:'999',
    transition: 'all 1s ease',
    top:'0px',
    boxShadow: '0px 0px 5px 0px #00000020',
    a:{
      float: 'left',
      color: 'black',
      textAlign: 'center',
      padding: '14px 14px',
      textDecoration: 'none',
      fontSize: '17px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", 
      fontWeight: 'bold',
      borderRadius:'24px',
      whiteSpace: 'nowrap',

    },
  },
  headerMobilenone:{
    display: 'none',
  },
};

export default HeaderLayout;
