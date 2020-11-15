import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import HomeContent from "../components/Home/HomeContent"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../components/Context/GlobalContext"
import Navigation from "../components/Home/Navigation"

const IndexPage = () => {
  const dispatch = useGlobalDispatchContext()

  const onCursor = style => {
    if (style === "hovered") {
      dispatch({ type: "HOVERED", cursorStyle: "hovered" })
    } else {
      dispatch({ type: "POINTER", cursorStyle: "pointer" })
    }
  }
  return (
    <Layout>
      <Header key="1" />
      <HomeContent key="2" onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
