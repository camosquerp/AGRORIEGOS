import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #0fa104 ;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Annoucement = () => {
  return (
    <Container>
        Gran Oferta! Envio Gratis en Compras Mayores a COP 200,000
    </Container>
  )
}

export default Annoucement