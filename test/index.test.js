import { describe, expect, it } from 'vitest'

import tinyDateFormat from '../index'

describe('Tests', () => {
  it('Two-digit year', () => {
    const current = new Date().getFullYear().toString().slice(-2)
    const year = tinyDateFormat('YY')
    expect(year).eq(current)
  })
  it('Four-digit year', () => {
    const current = new Date().getFullYear().toString()
    const year = tinyDateFormat('YYYY')
    expect(year).eq(current)
  })
  it('month (1-12)', () => {
    const current = (new Date('2023-1-1').getMonth() + 1).toString()
    const month = tinyDateFormat('M', '2023-1-1')
    expect(month).eq(current)
  })
  it('The month, 2-digits (01-12)', () => {
    const current = (new Date().getMonth() + 1).toString().padStart(2, '0')
    const month = tinyDateFormat('MM')
    expect(month).eq(current)
  })
  it('The abbreviated month name', () => {
    const current = new Date().toLocaleString('default', { month: 'short' })
    const month = tinyDateFormat('MMM')
    expect(month).eq(current)
  })
  it('The full month name', () => {
    const current = new Date().toLocaleString('default', { month: 'long' })
    const month = tinyDateFormat('MMMM')
    expect(month).eq(current)
  })
  it('Every day (1-31)', () => {
    const current = new Date('2023-1-1').getDate().toString()
    const day = tinyDateFormat('D', '2023-1-1')
    expect(day).eq(current)
  })
  it('Every day (01-31)', () => {
    const current = new Date().getDate().toString()
    const day = tinyDateFormat('DD')
    expect(day).eq(current)
  })
  it('Sunday (7)', () => {
    const week = tinyDateFormat('d', '2023-1-1')
    expect(week).eq('7')
  })
  it('hour (0-23)', () => {
    const current = new Date('2023-1-1 2:1:1').getHours().toString()
    const hour = tinyDateFormat('H', '2023-1-1 2:1:1')
    expect(hour).eq(current)
  })
  it('hour (00-23)', () => {
    const current = new Date().getHours().toString()
    const hour = tinyDateFormat('HH')
    expect(hour).eq(current)
  })
  it('hour (0-12)', () => {
    const current = (new Date('2023-1-1 14:1:1').getHours() % 12 || 12).toString()
    const hour = tinyDateFormat('h', '2023-1-1 14:1:1')
    expect(hour).eq(current)
  })
  it('hour (00-12)', () => {
    const current = (new Date('2023-1-1 14:1:1').getHours() % 12 || 12).toString().padStart(2, '0')
    const hour = tinyDateFormat('hh', '2023-1-1 14:1:1')
    expect(hour).eq(current)
  })
  it('minutes (0-59)', () => {
    const current = new Date('2023-1-1 14:1:1').getMinutes().toString()
    const minutes = tinyDateFormat('m', '2023-1-1 14:1:1')
    expect(minutes).eq(current)
  })
  it('minutes (00-59)', () => {
    const current = new Date('2023-1-1 14:1:1').getMinutes().toString().padStart(2, '0')
    const minutes = tinyDateFormat('mm', '2023-1-1 14:1:1')
    expect(minutes).eq(current)
  })
  it('seconds (0-59)', () => {
    const current = new Date('2023-1-1 14:1:1').getSeconds().toString()
    const seconds = tinyDateFormat('s', '2023-1-1 14:1:1')
    expect(seconds).eq(current)
  })
  it('seconds (00-59)', () => {
    const current = new Date('2023-1-1 14:1:1').getSeconds().toString().padStart(2, '0')
    const seconds = tinyDateFormat('ss', '2023-1-1 14:1:1')
    expect(seconds).eq(current)
  })
})
