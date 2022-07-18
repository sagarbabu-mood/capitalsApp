import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {selectedCountryId: countryAndCapitalsList[0].id}

  changeState = event => {
    this.setState({selectedCountryId: event.target.value})
  }

  getCapital = () => {
    const {selectedCountryId} = this.state
    const result = countryAndCapitalsList.find(
      each => each.id === selectedCountryId,
    )
    console.log(result)
    return result.country
  }

  render() {
    const {selectedCountryId} = this.state
    const capital = this.getCapital(selectedCountryId)
    return (
      <>
        <div className="bg-container">
          <div className="capitals-container">
            <h1 className="heading">Countries And Capitals</h1>
            <div>
              <select
                onChange={this.changeState}
                className="selected"
                id="select"
                value={selectedCountryId}
              >
                {countryAndCapitalsList.map(eachCountry => (
                  <option key={eachCountry.id} value={eachCountry.id}>
                    {eachCountry.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p htmlFor="select">is capital of which country</p>
            </div>
            <p className="result">{capital}</p>
          </div>
        </div>
      </>
    )
  }
}

export default Capitals
