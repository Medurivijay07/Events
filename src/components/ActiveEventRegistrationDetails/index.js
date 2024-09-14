// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props
  const renderNoActiveEvent = () => (
    <>
      <p>Click on an event, to view its registration details</p>
    </>
  )

  const renderYetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-image"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make fall you in love totally with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registerd-image"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closedreg-image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  switch (status) {
    case 'YET_TO_REGISTER':
      return renderYetToRegister()
    case 'REGISTERED':
      return renderRegisteredView()
    case 'REGISTRATIONS_CLOSED':
      return renderRegistrationClosedView()
    default:
      return renderNoActiveEvent()
  }
}

export default ActiveEventRegistrationDetails
