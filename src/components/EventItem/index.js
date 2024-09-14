// Write your code here
import './index.css'

const EventItem = props => {
  const {eventObject, clickedEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventObject
  const onClickingImage = () => {
    clickedEvent(registrationStatus)
  }

  return (
    <li className="each-event-item">
      <button type="button" className="image-button" onClick={onClickingImage}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
