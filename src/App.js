import React, { useEffect, useState } from 'react'; 
import './App.css';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { setCategorias, setValueCategoria, setNameCategoria, setUrlCategoria } from './redux/categoriasSlice'
import { getCategories, getByCategorie } from './services/axios';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const categoria = useSelector(state => state.categorias)
  const dispatch = useDispatch()
 
     const getCategorias = async () => {
      try {
        const data = await getCategories();
        dispatch(setCategorias(data))
      } catch (error) {
        
      } 
    }
  
    useEffect(()=>{ 
      getCategorias();
    },[]);

    const onClickCatg = async (item) => {
      try {
        setShow(true);
        const data = await getByCategorie(item);
        dispatch(setValueCategoria(data.value))
        dispatch(setNameCategoria(data.categories))
        dispatch(setUrlCategoria(data.url))
      } catch (error) {
        
      } 
    }

  return (
    <div className="App">
  
      {/* <div>
    
        <nav class="navbar bg-light">
        <form class="container-fluid justify-content-start">

          {
            categoria.isLoading?
              <h1>Cargando...</h1>
            :
            categoria.list.map((item)=>{
                return(
                  <button class="button button1" type="button" onClick={()=>onClickCatg(item)}>{item}</button>
                )
            })
          }

        </form>
      </nav>

      <h1>{categoria.categories}</h1>
      <h1>{categoria.value}</h1>

      <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="https://c.tenor.com/yvlPybIv5KwAAAAC/chuck-norris-salute.gif" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{categoria.categories}</h5>
          <p class="card-text">{categoria.value}</p>
          <a href={categoria.url} class="btn btn-primary">Ver más ... </a>
        </div>
      </div>
       
      </div> */}

      <div>
      <header class="header">
          <div class="container">
          <div class="btn-menu">
            <label for="btn-menu">Categorias</label>
          </div>
            <nav class="menu">
              {
                categoria.isLoading?
                  <h1>Cargando...</h1>
                :
                categoria.list.map((item)=>{
                    return(
                      <a style={{cursor: 'pointer'}} onClick={()=>onClickCatg(item)}>{item}</a>
                    )
                })
              }
            </nav>
          </div>
        </header>
        <div class="capa"></div>

        {/* <!-- Modal --> */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{categoria.categories}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{categoria.value}</Modal.Body>
        <Modal.Footer>
          <a href={categoria.url} class="btn btn-primary" >
            Ver más...
          </a>
        </Modal.Footer>
      </Modal>
      </div>


    </div>
    
  );
}

export default App;
