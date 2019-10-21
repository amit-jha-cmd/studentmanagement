import React from 'react'
import { Button, Divider } from 'semantic-ui-react'

const ButtonExampleGroupEqualWidth = () => (
  <div>
    <Button.Group widths='3'>
      <Button>Letter of Recommendation</Button>
      <Button>Detain</Button>
      <Button>Delete</Button>
    </Button.Group>
  </div>
)

export default ButtonExampleGroupEqualWidth