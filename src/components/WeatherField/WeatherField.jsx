import React, { useState } from 'react'
import { 
  EmptyDiv, 
  EmptyHeader, 
  WeatherFieldInput, 
  WeatherFieldButton, 
  ErrorMessageDiv, 
  EmptyDivForm
} from './WeatherFieldStyle'

const WeatherField = ({
  getData, 
  searchError,
  setSearchError
}) => {
  const [city, setCity] = useState('')

  const onChangeValue = (e) => {
    setCity(e.currentTarget.value.trimLeft())
    if (searchError) {
      setSearchError(false)
    }
  }

  const handleSubmit = () => {
    getData(city) 
    setCity('')
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <EmptyDiv>
      <EmptyHeader>Weather Forecast</EmptyHeader>
      <EmptyDivForm>
        <WeatherFieldInput 
          onChange={onChangeValue} 
          value={city} 
          onKeyDown={onKeyDown}
          placeholder='Введите название города'
        />
        <WeatherFieldButton onClick={handleSubmit}>Найти</WeatherFieldButton>
        {searchError && <ErrorMessageDiv>По данному запросу ничего не найдено! Попробуй еще раз :)</ErrorMessageDiv>}
      </EmptyDivForm>
    </EmptyDiv>
  )
}

export default WeatherField