import { useEffect, useState } from "react";
import Logo from "../assets/react.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Instagram from "../assets/instagram.svg"
import Youtube from "../assets/youtube.svg"
import Facebook from "../assets/facebook.svg"
import HeroRectangleOne from "../assets/RectangleOne.svg";
import HeroRectangleTwo from "../assets/RectangleTwo.svg";
import Button from "../components/button.tsx";
import Star from "../assets/icn bxs-star.svg";
import StarOuter from "../assets/icn bx-star.svg";
import Check from "../assets/Check.svg";
import Award from "../assets/award 1.svg";
import Elon from "../assets/elon.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testemony.css";
import "../styles/pricing.css";
import "../styles/contacts.css";
import "../styles/footer.css";

export default function Home() {
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [feedback, setFeedback] = useState("");
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "/api",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjc3NGJkODcyOWVhMzhlOWMyZmUwYzY0ZDJjYTk0OGJmNjZmMGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5NTY5NTEyODc5NzY1NzA5Nzc5IiwiZW1haWwiOiJwZWRyb2FiZXJuaXNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiItTFR6bGx3VGFpTnpvZzlMYTJ5dURRIiwibmJmIjoxNzUwODkwMTQ3LCJpYXQiOjE3NTA4OTA0NDcsImV4cCI6MTc1MDg5NDA0NywianRpIjoiNjcyZTVlNDIzYTU2ZjY0OWZmMGRlZTVmYWE2OTE1OTYyMzY0NTBkZSJ9.zCK9p_ZvsHl-amkhnL3WROrWeAvNLZLzCJ35QYM05YEHsxJ3KlPlkTEOXpXjYKNgHQTdBW8C56e2svXjTiaLUBTXOgOA2GEg_JtSVjghvWOGRbEOnoPjyYR2qp7XssdKbSd5Qb75pV51VlYleyRiRjDIhCQBkNKvIpg0d3IFfv4dJwOWRVQlVzFiOARcYPe9JgRIarTzgVKss8bUV5yNTRhsCYD2GjqZfwBlrg7I_9_kFUwdWCOCsaxe4wQCMjVx7OE18B5sT5Qbi832_W9PAqruj8olrHN8wldz3CxPB4L858jUUeqvKbjieK_97wq_W_tnz-qS4iZJ6ZxW8rmIoA",
                    },
                    body: JSON.stringify({
                        to_email: email,
                        text_msg: mensagem,
                    }),
                }
            );

            const result = await response.text();

            if (response.ok) {
                setFeedback("Mensagem enviada com sucesso!");
                setEmail("");
                setMensagem("");
            } else {
                setFeedback("Erro ao enviar: " + result);
            }
        } catch (error) {
            setFeedback("Erro de rede: " + error);
        }
    };

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    href="#">Home</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
                    <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" secondary /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h3>Sob medida para você</h3>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>Nome Empresa </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
            </section>

            <section className="even-columns">
                <div className="cards">
                    <div className="card">
                        <span>
                            <img src={Award} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Produto Vencedor
                            </h3>
                            <p>
                                Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Award} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Produto Vencedor
                            </h3>
                            <p>
                                Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Award} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Produto Vencedor
                            </h3>
                            <p>
                                Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={Elon} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Elon} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Elon} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={Elon} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Elon} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Elon} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                    </div>
                </section>
            </section>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Baixe a ferramenta e comece a utilizar agora mesmo.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Com anuncios</p>
                        </span> <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Até 10 produtos por dia</p>
                        </span> <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Utilize sem limitação X</p>
                        </span>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Empresarial</h3>
                            <p>Utilize nossa solução na sua empresa.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 12,90</h2>
                            <p>/mês por dev</p>
                        </span>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Com anuncios</p>
                        </span> <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Até 10 produtos por dia</p>
                        </span> <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Utilize sem limitação X</p>
                        </span>
                    </div>
                </section>
            </section>
            <section id="contacts">
                <header>
                    <span>
                        <p>Envie sua duvida.</p>
                        <h3>Entre em contato</h3>
                    </span>
                    <p>Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder.😎</p>
                </header>
                <section>
                    <form className="inputs" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Sua mensagem"
                            required
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        />
                        <button type="submit">Enviar</button>
                        {feedback && <p style={{ marginTop: "1rem" }}>{feedback}</p>}
                    </form>
                </section>
            </section>
            <section id="footer">
                <section className="footer-content">
                    <div id="logomarca">
                        <h4>LogoMarca</h4>
                        <div className="imgs">
                            <img src={Instagram} alt="ícone campeão" width={64} height={64} />
                            <img src={Facebook} alt="ícone campeão" width={64} height={64} />
                            <img src={Youtube} alt="ícone campeão" width={64} height={64} />
                        </div>
                    </div>
                    <div id="empresa">
                        <h4>Empresa</h4>
                        <ul>
                            <li>Sobre nós</li>
                            <li>Faça parte do time</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div id="funcionalidades">
                        <h4>Funcionalidades</h4>
                        <ul>
                            <li>Marketing</li>
                            <li>Analise de dados</li>
                            <li>Boot discord</li>
                        </ul>
                    </div>
                    <div id="recursos">
                        <h4>Recursos</h4>
                        <ul>
                            <li>IOS & Android</li>
                            <li>Teste a Demo</li>
                            <li>Clientes</li>
                            <li>API</li>
                        </ul>
                    </div>
                </section>
            </section >
            <section className="copy">
                <span>
                    <p>Feito com amor na aula de Programação Web💙 ©2024 AktieTech - Todos os direitos reservados.</p>
                </span>
            </section>
        </>
    )
}