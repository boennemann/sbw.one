import React from 'react'
import styled from 'styled-components'

import NAME from '../lib/name'

const Picture = styled.picture`
  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0;
  }
`

export default function Photo() {
  return (
    <Picture>
      <source
        media="(min-width: 1200px)"
        srcSet={`${require('../assets/images/banner_1200.webp')} 1x, ${require('../assets/images/banner_1200@2x.webp')} 2x`}
        type="image/webp"
      />

      <source
        media="(min-width: 992px)"
        srcSet={`${require('../assets/images/banner_992.webp')} 1x, ${require('../assets/images/banner_992@2x.webp')} 2x`}
        type="image/webp"
      />

      <source
        media="(min-width: 768px)"
        srcSet={`${require('../assets/images/banner_768.webp')} 1x, ${require('../assets/images/banner_768@2x.webp')} 2x`}
        type="image/webp"
      />

      <source
        srcSet={`${require('../assets/images/banner_480.webp')} 1x, ${require('../assets/images/banner_480@2x.webp')} 2x`}
        type="image/webp"
      />

      <source
        media="(min-width: 1200px)"
        srcSet={`${require('../assets/images/banner_1200.webp')} 1x, ${require('../assets/images/banner_1200@2x.webp')} 2x`}
        type="image/webp"
      />

      <source
        media="(min-width: 992px)"
        srcSet={`${require('../assets/images/banner_992.webp')} 1x, ${require('../assets/images/banner_992@2x.webp')} 2x`}
        type="image/webp"
      />

      <source
        media="(min-width: 768px)"
        srcSet={`${require('../assets/images/banner_768.webp')} 1x, ${require('../assets/images/banner_768@2x.webp')} 2x`}
        type="image/webp"
      />

      <source
        srcSet={`${require('../assets/images/banner_480.webp')} 1x, ${require('../assets/images/banner_480@2x.webp')} 2x`}
        type="image/webp"
      />

      <img
        srcSet={`${require('../assets/images/banner_768.jpg')} 768w,   ${require('../assets/images/banner_992.jpg')} 992w,   ${require('../assets/images/banner_1200.jpg')} 1200w`}
        src={`${require('../assets/images/banner_480.jpg')}`}
        type="image/jpeg"
        alt={`Portrait ${NAME}`}
      />
    </Picture>
  )
}
