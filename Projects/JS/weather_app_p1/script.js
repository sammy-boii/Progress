// initial load

addEventListener("DOMContentLoaded", () => {
  gsap.to("body", { y: 0 })
})

// global variables

const API_KEY = "e64642dcaf18a4c680f82227fc60e855"
let CITY_NAME = "Tiruppur"

// DOM elements

const inputBar = document.querySelector(".search-input")

const paperPlane = document.querySelector(".paper-plane")
const planePath = document.querySelector("#plane-path")

const globe = document.querySelector(".globe")

const card = document.querySelector(".card")

// card's left side

const cardLeft = document.querySelector(".card-left")
const leftHeader = cardLeft.querySelector(".header")
const leftFooter = cardLeft.querySelector(".footer")

const weekDay = cardLeft.querySelector(".week-day")
const day = cardLeft.querySelector(".day")
const month = cardLeft.querySelector(".month")
const year = cardLeft.querySelector(".year")
const fullLocation = cardLeft.querySelector(".full-location")
const weatherImg = cardLeft.querySelector("img")
const temperature = cardLeft.querySelector(".temperature")

// card's right side

const cardRight = document.querySelector(".card-right")
const rightHeader = cardRight.querySelector(".header")
const rightFooter = cardRight.querySelector(".footer")

const precipitation = cardRight.querySelector(".precipitation")
const humidity = cardRight.querySelector(".humidity")
const wind = cardRight.querySelector(".wind")

// fetching data

async function fetchData() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
    )
    const data = await response.json()
    document.title = `☁ ${CITY_NAME}'s Weather ☁`
    modifyCard(data)
  } catch (error) {
    toggleAnimation()
    console.log("Error in fetching:", error)
    inputBar.style.outline = "1px solid red"
    setTimeout(() => {
      inputBar.style.outline = "none"
    }, 1000)
  }
}

fetchData()

// utility functions

function modifyCard(data) {
  const unixTime = data.dt
  const unformattedTime = new Date(unixTime * 1000) // converting to ms

  const _year = unformattedTime.getFullYear()
  const _month = unformattedTime.toLocaleDateString("en-US", {
    month: "short"
  })
  const _day = unformattedTime.getDate()
  const _weekDay = unformattedTime.toLocaleDateString("en-US", {
    weekday: "long"
  })

  const _temperature = `${Math.round(data.main.temp)}°C`
  const _wind = `${Math.round(data.wind.speed)} km/h`
  const _humidity = `${Math.round(data.main.humidity)}%`
  const _fullLocation = `➤ ${CITY_NAME}, ${data.sys.country.toUpperCase()}`
  const weatherIcon = data.weather[0].icon
  const _precipitation = `${
    (data.rain?.["1hr"] || 0) + (data.rain?.["1hr"] || 0)
  }%`

  // optional chaining operator is used cuz the API doesn't provide 'rain' or 'snow' property if there is no precipitation in the past hour

  // also properties cannot start with a number so it's kept inside double quotes

  day.innerText = _day
  temperature.innerText = _temperature
  precipitation.innerText = _precipitation
  humidity.innerText = _humidity
  wind.innerText = _wind
  year.innerText = _year
  month.innerText = _month
  weekDay.innerText = _weekDay
  fullLocation.innerText = _fullLocation
  weatherImg.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
}

function handleInput(e) {
  if (e.key === "Enter") {
    if (!e.target.value) {
      inputBar.style.outline = "1px solid red"
      setTimeout(() => {
        inputBar.style.outline = "none"
      }, 1000)
    } else {
      CITY_NAME = e.target.value.toUpperCase()
      fetchData()
      toggleAnimation()
    }
  }
}

let reversed = false

function toggleAnimation() {
  if (!reversed) {
    tl.play()
    reversed = !reversed
  } else {
    tl.reverse()
    reversed = !reversed
  }
}

// tl.reversed() exists for checking but on the first animation but it doesn't work properly

// gsap animation timeline

const tl = gsap.timeline({
  paused: true,
  onStart: () => {
    paperPlane.src = "https://gdurl.com/5U9V"
  },
  onReverseComplete: () => {
    paperPlane.src = "https://gdurl.com/I0q8"
  }
})

tl.to(paperPlane, {
  duration: 0.9,
  opacity: 0,
  rotate: "185deg"
})
  .to(paperPlane, {
    duration: 2.5,
    motionPath: {
      path: planePath,
      align: planePath,
      autoRotate: true
    }
  })
  .to(
    paperPlane,
    {
      opacity: 1
    },
    "+.9"
  )
  .to(globe, { right: "49%", scale: 0.7, opacity: 0.5 }, "1.8")
  .to(
    paperPlane,
    {
      opacity: "0",
      width: "0",
      height: "0",
      duration: 1
    },
    "=-.8"
  )
  .to(
    leftHeader,
    {
      opacity: 0,
      duration: 1
    },
    "+1"
  )
  .to(
    leftFooter,
    {
      opacity: 0,
      duration: 1
    },
    "+1.4"
  )
  .to(
    rightHeader,
    {
      opacity: 0,
      duration: 1
    },
    "+1.5"
  )
  .to(
    rightFooter,
    {
      opacity: 0,
      duration: 1
    },
    "+1.7"
  )
  .to(weatherImg, { opacity: 0, duration: 1 }, "+1.5")
  .to(
    cardRight,
    {
      y: 400,
      opacity: 0,
      duration: 1.6,
      opacity: 0
    },
    "+2.0"
  )
  .to(
    cardLeft,
    {
      x: 440,
      opacity: 0,
      duration: 1.8,
      opacity: 0
    },
    "+2.3"
  )
  .to(card, { opacity: 0 }, "+2.5")
  .to(
    inputBar,
    {
      ease: "bounce",
      color: "white",
      duration: 0.9,
      display: "block",
      width: "clamp(30vw, 35vw, 40vw)",
      border: "none",
      borderRadius: "1rem",
      padding: "1rem",
      background: "rgba(0,0,0,0.1)",
      zIndex: "100",
      onComplete: () => {
        inputBar.addEventListener("keypress", handleInput)
      }
    },
    "+2.5"
  )

// event listeners

paperPlane.addEventListener("click", toggleAnimation)

card.addEventListener("mouseenter", () => {
  card.style.filter = "contrast(0.9)"
})

card.addEventListener("mouseleave", () => {
  card.style.filter = "contrast(1)"
})
