import { useState } from 'react'
import Code from './code'
import Preview from './preview'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@rgba/ui/components/card'
import { PlaygroundControls } from '@components/components/playground-controller'
import { ExampleRender } from '@components/components/example-render'
import { VAccordionItem } from '@rgba/ui/variants/accordion'

const componentProps = {
  ...VAccordionItem,
  shadow: false,
}

const Playground = () => {
  const [localProps, setLocalProps] = useState({})
  function handleChange(key: string, val: any) {
    setLocalProps((prev) => {
      return { ...prev, [key]: val }
    })
  }

  return (
    <Card className="bg-muted/100">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-2xl">
          Accordian Playground
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ExampleRender
          Preview={<Preview {...localProps} />}
          Code={<Code {...localProps} />}
          Control={
            <PlaygroundControls
              propDefs={componentProps}
              handleChange={handleChange}
              props={localProps}
            />
          }
        />
      </CardContent>
    </Card>
  )
}

export default Playground
