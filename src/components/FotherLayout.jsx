import React, {useState} from 'react';

const FotherLayout = () => {
    const [mediaquery, setmediaquery] = useState(false);
    window.addEventListener("resize", function(){
        if(window.screen.width <= 400){
            setmediaquery(true);
        }
        else{
            setmediaquery(false);
        }
    });

    let scrollold = window.scrollY;
    window.onscroll = () => {
        //movil-------------
        if(scrollold < window.scrollY){
          document.getElementById("Fother").style.bottom = '-75px';
          document.getElementById("Fother").style.opacity = '0';
          scrollold = window.scrollY
        }
        if(scrollold > window.scrollY){
            document.getElementById("Fother").style.bottom = '15px';
            document.getElementById("Fother").style.opacity = '1';
          scrollold = window.scrollY
        }
    };

    return (
        <div className='Fother' id='Fother' style= {{..._FotherLayout[`${mediaquery || window.screen.width <=400? 'Fother': 'FotherNone'}`]}}>
            <div className='contfhoter' style= {{..._FotherLayout.contfhoter}}>
                <div className='btnF' style={{..._FotherLayout.btn}}>
                    <svg className="icon_footer" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 16 16">
                        <path fill="#767676"
                            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z">
                        </path>
                    </svg>
                </div>
                <div className='btnF' style={{..._FotherLayout.btn}}>
                    <svg className="icon_footer" aria-label="ícono de búsqueda" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#767676"
                            d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
                        </path>
                    </svg>
                </div>
                <div className='btnF' style={{..._FotherLayout.btn}}>
                    <svg className="icon_footer" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#767676"
                            d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0">
                        </path>
                    </svg>
                </div>
                <div className='btnF' style={{..._FotherLayout.btn}}>
                    <svg className="icon_footer" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 14 14">
                        <path fill="#767676"
                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

const _FotherLayout = {
    Fother: {
        height: '62px',
        width: '100vw',
        position:'fixed',
        zIndex:'2000',
        bottom: '15px',
        display: 'flex',
        justifyContent: 'center',
        transition: 'all 1s ease',
    },
    FotherNone: {
        display: 'none',
    },
    contfhoter: {
        backgroundColor: '#fff',
        height: '100%',
        width: '70%',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 0px 5px 0px #00000020',
    },
    btn:{
        padding: '20px 20px',
        textAlign: 'center',
        borderRadius: '50px',
        cursor: 'pointer',

    }
};
  
export default FotherLayout;