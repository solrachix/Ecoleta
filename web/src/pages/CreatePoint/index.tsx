import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import api from '../../services/api';
import { LeafletMouseEvent } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

import Dropzone from '../../components/Dropzone';
import { Container, Form, ItemsGrid } from './styles';

// array ou objeto: manualmente informar o tipo da variavel

interface Item {
    id: number;
    title: string;
    image_url: string
}

interface IBGEUFResponse {
    sigla: string
}

interface IBGECityResponse {
    id: number;
    nome: string
}
const Home = () => {
    const history = useHistory();  
    const [ items, setItems ] = useState<Item[]>([]);
    const [ ufs, setUfs ] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
      })
    
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

    const [selectedUF, setSelectedUf] = useState("0");
    const [selectedCity, setSelectedCity] = useState("0");
    const [cities, setCities] = useState<IBGECityResponse[]>([]);
    const [selectPosition, setSelectPosition] = useState<[number, number]>([0, 0]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [selectedFile, setSelectedFile] = useState<File>();
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          setInitialPosition([latitude, longitude]);
        });
    }, []);

    useEffect(()=> {
        api.get('items').then(response => {
            setItems(response.data);
        });
    }, []);

    useEffect(()=> {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                const ufInitials = response.data
                .map( uf => uf.sigla);

                setUfs(ufInitials)
            });
    }, []);

    useEffect(()=>{
        // acarregar ao selecionar um estado
        (function (){
            if(selectedUF === "0") {return false;}

            axios
                .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/distritos`)
                .then(response => {
                    const cityNames = response.data
                        .map( city => { 
                            return { id: city.id, nome: city.nome }
                        });

                    setCities(cityNames);
                });
        })();
    }, [selectedUF]);

    function handleSelectedUF(event: ChangeEvent<HTMLSelectElement>){
        const UF = event.target.value;
        setSelectedUf(UF);        
    }    
    function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>){
        const City = event.target.value;
        setSelectedCity(City);        
    }

    function handleMapClick(event: LeafletMouseEvent){
        setSelectPosition([
            event.latlng.lat,
            event.latlng.lng,
        ]);
    }

    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.findIndex(item => item === id);
    
        if (alreadySelected >= 0) {
          const filteredItems = selectedItems.filter(item => item !== id);
          setSelectedItems(filteredItems);
        } else {
          setSelectedItems([...selectedItems, id])
        }
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
    
        const {name, email, whatsapp} = formData;
        const uf = selectedUF;
        const city = selectedCity;
        const [latitude, longitude] = selectPosition;
        const items = selectedItems;
    
        const data = new FormData();

        data.append('name', name);
        data.append('email', email);
        data.append('whatsapp', whatsapp);
        data.append('uf', uf);
        data.append('city', city);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('items', items.join(','));

        if(selectedFile){
            data.append('image', selectedFile)
        }

        await api.post('points', data);

        alert('Ponto de coleta criado!');
        history.push('/');
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Cadastro do <br/> ponto de coleta</h1>

                <Dropzone onFileUploaded={setSelectedFile} />


                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input 
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Adicione o endereço no mapa</span>
                    </legend>

                    <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={selectPosition} />
                    </Map>


                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado(UF)</label>
                            <select
                                name="uf"
                                id="uf"
                                value={selectedUF}
                                onChange={handleSelectedUF}
                            >
                                {ufs.map(uf => (
                                    <option key={uf} value={uf}>{uf}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select 
                                name="city"
                                id="city"
                                value={selectedCity}
                                onChange={handleSelectedCity}
                            >
                                {cities.map(city => (
                                    <option key={city.id} value={city.nome}>{city.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Ítems de coletas</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>

                    <ItemsGrid>
                    {
                    items.map(item => (
                        <li key={item.id}
                            className={selectedItems.includes(item.id) ? 'selected' : ''}
                            onClick={() => handleSelectItem(item.id)}
                        >
                            <img src={item.image_url} alt={item.title}/>
                            <span>{item.title}</span>
                        </li>
                    ))
                    }                        
                        
                    </ItemsGrid>
                </fieldset>

                <button type="submit">
                    Cadastrar ponto de coleta
                </button>
            </Form>
        </Container>
    )
}

export default Home;
