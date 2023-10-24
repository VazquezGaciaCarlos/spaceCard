import { StyledCard, StyledTexto } from './styles';

const Card = ({ planeta, imagen }) => {
  return (
    <div>
      <StyledCard>
        <h2>{planeta.title}</h2>
        <img className='imagenes' src={imagen}></img>
        <StyledTexto>{planeta.description}</StyledTexto>
      </StyledCard>
    </div>
  )
}

export default Card;