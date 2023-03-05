import Head from "next/head";
import React from "react";
import Hero from "../../components/hero";
import icon from "../../assets/icon.svg";
type Mode = boolean;

export default function Home() {
  const [mode, setMode] = React.useState<Mode>(false);

  return (
    <>
      <Head>
        <title>Weather</title>
        <link
          rel="icon"
          href="https://cdn.weatherapi.com/weather/64x64/day/116.png"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <link
          rel="icon"
          href="https://cdn.weatherapi.com/weather/64x64/day/116.png"
        />
        <meta
          property="og:title"
          content="Bu saytda ob havo ma'lumotlarini 1haftagacha bilsa bo'ladi. O'z manzilingizni yoki yer yuzidagi istagan shahar yoki tumanlarni !!!"
        />
        <meta property="og:type" content="website" />
        <link
          rel="preconnect"
          href="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />
        <meta
          name="octolytics-url"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />

        <meta name="user-login" content="odilbekl" />

        <meta
          name="twitter:image:src"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />

        <meta name="twitter:site" content="Weather" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Weather" />
        <meta
          name="twitter:description"
          content="Bu saytda ob havo ma'lumotlarini 1haftagacha bilsa bo'ladi. O'z manzilingizni yoki yer yuzidagi istagan shahar yoki tumanlarni !!!"
        />
        <meta
          property="og:image"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />
        <meta property="og:image:alt" content="Weather" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:site_name" content="Weather" />
        <meta property="og:type" content="object" />
        <meta
          property="og:title"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />
        <meta
          property="og:url"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />

        <link
          rel="assets"
          href="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />
        <link
          rel="shared-web-socket"
          href="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
          data-refresh-url="/_alive"
          data-session-id="320776d8f80e59aa0b0b60b9d6dd2ea30f8d015c24448da419e0932d2b18329e"
        />
        <meta name="keyboard-shortcuts-preference" content="all" />
        <meta
          name="expected-hostname"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />

        <meta
          name="go-import"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />

        <meta name="octolytics-dimension-user_login" content="Weather" />

        <meta
          name="octolytics-dimension-repository_nwo"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />

        <meta
          name="octolytics-dimension-repository_network_root_nwo"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />

        <link
          rel="canonical"
          href="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
          data-turbo-transient=""
        />

        <meta
          name="browser-stats-url"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />

        <meta
          name="browser-errors-url"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />

        <meta
          name="browser-optimizely-client-errors-url"
          content="https://klike.net/uploads/posts/2022-10/1665300193_3-29.jpg"
        />

        <link
          rel="mask-icon"
          href="https://cdn.weatherapi.com/weather/64x64/day/116.png"
         
        />
        <link
          // odilbekl/homework-4.3-JS-Dom-ToDo
          rel="icon"
          href="https://cdn.weatherapi.com/weather/64x64/day/116.png"
        />
        <meta
          name="description"
          content="Bu saytda ob havo ma'lumotlarini 1haftagacha bilsa bo'ladi. O'z manzilingizni yoki yer yuzidagi istagan shahar yoki tumanlarni !!!"
        />
      </Head>
      <main className={mode ? "main__sun" : "main"}>
        <div onClick={() => setMode(!mode)} className={mode ? "mode2" : "mode"}>
          {mode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-moon-stars-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-brightness-low-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
            </svg>
          )}
        </div>
        <Hero mode={mode} />
      </main>
    </>
  );
}
