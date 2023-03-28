import Image from "next/image";
import React from "react";
type Props = {
  mode: boolean;
};
import { useState, useEffect } from "react";
type Location = {
  latitude: number | null | string;
  longitude: number | null | string;
  error: string | null;
};
type ErrorSuccess = {
  data: true | false | null;
  text: string;
};
type Weather = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        astro: {
          sunrise: string;
          sunset: string;
          moonrise: string;
          moonset: string;
          moon_phase: string;
          moon_illumination: string;
          is_moon_up: number;
          is_sun_up: number;
        };
      },
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
      },
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
      },
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
      },
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
      },
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
      },
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
      }
    ];
  };
};

import rain from "../assets/rain.svg";
import wind from "../assets/wind.svg";
import humidity from "../assets/humidity.svg";
import location22 from "../assets/location.svg";
import search from "../assets/search.svg";

import loading from "../assets/download.svg";

export default function Hero({ mode }: Props) {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    error: null, 
  });
  const [weather, setWeather] = useState<Weather | null>(null);
  const [errorSuccess, setErrorSuccess] = React.useState<ErrorSuccess>({
    data: null,
    text: "Hello",
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({
            latitude: null,
            longitude: null,
            error: error.message,
          });
        }
      );
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        error: "Geolocation is not supported by this browser.",
      });
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      // https://api.weatherapi.com/v1/forecast.json?key=caf4991198194c19b6f42604232803&q=${location.latitude},${location.longitude}&days=7 

      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=caf4991198194c19b6f42604232803&q=${location.latitude},${location.longitude}&days=30`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {console.log(data);
         setWeather(data)});
    }
  }, [location]);

  const imgFormatter = (str: string) => {
    let newStr = "https://";
    for (let i = 0; i < str.length; i++) {
      if (i > 1) {
        newStr += str[i];
      }
    }
    return newStr;
  };

  function getMonthName(localtime: string): string {
    const date = new Date(localtime);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = date.getMonth();
    return months[monthIndex];
  }

  interface IWeek {
    date: string;
    time: string;
    dayOfWeek: string;
  }

  function getWeek(localtime: string): IWeek {
    const dateObj = new Date(localtime);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = daysOfWeek[dateObj.getDay()];
    const date = `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${dateObj.getDate().toString().padStart(2, "0")}`;
    const time = `${dateObj.getHours().toString().padStart(2, "0")}:${dateObj
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    return { date, time, dayOfWeek };
  }

  interface Data2 {
    year: number;
    month: number;
    day: number;
  }

  function timeFunc(str: string): Data2 {
    let year = Number(str[0] + str[1] + str[2] + str[3]);
    let month = Number(str[5] + str[6]);
    let day = Number(str[8] + str[9]);
    return {
      year: year,
      month: month,
      day: day,
    };
  }

  function findAverage(numbers: number[]): number {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
  }

  function findAverageOfMaxAndMin(max: number, min: number): number {
    const numbers = [max, min];
    return Math.round(findAverage(numbers));
  }

  const searchSubmit = (e: any) => {
    e.preventDefault();
    const str = e.target[0].value;
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=caf4991198194c19b6f42604232803&q=${str}&days=7`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setWeather(weather);
          setErrorSuccess({ data: false, text: data.error.message });
          setTimeout(() => {
            setErrorSuccess({ data: null, text: "" });
          }, 3000);
        } else {
          setWeather(data);
          setErrorSuccess({
            data: true,
            text:
              data?.location?.country +
              ", " +
              data.location.region +
              ", " +
              data?.location?.name,
          });
          setTimeout(() => {
            setErrorSuccess({ data: null, text: "" });
          }, 3000);
        }
      })
      .catch((error) => {
        setWeather(weather);
      });
  };

  function color(num: number) {
    let bgColor;

    if (num < 0) {
      bgColor = "blue";
    } else if (num > 20) {
      bgColor = "red";
    } else if (num == 5) {
      bgColor = "#7F00FF";
    } else if (num == 5) {
      bgColor = "#007FFF";
    } else if (num == 6) {
      bgColor = "#00FFFF";
    } else if (num == 7) {
      bgColor = "#40E0D0";
    } else if (num == 8) {
      bgColor = "#008000";
    } else if (num == 9) {
      bgColor = "#00FF7F";
    } else if (num == 10) {
      bgColor = "#8B008B";
    } else if (num == 11) {
      bgColor = "#9ACD32";
    } else if (num == 12) {
      bgColor = "#6B8E23";
    } else if (num == 13) {
      bgColor = "#556B2F";
    } else if (num == 14) {
      bgColor = "#FFFFFF";
    } else if (num == 15) {
      bgColor = "#7FFFD4";
    } else if (num == 16) {
      bgColor = "#123456";
    } else if (num == 17) {
      bgColor = "#FFFF00";
    } else if (num == 18) {
      bgColor = "#FFA500";
    } else if (num == 19) {
      bgColor = "#FF4500";
    } else if (num == 20) {
      bgColor = "#FF0000";
    } else {
      bgColor = "red";
    }

    return bgColor;
  }

  return (
    <section className="hero">
      <div className="container hero__container">
        {weather ? (
          <div className="hero__main">
            {errorSuccess.data ? (
              <div style={mode ? {zIndex:"7",backgroundColor:"#fff"}:{zIndex:"5"}} className="success">
                <h3>{errorSuccess.text}</h3>
              </div>
            ) : errorSuccess.data === false ? (
              <div style={mode ? {zIndex:"5",backgroundColor:"#fff"}:{zIndex:"5"}} className="error">
                {" "}
                <h3>{errorSuccess.text}</h3>
              </div>
            ) : (
              ""
            )}

            <div className="hero__icon-weather hero__icon-weather2">
              <img
                src={imgFormatter(weather?.current?.condition.icon)}
                alt="img"
              />
            </div>
            <h1 className="hero__title">
              {weather?.current?.temp_c}
              <sup>° C</sup>
            </h1>
            <h2 className="hero__month-name">
              {getMonthName(weather?.location?.localtime)}
              {" " + timeFunc(weather?.location?.localtime).month}
            </h2>
            <div className="hero__times-box">
              <h4 className="hero__times">
                {getWeek(weather?.location?.localtime).dayOfWeek}
              </h4>

              <h4 className="hero__times">
                {getWeek(weather?.location?.localtime).time}
              </h4>
            </div>
            <div className="hero__weather-params">
              <h4>
                <div>
                  <Image src={wind} alt="wind" />
                </div>
                <p>{"Wind " + weather?.current?.wind_kph + " km/h"}</p>
              </h4>
              <h4>
                <div>
                  <Image src={rain} alt="rain" />
                </div>
                <p>{"Rain " + weather?.current?.cloud + " %"}</p>
              </h4>
              <h4>
                <div>
                  <Image src={humidity} alt="humidity" />
                </div>{" "}
                <p>{"Humidity " + weather?.current?.humidity + " %"}</p>
              </h4>
            </div>
            <ul className={mode ? "hero__week2" : "hero__week"}>
              <li className="hero__weeks">
                <h3 className="hero__week-title">
                  {Math.round(
                    findAverageOfMaxAndMin(
                      weather?.forecast?.forecastday[0].day.maxtemp_c,
                      weather?.forecast?.forecastday[0].day.mintemp_c
                    )
                  )}{" "}
                  <sup>° C</sup>
                </h3>
                <div className="hero__icon-weather">
                  <img
                    src={imgFormatter(
                      weather?.forecast?.forecastday[0].day.condition.icon
                    )}
                    alt="img"
                  />
                </div>
                <p>
                  {getWeek(weather?.forecast?.forecastday[0].date).dayOfWeek}
                </p>
              </li>
              <li className="hero__weeks">
                <h3 className="hero__week-title">
                  {Math.round(
                    findAverageOfMaxAndMin(
                      weather?.forecast?.forecastday[1].day.maxtemp_c,
                      weather?.forecast?.forecastday[1].day.mintemp_c
                    )
                  )}{" "}
                  <sup>° C</sup>
                </h3>
                <div className="hero__icon-weather">
                  <img
                    src={imgFormatter(
                      weather?.forecast?.forecastday[1].day.condition.icon
                    )}
                    alt="img"
                  />
                </div>
                <p>
                  {getWeek(weather?.forecast?.forecastday[1].date).dayOfWeek}
                </p>
              </li>
              <li className="hero__weeks">
                <h3 className="hero__week-title">
                  {Math.round(
                    findAverageOfMaxAndMin(
                      weather?.forecast?.forecastday[2].day.maxtemp_c,
                      weather?.forecast?.forecastday[2].day.mintemp_c
                    )
                  )}{" "}
                  <sup>° C</sup>
                </h3>
                <div className="hero__icon-weather">
                  <img
                    src={imgFormatter(
                      weather?.forecast?.forecastday[2].day.condition.icon
                    )}
                    alt="img"
                  />
                </div>
                <p>
                  {getWeek(weather?.forecast?.forecastday[2].date).dayOfWeek}
                </p>
              </li>
              {/* <li className="hero__weeks">
                <h3 className="hero__week-title">
                  {Math.round(
                    findAverageOfMaxAndMin(
                      weather?.forecast?.forecastday[3].day.maxtemp_c,
                      weather?.forecast?.forecastday[3].day.mintemp_c
                    )
                  )}{" "}
                  <sup>° C</sup>
                </h3>
                <div className="hero__icon-weather">
                  <img
                    src={imgFormatter(
                      weather?.forecast?.forecastday[3].day.condition.icon
                    )}
                    alt="img"
                  />
                </div>
                <p>
                  {getWeek(weather?.forecast?.forecastday[3].date).dayOfWeek}
                </p>
              </li>
              <li className="hero__weeks">
                <h3 className="hero__week-title">
                  {Math.round(
                    findAverageOfMaxAndMin(
                      weather?.forecast?.forecastday[4].day.maxtemp_c,
                      weather?.forecast?.forecastday[4].day.mintemp_c
                    )
                  )}{" "}
                  <sup>° C</sup>
                </h3>
                <div className="hero__icon-weather">
                  <img
                    src={imgFormatter(
                      weather?.forecast?.forecastday[4].day.condition.icon
                    )}
                    alt="img"
                  />
                </div>
                <p>
                  {getWeek(weather?.forecast?.forecastday[4].date).dayOfWeek}
                </p>
              </li>
              <li className="hero__weeks">
                <h3 className="hero__week-title">
                  {Math.round(
                    findAverageOfMaxAndMin(
                      weather?.forecast?.forecastday[5].day.maxtemp_c,
                      weather?.forecast?.forecastday[5].day.mintemp_c
                    )
                  )}{" "}
                  <sup>° C</sup>
                </h3>
                <div className="hero__icon-weather">
                  <img
                    src={imgFormatter(
                      weather?.forecast?.forecastday[5].day.condition.icon
                    )}
                    alt="img"
                  />
                </div>
                <p>
                  {getWeek(weather?.forecast?.forecastday[5].date).dayOfWeek}
                </p>
              </li>
              <li className="hero__weeks">
                <h3 className="hero__week-title">
                  {Math.round(
                    findAverageOfMaxAndMin(
                      weather?.forecast?.forecastday[6].day.maxtemp_c,
                      weather?.forecast?.forecastday[6].day.mintemp_c
                    )
                  )}{" "}
                  <sup>° C</sup>
                </h3>
                <div className="hero__icon-weather">
                  <img
                    src={imgFormatter(
                      weather?.forecast?.forecastday[6].day.condition.icon
                    )}
                    alt="img"
                  />
                </div>
                <p>
                  {getWeek(weather?.forecast?.forecastday[6].date).dayOfWeek}
                </p>
              </li> */}
            </ul>
            <div className={mode ? "hero__location2" : "hero__location"}>
              <div className="hero__locationSearch">
                <div className="hero__location-title">
                  <div>
                    <Image src={location22} alt="locaton icon" />
                  </div>
                  <p>
                    {weather?.location?.country},{" "}
                    {weather.location.region + ", "}{" "}
                    {" " + weather?.location?.name}
                  </p>
                </div>
                <form onSubmit={(e) => searchSubmit(e)}>
                  <input
                    placeholder="Search all location..."
                    type="text"
                    className="hero__search"
                  />
                  <div>
                    <button type="submit" className="hero__search-btn">
                      <Image src={search} alt="search icon" />
                    </button>
                  </div>
                </form>
              </div>

              <ul className="hero__sun">
                <li>
                  <p>Sunrise</p>
                  <p>{weather.forecast.forecastday[0].astro.sunrise}</p>
                </li>
                <li style={{ marginTop: "-50px" }}>
                  <p>Sun</p>
                </li>
                <li>
                  <p>Sunset</p>
                  <p>{weather.forecast.forecastday[0].astro.sunset}</p>
                </li>
              </ul>
            </div>
            <ul className={mode ? "hero__stastic2" : "hero__stastic"}>
              <li>
                <p
                  style={{
                    height: `${
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[0].day.maxtemp_c,
                        weather.forecast.forecastday[0].day.mintemp_c
                      ) * 8
                    }px`,
                    backgroundColor: `${color(
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[0].day.maxtemp_c,
                        weather.forecast.forecastday[0].day.mintemp_c
                      )
                    )}`,
                  }}
                ></p>
                <span>
                  {getWeek(weather?.forecast?.forecastday[0].date).dayOfWeek}
                </span>
              </li>
              <li>
                <p
                  style={{
                    height: `${
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[1].day.maxtemp_c,
                        weather.forecast.forecastday[1].day.mintemp_c
                      ) * 8
                    }px`,
                    backgroundColor: `${color(
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[1].day.maxtemp_c,
                        weather.forecast.forecastday[1].day.mintemp_c
                      )
                    )}`,
                  }}
                ></p>
                <span>
                  {getWeek(weather?.forecast?.forecastday[1].date).dayOfWeek}
                </span>
              </li>
              <li>
                <p
                  style={{
                    height: `${
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[2].day.maxtemp_c,
                        weather.forecast.forecastday[2].day.mintemp_c
                      ) * 8
                    }px`,
                    backgroundColor: `${color(
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[2].day.maxtemp_c,
                        weather.forecast.forecastday[2].day.mintemp_c
                      )
                    )}`,
                  }}
                ></p>
                <span>
                  {getWeek(weather?.forecast?.forecastday[2].date).dayOfWeek}
                </span>
              </li>
              {/* <li>
                <p
                  style={{
                    height: `${
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[3].day.maxtemp_c,
                        weather.forecast.forecastday[3].day.mintemp_c
                      ) * 8
                    }px`,
                    backgroundColor: `${color(
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[3].day.maxtemp_c,
                        weather.forecast.forecastday[3].day.mintemp_c
                      )
                    )}`,
                  }}
                ></p>
                <span>
                  {getWeek(weather?.forecast?.forecastday[3].date).dayOfWeek}
                </span>
              </li>
              <li>
                <p
                  style={{
                    height: `${
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[4].day.maxtemp_c,
                        weather.forecast.forecastday[4].day.mintemp_c
                      ) * 8
                    }px`,
                    backgroundColor: `${color(
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[4].day.maxtemp_c,
                        weather.forecast.forecastday[4].day.mintemp_c
                      )
                    )}`,
                  }}
                ></p>
                <span>
                  {getWeek(weather?.forecast?.forecastday[4].date).dayOfWeek}
                </span>
              </li>
              <li>
                <p
                  style={{
                    height: `${
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[5].day.maxtemp_c,
                        weather.forecast.forecastday[5].day.mintemp_c
                      ) * 8
                    }px`,
                    backgroundColor: `${color(
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[5].day.maxtemp_c,
                        weather.forecast.forecastday[5].day.mintemp_c
                      )
                    )}`,
                  }}
                ></p>
                <span>
                  {getWeek(weather?.forecast?.forecastday[5].date).dayOfWeek}
                </span>
              </li>
              <li>
                <p
                  style={{
                    height: `${
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[6].day.maxtemp_c,
                        weather.forecast.forecastday[6].day.mintemp_c
                      ) * 8
                    }px`,
                    backgroundColor: `${color(
                      findAverageOfMaxAndMin(
                        weather.forecast.forecastday[6].day.maxtemp_c,
                        weather.forecast.forecastday[6].day.mintemp_c
                      )
                    )}`,
                  }}
                ></p>
                <span>
                  {getWeek(weather?.forecast?.forecastday[6].date).dayOfWeek}
                </span>
              </li> */}
            </ul>
          </div>
        ) : (
          <div className="hero__loading">
            <div>
              <Image src={loading} alt="loading" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
