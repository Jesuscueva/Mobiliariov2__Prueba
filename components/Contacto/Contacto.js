

const Contacto = () => {

    const contenedorContacto = document.createElement("div")
    contenedorContacto.innerHTML = `
    <div class="bloque parallax img_contact section__contact">
    <div class="background_transparent"></div>
    <!-- <div class="wrapper_titulo">
        <h2>QUIENES <strong>SOMOS?</strong></h2>
    </div> -->
    </div>

    <div class="wrapper_mensaje">
        <p>
            Llamenos, envíe un correo electrónico o un mensaje a través del formulario 
            de contacto. <br> Estaremos encantados de atenderle
        </p>
    </div>

    <div class="wrapper__form_map">

        <form class="wrapper__form_contac">
            <div class=" wrapper__input">
                <div class="wrapper_icon_input">
                    <div class="icon">
                        <i class="fas fa-user"></i>
                    </div>
                    <input class="input__contac" type="text" placeholder="Nombres y Apellidos">
                </div>
                <div class="wrapper_icon_input">
                    <div class="icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <input class="input__contac" type="email" placeholder="Correo Electronico" required>
                </div>
            </div>
            
            <div class=" wrapper__input">
                <div class="wrapper_icon_input">
                    <div class="icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <input class="input__contac" type="number" placeholder="Número de Celular">
                </div>
                <div class="wrapper_icon_input">
                    <div class="icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <input class="input__contac" type="text" placeholder="Empresa">
                </div>
            </div>

            <div class=" wrapper__input">
                <div class="wrapper_icon_input">
                    <div class="icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <input class="input__contac" type="text" placeholder="Asunto">
                </div>
                <div class="wrapper_icon_input disabled">
                    
                </div>
            </div>

            <div class=" wrapper__input textatera">
                <div class="wrapper_icon_input ">
                    <div class="icon textarea">
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            
        </form>

        <div class="wrapper__map_">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.235561521659!2d-77.03402061084905!3d-12.011052731499998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf132f8e50c9%3A0x9acf42b7f6793262!2sEJECUTA!5e0!3m2!1ses!2spe!4v1626985950116!5m2!1ses!2spe" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
    `
    return contenedorContacto
}

export default Contacto