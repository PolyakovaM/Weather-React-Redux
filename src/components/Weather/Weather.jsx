import React from 'react'
import { connect } from 'react-redux'

import FavoriteCities from "../FavoriteCities/FavoriteCities"
import WeatherField from "../WeatherField/WeatherField"
import InfoAboutWeather from "../InfoAboutWeather/InfoAboutWeather"

import { EmptyDiv, WeatherForecastItems } from "./WeatherStyles"

import { 
  citySearch,
  getData,
  addFavoriteCity,
  deleteFavoriteCity,
  setSearchError
} from '../../store/reducer'

const Weather = ({
  getData, 
  addFavoriteCity, 
  favoriteCities,
  deleteFavoriteCity,
  result,
  weatherIcon,
  searchError,
  setSearchError
}) => (
  <EmptyDiv>
    <WeatherField 
      getData={getData}
      searchError={searchError}
      setSearchError={setSearchError}
    />
    <WeatherForecastItems>
      <FavoriteCities 
        favoriteCities={favoriteCities}
        deleteFavoriteCity={deleteFavoriteCity}
        getData={getData}
      />
      <InfoAboutWeather 
        addFavoriteCity={addFavoriteCity}
        favoriteCities={favoriteCities}
        result={result}
        weatherIcon={weatherIcon}
      />
    </WeatherForecastItems>
  </EmptyDiv>
)

const mapStateToProps = ({ appReducer }) => ({
  favoriteCities: appReducer.favoriteCities,
  result: appReducer.result,
  weatherIcon: appReducer.weatherIcon,
  searchError: appReducer.searchError
})

const mapDispatchToProps = {
  citySearch,
  getData,
  addFavoriteCity,
  deleteFavoriteCity,
  setSearchError
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)