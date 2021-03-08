import type { ComponentType } from 'react'
import React from 'react'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <main>
      <head>
        <title>Todos App</title>
      </head>
      <Page {...pageProps} />
    </main>
  )
}
