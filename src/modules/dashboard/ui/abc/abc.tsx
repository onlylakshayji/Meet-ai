import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

const Experiment = () => {
  return (
    <div>
      Hello world from the experiment component!
      <Button>
        Click me for an experiment
      </Button>
      <Card>
        <p>This is a card inside the experiment component.</p>
        <Button variant="outline">Outline Button</Button> 
        <Button variant="ghost">Ghost Button</Button>
      </Card>
    </div>
    
  )
}

export default Experiment
