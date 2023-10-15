import Image from 'next/image';
import React from 'react'
import { Typography } from '@mui/material';

interface ImageComponentProps {
  imageUrl: string;
  description: string;
}

function ImageComponent(props: ImageComponentProps) {
  const { imageUrl, description } = props
  return (
    <div style={{height: '300px'}}>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <Image src={imageUrl} alt='image' height={200} width={200} style={{ margin: '0 auto' }} />
      </div>
      <div style={{ justifyContent: 'center', display: 'flex', marginTop: 15 }}>
        <Typography>
          {description}
        </Typography>
      </div>
    </div>
  )
}

export default ImageComponent