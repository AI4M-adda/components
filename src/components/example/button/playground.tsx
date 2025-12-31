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
import { VButton } from '@rgba/ui/variants/button'
import {
  ButtonBadge,
  ButtonRipple,
  ButtonTooltip,
  CopyButton,
} from '@rgba/ui/components/button'
import { Mail, Send } from 'lucide-react'

const componentProps = {
  ...VButton,
  disabled: false,
  loading: false,
  asChild: false,
  roundedFull: false,
}

const Playground = () => {
  const [localProps, setLocalProps] = useState({})
  const [toolTipButtonProps, setToolTipButtonProps] = useState({})
  const [badgeButtonProps, setBadgeButtonProps] = useState({})
  const [rippleButtonProps, setRippleButtonProps] = useState({})

  function handleChange(key: string, val: any) {
    setLocalProps((prev) => {
      return { ...prev, [key]: val }
    })
  }
  function handleToolTipChange(key: string, val: any) {
    setToolTipButtonProps((prev) => {
      return { ...prev, [key]: val }
    })
  }
  function handleBadgeChange(key: string, val: any) {
    setBadgeButtonProps((prev) => {
      return { ...prev, [key]: val }
    })
  }

  function handleRippleChange(key: string, val: any) {
    setRippleButtonProps((prev) => {
      return { ...prev, [key]: val }
    })
  }

  console.log('rj-localProps', componentProps, localProps)
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-2xl">
          Button Playground
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

        <ExampleRender
          Preview={<CopyButton copyText="Copy Code" />}
          Code={
            <code className="block mb-2">
              {`<CopyButton copyText={"Copy Text"} />`}
            </code>
          }
          Control={<></>}
        />

        <ExampleRender
          Preview={
            <ButtonTooltip
              tooltipContent="Send Mail"
              size={'icon'}
              {...(toolTipButtonProps || {})}
            >
              <Mail />
            </ButtonTooltip>
          }
          Code={
            <code className="block mb-2">
              {`<ButtonTooltip size={"icon"} tooltipContent="Send Mail" ${Object.entries(
                toolTipButtonProps,
              )
                .map(([key, value]) =>
                  value === true ? `${key}` : `${key}="${value}"`,
                )
                .join(' ')}> 
  <Mail />
</ButtonTooltip>`}
            </code>
          }
          Control={
            <PlaygroundControls
              propDefs={componentProps}
              handleChange={handleToolTipChange}
              props={toolTipButtonProps || {}}
            />
          }
        />

        <ExampleRender
          Preview={
            <ButtonBadge badgeCount={10} {...(badgeButtonProps || {})}>
              Notification
            </ButtonBadge>
          }
          Code={
            <code className="block mb-2">
              {`<ButtonBadge badgeCount="10" ${Object.entries(badgeButtonProps)
                .map(([key, value]) =>
                  value === true ? `${key}` : `${key}="${value}"`,
                )
                .join(' ')}> 
  Notification
</ButtonBadge>`}
            </code>
          }
          Control={
            <PlaygroundControls
              propDefs={componentProps}
              handleChange={handleBadgeChange}
              props={badgeButtonProps || {}}
            />
          }
        />

        <ExampleRender
          Preview={
            <ButtonRipple {...(rippleButtonProps || {})}>Ripple</ButtonRipple>
          }
          Code={
            <code className="block mb-2">
              {`<ButtonRipple  ${Object.entries(rippleButtonProps)
                .map(([key, value]) =>
                  value === true ? `${key}` : `${key}="${value}"`,
                )
                .join(' ')}> 
  Ripple
</ButtonRipple>`}
            </code>
          }
          Control={
            <PlaygroundControls
              propDefs={componentProps}
              handleChange={handleRippleChange}
              props={rippleButtonProps || {}}
            />
          }
        />
      </CardContent>
    </Card>
  )
}

export default Playground
