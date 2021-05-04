import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { 
  EmptySpan, 
  FavoriteCityDiv, 
  AddedCitiesDiv, 
  AddedCity, 
  EmptyDiv, 
  IconDiv 
} from './FavoriteCitiesStyle'

const FavoriteCities = ({
  favoriteCities, 
  deleteFavoriteCity, 
  getData
}) => (
  <FavoriteCityDiv>
    <EmptySpan>Избранное</EmptySpan>
    <AddedCitiesDiv>
      {favoriteCities.map(city => (
        <AddedCity key={city}>
          <EmptyDiv onClick={() => getData(city)}>
            {city}
          </EmptyDiv>
          <IconDiv>
            <FontAwesomeIcon 
              onClick={() => {deleteFavoriteCity(city)}} 
              icon={faTimes}
            />
          </IconDiv>
        </AddedCity>
      ))}
    </AddedCitiesDiv>
  </FavoriteCityDiv>
)

export default FavoriteCities