import React, {useState} from 'react';
import TextField, { Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo1.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, Map, CarouselTitle} from './styles'

const Home= () => {
    const [inputValue, setInputValue]= useState('');
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptativeHeight: true,
    };
    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo src= {logo} alt= "Logo do restaurante" />
                    <TextField
                        label= 'Pesquisar Restaurante'
                        outlined
                        trailingIcon= {<MaterialIcon role = "button" icon = "search"/>}
                        >
                        <Input
                            value= {inputValue}
                            onChange= {(e)=> setInputValue({value: e.currentTarget.value})} />
                    </TextField>
                    <CarouselTitle>Na sua área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo= { restaurante} title= "nome sei lá" />
                        <Card photo= { restaurante} title= "nome sei lá" />
                        <Card photo= { restaurante} title= "nome sei lá" />
                        <Card photo= { restaurante} title= "nome sei lá" />
                        <Card photo= { restaurante} title= "nome sei lá" />
                        <Card photo= { restaurante} title= "nome sei lá" />
                        <Card photo= { restaurante} title= "nome sei lá" />
                    </Carousel>
                </Search>
            </Container>
            <Map />
        </Wrapper>
    )
};

export default Home;