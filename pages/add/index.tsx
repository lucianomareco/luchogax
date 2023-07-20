/* eslint-disable no-unused-vars */
import { Text, Container, Button, Card, Input, useInput } from '@nextui-org/react'
import { getCounter, updateCounter } from '../../src/services/counterService'
import { useEffect, useState } from 'react'

export default function Home () {
  const [flag, setFlag] = useState<boolean>(false)
  const [amount, setAmount] = useState<number>(0)
  const [error, setError] = useState<string>('')
  const passInput = useInput('')

  useEffect(() => {
    getCounter()
      .then(r => { setAmount(r?.amount) })
  }, [flag])

  const update = async () => {
    setError('')
    updateCounter(amount + 1, passInput.value)
      .then((r) => {
        if (r === false) {
          setError('Invalid password')
        }
        setFlag(!flag)
      })
  }

  const handleInput = passInput.bindings.onChange
  return (
    <Container css={{ d: 'flex', flexDirection: 'column', alignContent: 'center', p: '50px 10px' }}>
      <Card css={{
        p: '10px',
        maxWidth: '340px',
        backdropFilter: 'blur(14px)',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }}
      >
        <Text h3>Update</Text>
        <Container css={{ p: 0, width: '100%', textAlign: 'center' }}>
          <Text size={56}>{amount}</Text>
        </Container>
        <Input.Password labelPlaceholder='password' onChange={handleInput} value={passInput.bindings.value} />
        <Button onPress={() => { update() }}>Incrementar</Button>
        <Text>{error}</Text>
      </Card>
    </Container>
  )
}
