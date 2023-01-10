import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowseHistory extends Component {
  state = {
    searchInput: '',
    searchResults: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteItem = id => {
    const {searchResults} = this.state

    const filterDomainList = searchResults.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({searchResults: filterDomainList})
  }

  render() {
    const {searchInput, searchResults} = this.state

    const filterList = searchResults.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="top-container">
          <img
            className="history-icon"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
          />
          <div className="search-container">
            <button className="search-button" type="button">
              <img
                className="search-icon"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </button>
            <input
              className="search-input"
              type="search"
              onChange={this.onChangeSearchInput}
              placeholder="Search History"
            />
          </div>
        </div>
        <div className="bottom-container">
          {searchResults.length > 0 ? (
            <ul className="ul-container">
              {filterList.map(eachItem => (
                <HistoryItem
                  onDeleteItem={this.onDeleteItem}
                  searchItem={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          ) : (
            <div className="no-history-name bottom-container">
              <p>There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default BrowseHistory
