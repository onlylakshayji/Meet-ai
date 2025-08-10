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

      <Button>
hi there       </Button>
      <div className="mt-4">
        <p>This is a simple experiment to test the UI components.</p>
      </div>
    </div>
    
  )
}



export default Experiment
