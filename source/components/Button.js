import React from 'react';
import {Button} from 'reactstrap';

export default function NewButton({children, ...rest}) {
  return (
    <Button {...rest} style={{...rest.style, cursor: 'pointer'}}>
      {children}
    </Button>
  )
}
