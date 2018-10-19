import React from 'react';
export default (str,searchStr)=>{
  return searchStr ? (
    <span>
      {str.split(new RegExp(`(?<=${searchStr})|(?=${searchStr})`, 'i')).map((fragment, i) => (
        fragment.toLowerCase() === searchStr.toLowerCase()
          ? <mark key={i} style={{background: '#ffc800', paddingLeft:0, paddingRight: 0}} className="textHighlight">{fragment}</mark> : fragment // eslint-disable-line
      ))}
    </span>
  ) : str;
};