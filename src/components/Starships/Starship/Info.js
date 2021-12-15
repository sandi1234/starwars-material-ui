import React from 'react'
import { Grid, List, ListItem } from '@mui/material'
import customStyles from '../../../../styles/Custom.module.css'

const Info = ({ data }) => {
  const not = 'n/a'
  return (
    <Grid item lg={6} md={6} sm={6} xs={12}>
      <List className={customStyles.center}>
        {data.name != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Name: {data.name}
          </ListItem>
        ) : (
          ''
        )}
        {data.model != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Model: {data.model}
          </ListItem>
        ) : (
          ''
        )}
        {data.manufacturer != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Manufacturer: {data.manufacturer}
          </ListItem>
        ) : (
          ''
        )}
        {data.cost_in_credits != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Credits: {data.cost_in_credits}
          </ListItem>
        ) : (
          ''
        )}
        {data.length != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Length: {data.length}
          </ListItem>
        ) : (
          ''
        )}
        {data.max_atmosphering_speed != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Max Speed: {data.max_atmosphering_speed}
          </ListItem>
        ) : (
          ''
        )}
        {data.crew != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Crew: {data.crew}
          </ListItem>
        ) : (
          ''
        )}

        {data.passengers != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Passengers: {data.passengers}
          </ListItem>
        ) : (
          ''
        )}
        {data.cargo_capacity != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Cargo Capacity: {data.cargo_capacity}
          </ListItem>
        ) : (
          ''
        )}
        {data.consumables != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Consumables: {data.consumables}
          </ListItem>
        ) : (
          ''
        )}
        {data.hyperdrive_rating != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Hyperdrive Rating: {data.hyperdrive_rating}
          </ListItem>
        ) : (
          ''
        )}
        {data.MGLT != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            MGLT: {data.MGLT}
          </ListItem>
        ) : (
          ''
        )}
        {data.starship_class != not ? (
          <ListItem className={`${customStyles.cardBG} p-2 m-1`}>
            Starship Class: {data.starship_class}
          </ListItem>
        ) : (
          ''
        )}
      </List>
    </Grid>
  )
}

export default Info
