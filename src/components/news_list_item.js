import React from 'react'

const NewsListItem = ({item}) => {
  return (
    <div className='news__item'>
      <h3 className='news__title'>{item.title}</h3>
      <p className='news__content'>{item.feed}</p>
    </div>
   );
}

export default NewsListItem;
