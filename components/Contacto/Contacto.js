

const Contacto = () => {

    const contenedorContacto = document.createElement("div")
    contenedorContacto.innerHTML = `
    <div class="bloque parallax contacto img_contact section__contact section__primary">
    <div class="background_transparent"></div>
    
    </div>

    <div class="wrapper_mensaje">
        <p>
            Llamenos, envíe un correo electrónico o un mensaje a través del formulario 
            de contacto. <br> Estaremos encantados de atenderle
        </p>
    </div>

    <div class="wrapper__form_map">
        
        <div class="contenedor__form_">
            <div class="title">
                Formulario Contacto
            </div>
            <form class="wrapper__form_contac" id="form-contacto">

                <div class=" wrapper__input">
                    <div class="wrapper_icon_input">
                        <div class="icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <input id="nombres" class="input__contac" type="text" placeholder="Nombres y Apellidos">
                    </div>
                    <div class="wrapper_icon_input">
                        <div class="icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <input id="correo" class="input__contac" type="email" placeholder="Correo Electronico" required>
                    </div>
                </div>
                
                <div class=" wrapper__input">
                    <div class="wrapper_icon_input">
                        <div class="icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <input id="celular" class="input__contac" type="number" placeholder="Número de Celular">
                    </div>
                    <div class="wrapper_icon_input">
                        <div class="icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <input id="empresa" class="input__contac" type="text" placeholder="Empresa">
                    </div>
                </div>
    
                <div class=" wrapper__input">
                    <div class="wrapper_icon_input">
                        <div class="icon">
                            <i class="fas fa-book"></i>
                        </div>
                        <input id="asunto" class="input__contac" type="text" placeholder="Asunto">
                    </div>
                    <div class="wrapper_icon_input disabled">
                        
                    </div>
                </div>
    
                <div class=" wrapper__input textatera">
                    <div class="wrapper_icon_input ">
                        <div class="icon textarea">
                            <i class="fas fa-pencil-alt"></i>
                        </div>
                        <textarea name="" id="textarea" cols="30" rows="10" placeholder="Dejanos tu comentario*" required></textarea>
                    </div>
                </div>
                <button class="btn__form_contatc" type="submit"><i class="icono_enviar fas fa-paper-plane"></i> &nbsp; Enviar</button>
                
            </form>

            <div class="wrapper__message" id="wrapper__message">
                <div class="container__card">
                    <i class="far fa-check-circle"></i>
                    <h2>Formulario Enviado <br> Correctamente !!</h2>
                    <p>En breve nos pondremos en contacto</p>
                </div>
            </div>
        </div>

        <div class="contenedor__map_">
            <div class="title title_map">
                Ubicanos
            </div>
            <div class="wrapper__map_">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.235561521659!2d-77.03402061084905!3d-12.011052731499998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf132f8e50c9%3A0x9acf42b7f6793262!2sEJECUTA!5e0!3m2!1ses!2spe!4v1626985950116!5m2!1ses!2spe" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
    `
    return contenedorContacto
}

export default Contacto