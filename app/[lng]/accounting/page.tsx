import React from 'react'
import Hero from '../../../components/Hero'
import Main from './Main'

function accounting() {
  return (
    <div className='bg-preIpoCurveLine bg-contain bg-[center_top_110rem] bg-no-repeat'>
      {/* @ts-ignore */}
      <Hero page='accounting' />
      {/* @ts-ignore */}
      <Main />
    </div>
  )
}

export default accounting