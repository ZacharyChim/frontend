import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { v4 } from 'uuid'
import { fetchCollection, fetchSingle, trimTitle } from '../../../lib/utils'

type PageProps = {
  lng: string
}

export default async function Main({ lng }: PageProps) {
  let language
  lng === 'en' ? (language = 'en') : (language = 'zh-Hant-HK')
  const allCases = await fetchCollection('cases', language)
  const caseText = await fetchSingle('case-study')
  let lang
  lng === 'en'
    ? (lang = caseText)
    : (lang = caseText.localizations.data[0].attributes)

  return (
    <section id='case' className='mx-auto flex max-w-5xl flex-col items-center'>
      <div className='mx-auto px-5 pb-20 text-center'>
        <h2 className='text-2xl font-bold text-darkBlue'>{lang.all}</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
          {allCases
            .slice(0)
            .reverse()
            .map((item) => (
              <div
                key={v4()}
                className='mt-12 flex flex-col items-center space-y-2 bg-veryLightBlue'
              >
                <article className='m-3 overflow-hidden border border-gray-100 bg-white shadow-sm md:w-auto'>
                  <Image
                    alt={item.attributes.title}
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_URL +
                      item.attributes.featuredImage.data.attributes.url
                    }
                    width={item.attributes.featuredImage.data.attributes.width}
                    height={
                      item.attributes.featuredImage.data.attributes.height
                    }
                    className='h-48 w-full object-cover'
                  />

                  <div className='px-4 py-2 text-left'>
                    <Link
                      href={
                        process.env.NEXT_PUBLIC_SITE_URL +
                        '/' +
                        lng +
                        '/cases/' +
                        item.attributes.slug
                      }
                    >
                      <h3 className='text-sm text-darkBrown'>
                        {trimTitle(item.attributes.title)}
                      </h3>
                    </Link>

                    <Link
                      href={
                        process.env.NEXT_PUBLIC_SITE_URL +
                        '/' +
                        lng +
                        '/cases/' +
                        item.attributes.slug
                      }
                      className='group mt-2 inline-flex gap-1 text-sm font-medium text-oceanBlue'
                    >
                      {lang.details}
                    </Link>
                  </div>
                </article>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
