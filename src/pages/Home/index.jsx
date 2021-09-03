import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo1.svg';
//import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle} from './styles'

const Home= () => {
    const [inputValue, setInputValue]= useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened]= useState(false);
    const { restaurants, restaurantSelected  } = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptativeHeight: true,
    };

    function handleKeyPress(e){
        if(e.key==='Enter'){
            setQuery(inputValue);
        }
    }

    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo src= {logo} alt= "Logo do restaurante" />
                    <TextField
                        label= 'Pesquisar Restaurante'
                        outlined
                        trailingIcon= {<MaterialIcon role = "button" icon = "search" />} >
                        <Input
                            value= {inputValue}
                            onKeyPress={handleKeyPress}
                            onChange= {(e)=> setInputValue({value: e.target.value})} />
                    </TextField>
                    <CarouselTitle>Na sua área</CarouselTitle>
                    <Carousel {...settings}>
                        {restaurants.map((restaurant) => 
                        <Card key={restaurant.place_id}                    
                            photo={restaurant.photos ? restaurant.photos[0].getUrl(): 
                            restaurant} 
                            title={restaurant.name} />
                        )}
                    </Carousel>
                </Search>
                {restaurants.map((restaurant) => <RestaurantCard restaurant={ restaurant } />)}                
            </Container>
            <Map query={query} />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
        </Wrapper>
    )
};

export default Home;