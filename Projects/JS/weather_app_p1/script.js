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

const grid = cardRight.querySelector(".grid")
const item1 = cardRight.querySelector(".item-1")
const item2 = cardRight.querySelector(".item-2")
const item3 = cardRight.querySelector(".item-3")
const item4 = cardRight.querySelector(".item-4")

// fetching data

async function fetchData() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
    )
    const data = await response.json()
    console.log(data)
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

document.title = `☁ ${CITY_NAME}'s Weather ☁`
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
    if (e.target.value === false) {
      inputBar.style.outline = "1px solid red"
      toggleAnimation()
      setTimeout(() => {
        inputBar.style.outline = "none"
      }, 1000)
    } else {
      CITY_NAME = e.target.value
      fetchData()
      toggleAnimation()
    }
  }
}

function toggleAnimation() {
  if (tl.reversed()) {
    tl.play()
  } else {
    tl.reverse()
  }
}

paperPlane.addEventListener("click", toggleAnimation)

// gsap animation timeline

const tl = gsap.timeline({ paused: true })

tl.to(paperPlane, {
  duration: 0.9,
  opacity: 0,
  rotate: "185deg"
})
  .to(paperPlane, {
    duration: 3.5,
    motionPath: {
      path: planePath,
      align: planePath,
      autoRotate: true
    }
  })
  .to(paperPlane, { opacity: 1 }, "-=3.4")
  .to(globe, { right: "49%", duration: 1.7, scale: 0.7, opacity: 0.5 }, "-=3")
  .to(
    paperPlane,
    {
      opacity: "0",
      width: "0",
      height: "0",
      duration: 0.6
    },
    "=-.8"
  )
  .to(
    header,
    {
      opacity: 0,
      duration: 1
    },
    "+1.8"
  )
  .to(
    article,
    {
      opacity: 0,
      duration: 1
    },
    "+2.2"
  )
  .to(
    h3,
    {
      opacity: 0,
      duration: 1
    },
    "+2.6"
  )
  .to(weatherImg, { opacity: 0, duration: 1 }, "+3.0")
  .to(
    card,
    {
      x: 420,
      opacity: 0,
      duration: 2.3,
      opacity: 0
    },
    "+2.8"
  )
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
    "-=.6"
  )
