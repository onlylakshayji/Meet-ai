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
        hi there      
      </Button>
      <div className="mt-4 p-6 ">
        <h1>this is to just make box green</h1>
        <h2>ejbrf jejkekj dfnjk</h2>
        <p>kefbdc;kjewbef;kj eb</p>
        ;fhjb wjeb
        <h1>relgnd f;kjernf</h1>
      </div>
    </div>
    
  )
}



export default Experiment
