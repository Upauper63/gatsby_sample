import React from "react"
import { Link } from "gatsby"
import A from "../components/A"

const Home = () => {
  return (
    <>
      <div>Hello world!</div>
      <A />
      <a><Link to="/app">App.js</Link></a>
    </>
  )
}

export default Home