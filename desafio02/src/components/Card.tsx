interface ICard {
  children: React.ReactNode
}

export const Card = ({ children }: ICard) => {
  return (
    <div style={{ 
      backgroundColor: '#FFFFFF', 
      borderRadius: '25px', 
      padding: '25px',
      marginTop: '20px' 
    }}>
      { children }
    </div>
  )
}