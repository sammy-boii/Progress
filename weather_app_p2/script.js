// Student's Name: Samrajya Neupane
// Student's ID: 2408842

// initial load

addEventListener("DOMContentLoaded", () => {
  gsap.to("body", { y: 0 })
})

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

// slider's copy, done for the infinite scrolling effect

const sliderCopy = document.querySelector(".slider").cloneNode(true)
rightFooter.appendChild(sliderCopy)

// fetching data from the php script

async function fetchData(cityName = "TIRUPPUR") {
  try {
    const response = await fetch(
      `http://localhost/weather_app_p2/api_fetch.php?city=${cityName}`
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log("Response:", response)
    console.log("Data", data)
    document.title = `☁ ${cityName}'s Weather ☁`
    modifyCard(data, cityName)
    setPastData(cityName)
  } catch (error) {
    toggleAnimation()
    console.log("Error in fetching:", error)
    inputBar.style.outline = "1px solid red"
    setTimeout(() => {
      inputBar.style.outline = "none"
    }, 1000)
  }
}

// initial rendering

fetchData()
setPastData()

// utility functions

function modifyCard(data, cityName) {
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
  const _fullLocation = `➤ ${cityName}, ${data.sys.country.toUpperCase()}`
  const weatherIcon = data.weather[0].icon
  const _precipitation = `${
    (data.rain?.["1hr"] || 0) + (data.snow?.["1hr"] || 0)
  }%`

  // optional chaining operator is used cuz the API doesn't provide 'rain' or 'snow' property if there is no precipitation in the past hour

  // if data.rain? evaluates to undefined or null then the whole expression immediately evaluates to undefined

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
      var cityName = e.target.value.toUpperCase()
      fetchData(cityName)
      toggleAnimation()
    }
  }
}

async function setPastData(cityName = "TIRUPPUR") {
  try {
    const response = await fetch("past_data.php")
    const data = await response.json()

    const sliders = document.querySelectorAll(".slider")

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    sliders.forEach((slider) => {
      const divs = slider.querySelectorAll("div")

      divs.forEach((div, i) => {
        const timestamp = data[i].timestamp
        const date = new Date(timestamp)
        const day = daysOfWeek[date.getDay()]

        div.style.display = "flex"
        div.style.filter = "grayscale(30%)"
        div.style.gap = "4px"
        div.style.height = "100%"
        div.style.flexDirection = "column"
        div.style.alignItems = "center"
        div.style.justifyContent = "center"
        if (cityName === "TIRUPPUR") {
          div.innerHTML = `
          <h5>${day}</h5>
          <h3>${data[i].temperature} &deg;C</h3>
          <img src="https://openweathermap.org/img/wn/${data[i].weather_icon}@2x.png" width = 100px height = 100px alt="Weather Icon">
          <h6>Humidity: ${data[i].humidity}%</h6>
          <h6>Wind: ${data[i].wind_speed} km/h</h6>

        `
        } else {
          div.alignItems = "center"
          div.justifyContet = "center"
          div.innerHTML = `<h4>No</h4>
          <h4>cached</h4>
          <h4>data</h4>
          <h4>available</h4>
          <h4>:(</h4>`
        }
      })
    })
  } catch (err) {
    console.log("Error while fetching", err)
  }
}

// gsap starting point

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

// tl.reversed() exists for checking, but on the first iteration, it's value will be false; therefore, it's necessary to click twice.

// gsap animation timeline

const tl = gsap.timeline({
  paused: true,
  onStart: () => {
    paperPlane.src = "https://images2.imgbox.com/e5/47/Cz7YIBQn_o.png"
  },
  onReverseComplete: () => {
    paperPlane.src = "https://images2.imgbox.com/10/18/m6UNxUF5_o.png"
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
