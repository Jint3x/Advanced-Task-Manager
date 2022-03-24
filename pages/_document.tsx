import { Html, Head, Main, NextScript } from 'next/document'
import React from "react"


export default function Document() {
  return (
    <Html>
      <Head>
      <style>
        {"body { display: block !important }"}
      </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}