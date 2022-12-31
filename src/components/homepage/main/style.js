import styled from "styled-components";
import BackgroundCar from "../../../assets/background/background-car.png";
import RiodeJaneiro from "../../../assets/pictures/riodejaneiro.png"
import RiodasOstras from "../../../assets/pictures/riodasostras.png"
import Caldasnovas from "../../../assets/pictures/caldasnovas.png"
import Amazonia from "../../../assets/pictures/amazonia.png"

export const Main = styled.main`
`

export const Background = styled.div`
    background-image: url(${BackgroundCar});
    background-size: cover;
    height: 70vh;
    display: flex;
    align-items: center;
    @media (max-width: 850px){  
        justify-content: center;
    }
`

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    height: 45vh;
    margin: 5% 0 0 4%;
    
    @media (max-width: 850px){  
        justify-content: center;
        margin: initial;
        align-items: center
    }
`

export const TextSearch = styled.h1`
    font-family: ArgentumRegular;
    color: #005BD5;
    width: 500px;
    font-size: 3.2rem;
    margin-bottom: 3%;

    @media (max-width: 850px){
        text-align: center;
    }

    @media (max-width: 520px){
        width: 100%;
    }
`

export const InputSearch = styled.input`
    font-family: ArgentumRegular;
    border-radius: 40px;
    border: none;
    width: 300px;
    padding: 7px 20px;
    margin-bottom: 4%;
    
    &::placeholder{
        color: #A9A9A9;
        font-size: 0,8rem;
    }
`

export const ScheduleSearch = styled.button`
    width: 120px;
    padding: 10px;
    text-align: center;
    border-radius: 30px;
    border: none;
    background-color: #005BD5;
    color: #FFFFFF;
    font-family: ArgentumRegular;
    letter-spacing: 3px;
    cursor: pointer;
    transition: 0.1s all;

    &:hover{
        transform: scale(1.1);
    }
`

export const ContainerTrip = styled.div`
    display: flex;
    height: 100%;

    @media (max-width: 1195px){
        flex-direction: column;
        align-items: center;
    }

`

export const FigureTrip = styled.figure`
    width: 50%;

    @media (max-width: 1195px){
        width: 100%;
    }
`

export const ImgTrip = styled.img`
    width: 100%;
    object-fit: cover;
    height: 100%;
    overflow: hidden;
