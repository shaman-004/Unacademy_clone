import React from 'react'
import 'boxicons'
const Footer = () => {
  return (
    <div>
        <hr />
      <div>
        <ul className='d-flex justify-content-between list-unstyled m-2'>
            <li>
            © 2023 Unacademy, Inc
            </li>
            <li>
                <h3>unacademy</h3>
            </li>
            <ul class="navbar navbar-expand">
            <box-icon type='logo' name='facebook-circle'></box-icon>
            <box-icon name='instagram-alt' type='logo' ></box-icon>
            <box-icon name='twitter' type='logo' ></box-icon>
            </ul>
        </ul>
      </div>
    </div>
  )
}

export default Footer