import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Card>
        <CardHeader>
        <CardTitle>
          Register
        </CardTitle>
        <CardDescription>
          Register to get started
        </CardDescription>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>
    </div>)
}