`

export const ContentTrip = styled.div`
     width: 50%;
     background-image: linear-gradient(#005BD5, #002E6B);

     @media (max-width: 1195px){
        width: 100%;
     }
`

export const ContentTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 13% 0 0 10%;

    @media (max-width: 1195px){
        padding: 8% 0 0 10%;
    }
`

export const Stripe = styled.div`
    display: flex;
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF;
    width: 75px;   
`

export const Phrase1Trip = styled.h3`
    font-family: ArgentumRegular;
    color: #FFFFFF;
    letter-spacing: 8px;
    margin-left: 4%;
    font-weight: lighter;
`

export const Phrase2Trip = styled.h1`
    width: 82%;
    margin: 2% 0 0 10%;
    font-size: 4.5rem;
    color: #FFFFFF;
    font-family: ArgentumRegular;

    @media (max-width: 1464px){
        font-size: 4rem;
    }

    @media (max-width: 1308px){
        font-size: 3.8rem;
    }

    @media (max-width: 1308px){
        font-size: 3.6rem;
    }
`

export const Phrase3Trip = styled.h4`
    width: 62%;
    font-family: ArgentumRegular;
    color: #FFFFFF;
    font-weight: lighter;
    margin: 3% 0 0 10%;
`

export const ScheduleTrip = styled.button`
    width: 120px;
    padding: 10px;
    text-align: center;
    border-radius: 30px;
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF10;
    color: #FFFFFF;
    font-family: ArgentumRegular;
    letter-spacing: 3px;
    transition: 0.1s all;
    margin: 4% 0 5% 10%;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`
export const ContainerTrip2 = styled.div`
    display: flex;
    height: 100%;

    @media (max-width: 1195px){
        flex-direction: column-reverse;
        align-items: center;
    }

`

export const FigureTrip2 = styled.figure`
    width: 50%;

    @media (max-width: 1195px){
        width: 100%;
    }
`

export const ContentTrip2 = styled.div`
     width: 50%;
     background-color: #FFFFFF;

     @media (max-width: 1195px){
        width: 100%;
     }
`

export const ContentTitle2 = styled.div`
    display: flex;
    align-items: center;
    padding: 13% 0 0 10%;

    @media (max-width: 1195px){
        padding: 8% 0 0 10%;
    }
`

export const Stripe2 = styled.div`
    display: flex;
    border: 1px solid #005BD5;
    background-color: #005BD5;
    width: 75px;   
`

export const Phrase1Trip2 = styled.h3`
    font-family: ArgentumRegular;
    color: #005BD5;
    letter-spacing: 8px;
    margin-left: 4%;
    font-weight: lighter;
`

export const Phrase2Trip2 = styled.h1`
    width: 70%;
    margin: 2% 0 0 10%;
    font-size: 4.5rem;
    color: #005BD5;
    font-family: ArgentumRegular;

    @media (max-width: 1464px){
        font-size: 4rem;
    }

    @media (max-width: 1308px){
        font-size: 3.8rem;
    }

    @media (max-width: 751px){
        width: 80%;
    }
`

export const Phrase3Trip2 = styled.h4`
    width: 62%;
    font-family: ArgentumRegular;
    color: #005BD5;
    font-weight: lighter;
    margin: 3% 0 0 10%;
`

export const ScheduleTrip2 = styled.button`
    width: 120px;
    padding: 10px;
    text-align: center;
    border-radius: 30px;
    border: 1px solid #005BD5;
    background-color: #FFFFFF10;
    color: #005BD5;
    font-family: ArgentumRegular;
    letter-spacing: 3px;
    transition: 0.1s all;
    margin: 4% 0 5% 10%;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`

export const ContainerTrip3 = styled.div`
    display: flex;
    height: 100%;

    @media (max-width: 1195px){
        flex-direction: column;
        align-items: center;
    }

`

export const FigureTrip3 = styled.figure`
    width: 50%;

    @media (max-width: 1195px){
        width: 100%;
    }
`

export const ContentTrip3 = styled.div`
     width: 50%;
     background-image: linear-gradient(#005BD5, #002E6B);

     @media (max-width: 1195px){
        width: 100%;
     }
`

export const ContentTitle3 = styled.div`
    display: flex;
    align-items: center;
    padding: 13% 0 0 10%;

    @media (max-width: 1195px){
        padding: 8% 0 0 10%;
    }
`

export const Stripe3 = styled.div`
    display: flex;
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF;
    width: 75px;   
`

export const Phrase1Trip3 = styled.h3`
    font-family: ArgentumRegular;
    color: #FFFFFF;
    letter-spacing: 8px;
    margin-left: 4%;
    font-weight: lighter;
`

export const Phrase2Trip3 = styled.h1`
    width: 82%;
    margin: 2% 0 0 10%;
    font-size: 4.5rem;
    color: #FFFFFF;
    font-family: ArgentumRegular;

    @media (max-width: 1464px){
        font-size: 4rem;
    }

    @media (max-width: 1308px){
        font-size: 3.8rem;
    }

    @media (max-width: 1308px){
        font-size: 3.6rem;
    }
`

export const Phrase3Trip3 = styled.h4`
    width: 62%;
    font-family: ArgentumRegular;
    color: #FFFFFF;
    font-weight: lighter;
    margin: 3% 0 0 10%;
`

export const ScheduleTrip3 = styled.button`
    width: 120px;
    padding: 10px;
    text-align: center;
    border-radius: 30px;
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF10;
    color: #FFFFFF;
    font-family: ArgentumRegular;
    letter-spacing: 3px;
    transition: 0.1s all;
    margin: 4% 0 5% 10%;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`

export const Attractions = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 50px;
`

export const BtLocation = styled.button`
    width: 200px;
    padding: 8px;
    cursor: pointer;
    font-family: ArgentumRegular;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    background-color: #FFFFFF50;
    border-radius: 25px;
    margin: 4% 0 5% 10%;
    

    &:hover{
        transform: scale(1.1);
    }
`

export const RJ = styled.div`
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${RiodeJaneiro});
    background-size: cover;
    height: 250px;
    
`
export const RO = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${RiodasOstras});
    background-size: cover;
    height: 250px;
`

export const CN = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Caldasnovas});
    background-size: cover;
    height: 250px;
`
export const AM = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Amazonia});
    background-size: cover;
    height: 250px;
`