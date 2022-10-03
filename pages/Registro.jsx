import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://estag.fimagenes.com/img/v2/7e5/1100858_538730_900.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 17px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0fa104;
  color: white;
  cursor: pointer;
  margin: 20px 20px 20px 165px;
`;

const Registro = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREA UNA CUENTA</Title>
            <Form>
                <Input placeholder="Nombre"/>
                <Input placeholder="Apellido"/>
                <Input placeholder="Nombre de usuario"/>
                <Input placeholder="Correo"/>
                <Input placeholder="Contraseña"/>
                <Input placeholder="Confirmar constraseña"/>
                <Agreement>Al crear una cuenta, doy mi consentimiento para el procesamiento de mis datos personales.
             Datos de acuerdo con la <b>POLÍTICA DE PRIVACIDAD</b>
             </Agreement>
             <Button>CREAR</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Registro