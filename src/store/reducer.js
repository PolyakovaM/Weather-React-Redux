const NEW_FAVORITE_CITY = 'NEW_FAVORITE_CITY'
const NEW_DATA = 'NEW_DATA'
const DELETE_FAVORITE_CITY = 'DELETE_FAVORITE_CITY'
const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR'
const key = 'ffc2c0eee045e3efaee8dbcbe56a9aaf'

const initialState = {
  result : null,
  weatherIcon: null,
  searchError: false,
  favoriteCities: localStorage.getItem('WeatherApp') ? JSON.parse(localStorage.getItem('WeatherApp')) : []
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_FAVORITE_CITY: 
    return {
      ...state, 
      favoriteCities: [...state.favoriteCities, action.city]
    }
    case SET_SEARCH_ERROR:
      return {
        ...state,
        searchError: action.value,
      }
    case NEW_DATA: 
      return {
        ...state,
        searchError: false, 
        result: action.result,
        weatherIcon: action.img
      }
    case DELETE_FAVORITE_CITY: 
      return {
        ...state,
        favoriteCities: [...state.favoriteCities.filter(city => city !== action.city)]
      }
    default:
      return state
  }
}

export const addFavoriteCity = city => ({
  type: NEW_FAVORITE_CITY,
  city
})

export const deleteFavoriteCity = city => ({
  type: DELETE_FAVORITE_CITY,
  city
})

export const citySearch = (result, img) => ({
  type: NEW_DATA,
  result,
  img
})

export const setSearchError = (value) => ({
  type: SET_SEARCH_ERROR,
  value
})

export const getData = city => async dispatch => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ru`
  const data = await fetch(url)
  if (data.ok) { 
    const result = await data.json()
    const img =  `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png` 
    dispatch(citySearch(result, img))  
  } 
  else {
    dispatch(setSearchError(true))  
  }
}

export default appReducer
