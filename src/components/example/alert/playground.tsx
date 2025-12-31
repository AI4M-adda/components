import { useState } from 'react'
import Code from './code'
import Preview from './preview'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@rgba/ui/components/card'
import { ExampleRender } from '@components/components/example-render'
import { PlaygroundControls } from '@components/components/playground-controller'
import { VAlert } from '@rgba/ui/variants/alert'

const componentProps = {
  ...VAlert,
  roundedFull: false,
  shadow: false,
}

const Playground = () => {
  const [localProps, setLocalProps] = useState({})

  function handleChange(key: string, val: any) {
    setLocalProps((prev) => {
      return { ...prev, [key]: val }
    })
  }

  console.log('rj-localProps', componentProps, localProps)
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-2xl">
          Alert Playground
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-lg">
        <ExampleRender
          Preview={<Preview {...(localProps || {})} />}
          Code={<Code {...(localProps || {})} />}
          Control={
            <PlaygroundControls
              propDefs={componentProps}
              handleChange={handleChange}
              props={localProps || {}}
            />
          }
        />
      </CardContent>
    </Card>
  )
}

export default Playground
