import React from 'react';
import { showImg } from '../../apis';
import './MainSection.css';

const Mainsection = ({shows, pageNo, totPages, newResults}) => {
    return (
        <div className='content' >
            {shows.map((s) => {
                return(
                    <div className='show-card'>
                        <img 
                            alt='poster' 
                            src={
                                s.poster_path ? 
                                `${showImg}${s.poster_path}`
                                : 
                                'https://th.bing.com/th/id/OIP.dkCZisuJV5SI5Jn-gLuclAHaLH?pid=ImgDet&rs=1'} 
                            className='show-img' />
                        <div className='show-details'>
                            <h5 className='show-title' >{s.title ? s.title : s.name}</h5> 
                            <p>
                                {s.release_date ? s.release_date.substring(0, 4) : null}
                                {s.first_air_date ? s.first_air_date.substring(0, 4) : null}
                            </p>
                        </div>
                    </div>
                )
            })}
            
      <div className='more-shows'>
        <p onClick={() => newResults()} className={pageNo===totPages && 'disable'} >More</p>
      </div>
        </div>
    );
}

export default Mainsection;
