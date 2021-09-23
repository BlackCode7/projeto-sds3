const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          Java / Spring Boot / React / TypeScript{" "}
          <a
            href="https://github.com/BlackCode7"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>

        <p className="text-light">
          Meu contato no Whatsapp{" "}
          <a
            href="https://api.whatsapp.com/send?phone=5521990431613&text=Ol%C3%A1%20seja%20bem-vindo%20ao%20meu%20perfil!"
            target="_blank"
            rel="noreferrer"
          >
            Whatsapp
          </a>
        </p>

        <p className="text-light">
          <small>
            <strong></strong>Meu contato no Instagram{" "}
            <a
              href="https://www.instagram.com/andersonribeirom/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
