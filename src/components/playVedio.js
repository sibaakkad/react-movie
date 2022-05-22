import React from 'react'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function PlayVedio(props) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

        <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button>
      </React.Fragment>
    </div>
  )
}
