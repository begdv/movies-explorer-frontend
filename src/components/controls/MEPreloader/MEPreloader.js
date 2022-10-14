import React from 'react'
import clsx from 'clsx';

import './MEPreloader.css'

const MEPreloader = (props) => {
  const { isShow } = props;
  
    return (
        <div className={clsx('MEPreloader', isShow ? 'MEPreloader_show' : '')}>
            <div className="MEPreloader__container">
                <span className="MEPreloader__round"></span>
            </div>
        </div>
    )
};

export default MEPreloader
