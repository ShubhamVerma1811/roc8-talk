import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import React from 'react'
import { Button, Heading, XStack, YStack } from 'tamagui'
import { useLink } from 'solito/link'

const NewPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const openOld = useLink({
    href: `/old/${data?.id}`,
  })

  const goBack = useLink({
    href: `/new/${+data?.id - 1}`,
  })

  const goForward = useLink({
    href: `/new/${+data?.id + 1}`,
  })

  return (
    <YStack h="100vh">
      <XStack justifyContent="center" h="100%" alignItems="center">
        <YStack alignItems="center">
          <Heading
            $sm={{
              size: '$12',
            }}
            size="$14"
            color="$yellow10Light"
          >
            {data?.name}
          </Heading>
          <Heading color="$red10Dark">{data?.username}</Heading>
          <Button {...openOld} my="$1.5">
            Open in Bootstrap Page
          </Button>
          <XStack justifyContent="space-between" space="$4">
            <Button {...goBack} disabled={+data?.id === 1}>
              {data?.id - 1}
            </Button>
            <Button {...goForward} disabled={+data?.id === 10}>
              {data?.id + 1}
            </Button>
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  )
}

export default NewPage

NewPage.LAYOUT = 'NEW'

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
