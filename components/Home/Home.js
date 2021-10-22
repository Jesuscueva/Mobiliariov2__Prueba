

const Home = () => {
    
    const contenedorHome = document.createElement("div")
    contenedorHome.innerHTML = `

        <section class="section__one section__primary">
        <div class="container_slider">
            <div class="slide_section">
                <div class="slider opacity">
                    <div class="img__carousel top">
                        <img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/slider__uno.jpg?alt=media&token=eb53e3f0-4a56-4d27-8634-fd3e91de41e4" alt="">
                    </div>
                    <div class="img__carousel bottom ">
                        <img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/slider__dos.jpg?alt=media&token=94454782-a6cb-407b-b23b-73e98fdbc82a" alt="">
                    </div>
                    <div class="img__carousel top">
                        <img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/slider__Tres.jpg?alt=media&token=ad64de12-91c1-4561-ac04-035891b98cc1" alt="">
                    </div>
                </div>
                <div class="slider ">
                    <img src="./assets/slider__uno.jpg" alt="IMAGEN PRINCIPAL">
                    <h3 class="text_slider">Text Prueba 2</h3>
                </div>
                <div class="slider ">
                    <img src="./assets/slider__dos.jpg" alt="IMAGEN PRINCIPAL">
                    <h3 class="text_slider">Text Prueba 3</h3>
                </div>
            </div>
            <div class="contenedor_btns">
                <button class="btn" id="btn_left">
                    <i class="fas fa-chevron-circle-left"></i>
                </button>
                <button class="btn" id="btn_rigth">
                    <i class="fas fa-chevron-circle-right"></i>
                </button>
            </div>
        </div>
    </section>

    <section class="section__two ">
        <h2 class="section__two_titulo titulo__ efecto">
            PORQUE CONFIAR <strong>EN NOSOTROS</strong>
        </h2>
        <div class="contenedor__cards">
            <div class="card efecto">
                <div class="card__header">
                    <img src="./assets/saludoCard.jpg" alt="COMPROMETIDOS">
                </div>
                <div class="card__icono efecto">
                    <i class="fas fa-hands-helping"></i>
                </div>
                <div class="card__body">
                    <h4>Comprometidos</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin Ut wisi enim ad minim 
                    </p>
                </div>
            </div>

            <div class="card efecto">
                <div class="card__header">
                    <img src="./assets/equipo.jpg" alt="COMPROMETIDOS">
                </div>
                <div class="card__icono efecto">
                    <span class="iconify iconito" data-inline="false" data-icon="fa-solid:user-tie"></span>
                </div>
                <div class="card__body">
                    <h4>Equipo de Calidad</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin Ut wisi enim ad minim 
                    </p>
                </div>
            </div>

            <div class="card efecto">
                <div class="card__header">
                    <img src="./assets/Experiencia.jpg" alt="COMPROMETIDOS">
                </div>
                <div class="card__icono efecto">
                    <span class="iconify iconito" data-inline="false" data-icon="fluent:people-team-28-filled"></span> 
                </div>
                <div class="card__body">
                    <h4>Experiencia</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin Ut wisi enim ad minim 
                    </p>
                </div>
            </div>

            <div class="card efecto">
                <div class="card__header">
                    <img src="./assets/calidad.jpg" alt="COMPROMETIDOS">
                </div>
                <div class="card__icono efecto">
                    <span class="iconify iconito" data-inline="false"       data-icon="fa-solid:user-cog"></span>
                </div>
                <div class="card__body">
                    <h4>Ofrecemos valor</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin Ut wisi enim ad minim 
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section__three">
        <h2 class="section__three_titulo titulo__ efecto_three">
            NUESTROS <strong>PROYECTOS</strong>
        </h2>
        <div class="container__gallery">
            <div class="gallery efecto_gallery">
                <div class="gallery__left direction">
                    <div class="figure one">
                        <img src="../../assets/proyecto1.jpg" alt="IMAGEN GALERIA">
                        <a href="#/mobiliario/oficina" class="btn-proyectos">Ver más <i class="fas fa-chevron-right"></i> </a>
                    </div>
                    <div class="figure ">
                        <img src="" alt="IMAGEN GALERIA">
                        <a href="#/mobiliario/educativo" class="btn-proyectos">Ver más <i class="fas fa-chevron-right"></i> </a>
                    </div>
                </div>
                <div class="gallery__rigth direction">
                    <div class="figure">
                        <img src="" alt="IMAGEN GALERIA">
                        <a href="#/proyectos/publicos" class="btn-proyectos">Ver más <i class="fas fa-chevron-right"></i> </a>
                    </div>
                    <div class="figure two">
                        <img src="" alt="IMAGEN GALERIA">
                        <a href="#/proyectos/privados" class="btn-proyectos">Ver más <i class="fas fa-chevron-right"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section__four">
        <article class="div-article">
        <h2 class="titulo_noticias titulo__ efecto__four">
            NUESTROS <strong>EVENTOS</strong>
        </h2>
        <div class="contendor__btn_eventos">
            <div class="rigth__eventos">
                <button class="noticias_arriba btn__eventos">
                    <i class="fas fa-chevron-circle-up"></i>
                </button>
                <button class="noticias_abajo btn__eventos">
                    <i class="fas fa-chevron-circle-down    "></i>
                </button>
            </div>
            <div class="left__eventos">
                <button class="noticias_stop btn__eventos">
                    <i class="fas fa-stop"></i>
                </button>
                <button class="noticias_play btn__eventos">
                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div class="cards_noticias">
    <div class="card_noticia">
            <i class="fas fa-calendar-alt"></i>

            <div class="description_noticias">
                <h5 class="subtitle_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                <P class="parrafo_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.</P>
            </div>
            <a href="#/Noticia" class="ver_mas">
                + ver más
            </a>
    </div>
    <div class="card_noticia">
        <i class="fas fa-calendar-alt"></i>

        <div class="description_noticias">
            <h5 class="subtitle_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <P class="parrafo_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.</P>
        </div>
        <a href="#/Noticia" class="ver_mas">
            + ver más
        </a>
    </div>
    <div class="card_noticia">
    <i class="fas fa-calendar-alt"></i>

    <div class="description_noticias">
        <h5 class="subtitle_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <P class="parrafo_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.</P>
    </div>
    <a href="#/Noticia" class="ver_mas">
        + ver más
    </a>
    </div>
    <div class="card_noticia">

    <i class="fas fa-calendar-alt"></i>

    <div class="description_noticias">
    <h5 class="subtitle_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
    <P class="parrafo_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.</P>
    </div>
    <a href="#/Noticia" class="ver_mas">
    + ver más
    </a>
    </div>
    <div class="card_noticia">
    <i class="fas fa-calendar-alt"></i>
        
    <div class="description_noticias">
        <h5 class="subtitle_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <P class="parrafo_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.</P>
    </div>
    <a href="#/Noticia" class="ver_mas">
        + ver más
    </a>
    </div>
    <div class="card_noticia">
    <i class="fas fa-calendar-alt"></i>
        
    <div class="description_noticias">
        <h5 class="subtitle_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <P class="parrafo_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.</P>
    </div>
    <a href="#/Noticia" class="ver_mas">
        + ver más
    </a>
    </div>
    <div class="card_noticia">
    <i class="fas fa-calendar-alt"></i>
        
    <div class="description_noticias">
        <h5 class="subtitle_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <P class="parrafo_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.</P>
    </div>
    <a href="#/Noticia" class="ver_mas">
        + ver más
    </a>
    </div>
    <div class="card_noticia">
    <i class="fas fa-calendar-alt"></i>
        
    <div class="description_noticias">
        <h5 class="subtitle_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <P class="parrafo_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.</P>
    </div>
    <a href="#/Noticia" class="ver_mas">
        + ver más
    </a>
    </div>
    <div class="card_noticia">
    <i class="fas fa-calendar-alt"></i>
        
    <div class="description_noticias">
        <h5 class="subtitle_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <P class="parrafo_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.</P>
    </div>
    <a href="#/Noticia" class="ver_mas">
        + ver más
    </a>
    </div>
    <div class="card_noticia ultima_card">
    <i class="fas fa-calendar-alt"></i>
        
    <div class="description_noticias">
        <h5 class="subtitle_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <P class="parrafo_noticia">Lorem ipsum dolor sit amet, consectetur adipiscing elit adsfipoa aplerme emoas.</P>
    </div>
    <a href="#/Noticia" class="ver_mas">
        + ver más
    </a>
    </div>
        </div>
    </article>


    <article class="info_empresa">
        <h2 class="title_empresa titulo__  efecto__four">
            <strong>LA </strong> EMPRESA
        </h2>
        <figure class="container_img">
            <div class="capa_img">
                <img src="./assets/img_empresa.jpg" alt="Imagen empresa">
                <div class="background_img"></div>
            </div>
            <p class="parrafo_empresa">Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet, consectetur adipiscing elit. Commodo, dignissim bibendum sit nisl tempor. Tempor risus, risus id coc.ommodo, dignissim bibendum sit nisl tempor. Tempor risus, risus id coc.</p>
        </figure>
    </article>

    </section>

    
    
    
    `
    return contenedorHome
}

export default Home


/**
 * <section class="section__five">
        <h2 class="section__five_titulo titulo__">
            QUIENES CONFIARON  EN <br> <strong> NOSOTROS</strong>
        </h2>
        <div class="contenedor__clientes">
            <figure class="figure__clientes">
                <img src="" alt="Imagen-Cliente">
            </figure>
            <figure class="figure__clientes">
                <img src="" alt="Imagen-Cliente">
            </figure>
            <figure class="figure__clientes">
                <img src="" alt="Imagen-Cliente">
            </figure>
            <figure class="figure__clientes">
                <img src="" alt="Imagen-Cliente">
            </figure>
            <figure class="figure__clientes">
                <img src="" alt="Imagen-Cliente">
            </figure>
        </div>
    </section>
 * 
 */