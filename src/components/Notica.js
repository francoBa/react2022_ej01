import '../styles/App.css'

function Noticia() {
    const noticia = {
        titulo : "Cubo 3D",
        desciption : "Cubo 3D CSS Animations"
    };

    const { titulo } = noticia;

    return (
        <div className='noticia'>
            <h1 className='noticia-title'>{ titulo }</h1>
        </div>
    );
};

export default Noticia;