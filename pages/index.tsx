/* eslint-disable no-unused-vars */
import { Text, Container, Button, Card, Grid, Loading, Spacer } from '@nextui-org/react'
import { getCounter } from '../src/services/counterService'
import { useEffect, useState } from 'react'

export default function Home () {
  const [counter, setCounter] = useState<number>(0)
  const [lastDate, setLastDate] = useState<string>('')

  useEffect(() => {
    getCounter()
      .then(r => {
        setCounter(r?.amount || 0)
        setLastDate(r?.updatedAt || '')
      })
  }, [])

  return (
    <Container css={{ d: 'flex', flexDirection: 'column', alignContent: 'center', p: '56px 16px' }}>
      <Container css={{
        p: '16px',
        maxWidth: '560px'
      }}
      >
        <Text css={{ color: '$gray800' }}>DESDE 19/07/2023</Text>
        <Text size={32}>MILANESAS COMIDAS</Text>
        <Text css={{ color: '$gray800' }}>POR LUCHOGAX</Text>
        <Spacer y={1} />
        <Container css={{
          p: 0,
          textAlign: 'center',
          backdropFilter: 'blur(14px)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '8px',
          border: 'solid 2px #00e5ff',
          boxShadow: '0px 12px 24px 3px rgba(0,0,0,0.75)'
        }}
        >
          <Text size={56}>{counter.toString().padStart(4, '0')}</Text>
        </Container>
        <Spacer y={1} />
        <Text css={{ color: '$gray800' }}>ÚLTIMA MILANESA COMIDA EL: {`${(new Date(lastDate)).getDate()}/${(new Date(lastDate)).getMonth() + 1}/${(new Date(lastDate)).getFullYear()}`}</Text>
      </Container>
    </Container>
  )
}
