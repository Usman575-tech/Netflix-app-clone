function Card(prop){
    return(
        <>
        <div className='cards'>
          <div className='card'>
            <img src= {prop.imgsrc}/>
            <div className='card_info'>
              <span className='categoty'>A Netflix Original Movie</span>
              <h3 className='card_title'>{prop.title}</h3>
              <a href={prop.href}target='_blank'>
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
        </>
    )
}
export default Card;