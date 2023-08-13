import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'
import type { Metadata } from 'next'
import { fetchMeta } from '../../../lib/utils'

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string }
}): Promise<Metadata> {
  return await fetchMeta('bvi', lng)
}

type PageProps = {
  params: {
    lng: string
  }
}

function bvi({ params: { lng } }: PageProps) {
  return (
    <div>
      {/* @ts-ignore */}
      <Hero page='bvi' lng={lng} />
      {/* @ts-ignore */}
      <Main lng={lng} />
    </div>
  )
}

export default bvi
