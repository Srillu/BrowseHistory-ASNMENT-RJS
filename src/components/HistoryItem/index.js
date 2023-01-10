import './index.css'

const HistoryItem = props => {
  const {searchItem, onDeleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = searchItem

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="icon-and-button-container">
        <div className="icons-names">
          <img className="app-icon" alt="domain logo" src={logoUrl} />
          <p className="icon-names">{title}</p>
          <p className="domain-name">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="button"
          onClick={onDelete}
          testid="delete"
        >
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
