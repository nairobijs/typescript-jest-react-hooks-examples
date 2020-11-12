import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import styled from 'styled-components'
import redrawCalendar from './redrawCalendar'

function Calendar() {

  const [selectedDate, selectDate] = useState(moment()) 
  const [calendar, setCalendar] = useState<Array<Array<string>>>([])

  // set the start and end dates
  const startDate = selectedDate.clone().startOf('month').startOf('week')
  const endDate = selectedDate.clone().endOf('month').endOf('week')
  const numDates = Math.abs(startDate.diff(endDate, 'days'))
  console.log(numDates)

  // collect all dates expected in the view into one array
  const dates:[string] = [startDate.format('DD')]
  for(var i=0; i<numDates; i++){ 
    dates.push(startDate.add(1, 'day').format('DD'))
  }
  console.log(dates)
   
  // divide into weeks, make the calendar matrix
  let week:string[] = []
  // const numWeeks = parseInt(numDates/7, 10)
  dates.forEach(dt => {
    week.push(dt)
    if(week.length === 7){
      calendar.push(week)
      week = []
    }
  })

  console.log(calendar)

  // setCalendar(calendar)

  // useEffect(() => {
  //   let dates = redrawCalendar(selectedDate)
  // }, [selectedDate])

  console.log(calendar)
  
  const today = moment().format('DD')

  const style = (day:string) => {
    if(day === today){
      return 'outline-danger'
    }
    else if(day <= today){
      return 'outline-secondary'
    }
    else{
      return 'outline-info'
    }
  }
  
  return (
    <div>
      <h1>{selectedDate.format('MMMM')} {selectedDate.format('YYYY')}</h1>
      <Cal>
      {calendar.map((week:string[], index) => (
        <Row key={index}>
          {week.map((day:string) =>
            <Button 
              variant={style(day)} 
              disabled={ day < today ? true : false }
              size="lg" 
              key={day}
              // onClick={redrawCalendar}
              >{day}</Button>
          )}
        </Row>
      ))}
      </Cal>
    </div>
  )
}

export default Calendar

const Cal = styled.div`
  width: 400px;
  font-size: 20px;
  margin: 0 auto
`