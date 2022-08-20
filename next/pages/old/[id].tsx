import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import React from 'react'
import { useRouter } from 'next/router'

const OldPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()

  const openNew = () => router.push(`/new/${data?.id}`)
  const goBack = () => router.push(`/old/${+data?.id - 1}`)
  const goForward = () => router.push(`/old/${+data?.id + 1}`)

  return (
    <div className="d-flex flex-column" style={{ height: '100vh' }}>
      <div className="d-flex flex-row justify-content-center align-items-center h-100">
        <div className="d-flex flex-column align-items-center">
          <h1 className="display-1 font-weight-ita text-warning">{data?.name}</h1>
          <h1 className="text-danger">{data?.username}</h1>
          <button className="p-2 btn btn-primary" onClick={openNew}>
            Open in Tamagui Page
          </button>
          <div className="d-flex my-2 flex-row justify-content-between">
            <button className="mx-2 btn btn-primary" onClick={goBack} disabled={+data?.id === 1}>
              {data?.id - 1}
            </button>
            <button className="btn btn-primary" onClick={goForward} disabled={+data?.id === 10}>
              {data?.id + 1}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OldPage
OldPage.LAYOUT = 'OLD'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  if (!ctx.params) throw new Error('ctx is undefined')

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.params.id}`)
  const data = await res.json()

  return {
    props: {
      data,
    },
    notFound: false,
  }
}
