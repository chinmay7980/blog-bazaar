"use client"

import React from "react"

import { Calendar } from "./ui/calendar"

export function MyCalendar() {
  const [date, setDate] = React.useState(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  )
}
