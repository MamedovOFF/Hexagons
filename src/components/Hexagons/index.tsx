import { TouchEventHandler, useState, WheelEventHandler } from 'react'
import './style.css'

type hexagonsProps = {
  hexagons: Array<{
    place: string
    time: string
    link: string
    hour: string
    opponent_1: string
    opponent_2: string
    id: number
  }>
}

const calculateStyle = (active: number, idx: number) => {
  return {
    transform: `translate(-${active * 210}px, ${120 * (active - idx)}px) ${idx === active ? 'scale(1)' : 'scale(0.5)'}`,
  }
}

let startX = 0

function Hexagons({ hexagons }: hexagonsProps) {
  const [active, setActive] = useState(Math.floor((hexagons.length - 1) / 2))

  const handelWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    if (event.deltaY > 0) {
      if (active > 0) setActive(active - 1)
    } else {
      if (active < hexagons.length - 1) setActive(active + 1)
    }
  }

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    startX = event.touches[0].clientX
  }

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    const endX = event.changedTouches[0].clientX
    if (endX > startX && active > 0) setActive(active - 1)
    else if (endX < startX && active < hexagons.length - 1)
      setActive(active + 1)
  }

  const moveToItem = (id: number) => {
    setActive(id)
  }

  return (
    <div
      className="carousel"
      onWheel={handelWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="opponent opponent-1">
        <span>{hexagons[active].opponent_1}</span>
      </div>
      <ul className="items">
        {hexagons.map(({ place, link, time, hour, id }, idx) => (
          <li
            key={id}
            className={`item ${idx === active && 'active'}`}
            style={calculateStyle(active, idx)}
            onClick={() => moveToItem(idx)}
          >
            <span className="place">{place}</span>
            <span className="time">{time}</span>
            <span className="hour">{hour}</span>
            <a href={link} className="btn_link" target="_blank">
              Купить билеты
            </a>
          </li>
        ))}
      </ul>
      <div className="opponent opponent-2">
        <span>{hexagons[active].opponent_2}</span>
      </div>
    </div>
  )
}

export default Hexagons
