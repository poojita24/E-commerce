import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    color: white;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcements = () => {
  return (
    <Container>
        Super Deal! Free Shopping on Orders Over $50!
    </Container>
  )
}

export default Announcements
