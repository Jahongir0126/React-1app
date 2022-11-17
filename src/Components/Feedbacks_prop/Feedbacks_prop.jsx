import './Feedbacks_prop.scss'

export default function Comment(props) {
  return (
  <>
    <div className="coment">
    <div className="coment__card">
      <p className="coment__card__p">{props.title}</p>
      <div className="coment__card__body person">
        <img className='person__img' src={props.img} alt="img-persons" />
        <div className="person__body">
        <p className='person__name'>{props.name}</p>
        <p className='person__text'>{props.text}</p>
      </div></div>
    </div>
    </div>
  </>
  )
}