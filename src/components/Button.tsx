import React from 'react'

type Props = { onClick?: () => void }

const Button: React.FC<Props> = ({ children, onClick = () => ({}) }) => <button onClick={onClick}>{children}</button>

export default Button
