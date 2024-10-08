import { useState } from "react"
import * as S from "./styled"

import Container from "../../components/Container"
import ReactPlayer from "react-player"
import Footer from "../../components/Footer"

// speakers images
import easy from "../../assets/images/easy.png"
import Header from "../../components/Header"
import Section from "../../components/Section"

// features images
import schedule from "../../assets/images/schedule.png"
import chat from "../../assets/images/chat.png"
import graphic from "../../assets/images/graphic.png"
import broker from "../../assets/images/broker.png"
import direct from "../../assets/images/direct.png"
import checks from "../../assets/images/checks.png"
import { Icons } from "../../assets/icons/icons"
import { availableServices } from "../../utils/system/services"
import { useNavigate } from "react-router-dom"
import Carousel from "../../components/Carousel"
import Services from "../../components/Services"

const f1: any[] = [
  {
    image: schedule,
    text: (() => (
      <span>
        Sabemos que não é fácil conseguir os orçamentos necessários, para
        apresentar na <strong> Assembleia.</strong>
      </span>
    ))(),
    reverse: false,
    dark: false,
  },
  {
    image: chat,
    text: (() => (
      <span>
        Nesse momento nossa solução entra em ação, toda{" "}
        <strong>inteligência</strong> e tecnologia do Sistema, estará voltada
        para que seus orçamentos sejam realizados de forma segura e eficaz.
      </span>
    ))(),
    reverse: true,
    dark: true,
  },
  {
    image: graphic,
    text: (() => (
      <span>
        Venha sentir a experiência de fazer parte do próximo nível em sua gestão
        condominial, com processos modernos, eficazes, utilizando tecnologia e
        transformando em <strong>resultado.</strong>
      </span>
    ))(),
    reverse: false,
    dark: false,
  },
]

const f2: any[] = [
  {
    image: broker,
    title: "Receba orçamentos sem intermediador e faça novos negócios!",
    text: (() => (
      <span>
        Um novo conceito no mercado condominial, aproveite essa oportunidade e
        saia na frente da concorrência.
      </span>
    ))(),
    reverse: true,
    dark: true,
  },
  {
    title: "Prestador, nunca foi tão fácil participar de orçamentos!",
    reverse: false,
    dark: true,
  },
  {
    image: direct,
    text: (() => (
      <span>
        Encurtamos o caminho, com as notificações de novos orçamentos, realize o
        contato com o <strong>Cliente</strong> e oferte sua proposta.
      </span>
    ))(),
    reverse: false,
    dark: true,
  },
  {
    image: checks,
    text: (() => (
      <span>
        Esteja sempre com seus dados atualizados, eles ficam disponíveis 24h por
        dia. Não sabemos em que momento o <strong>Cliente</strong> pode precisar
        do seu produto ou serviço.
      </span>
    ))(),
    reverse: true,
    dark: true,
  },
]

const Home = () => {
  const navigate = useNavigate()

  const [allServicesOpened, setAllServicesOpened] = useState(true)

  const handleGetIn = () => {
    navigate("/contact")
  }

  return (
    <S.Page>
      <Header />

      <S.Hero>
        <Container>
          <Carousel />
        </Container>
      </S.Hero>

      <Container>
        <S.PageContent>
          <Section
            id={"generalRef"}
            title="Simples, Fácil e objetivo"
            description="Com a CONDHELP, a forma de fazer orçamentos nos Condomínios, ficou ainda mais simples. Transformamos essa etapa importante em apenas alguns cliques."
          >
            <S.Features>
              <S.FeatureLine $dark={false} $reverse={false}>
                <img src={easy} alt="" />
                <S.FeatureInfo>
                  <S.FeatureTitle>
                    Faça orçamentos para seus condomínios!
                  </S.FeatureTitle>
                  <S.FeatureText>
                    Conhecendo a responsabilidade que tem a função de Síndico,
                    criamos a conexão entre os desafios e as soluções para você
                    Síndico tirar nota 10 na sua prestação de contas.
                  </S.FeatureText>
                </S.FeatureInfo>
              </S.FeatureLine>
            </S.Features>
          </Section>

          <S.VideoArea>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=IwxWGHDfBCc"
              width={"100%"}
              height={"100%"}
              controls={true}
            />
          </S.VideoArea>

          <Services />

          <Section
            title="Quero me cadastrar"
            description="Crie uma conta, cadastre seus condomínios e tenha acesso gratuito aos seus orçamentos!"
          >
            <div style={{ margin: "auto" }}>
              <S.Button>Criar minha conta</S.Button>
            </div>
          </Section>

          <Section
            id={"managerRef"}
            description="Funcionalidades que otimizam tempo e processos com as soluções CONDHELP"
          >
            <S.Features>
              {f1.map((i, k) => (
                <S.FeatureLine key={k} $reverse={i.reverse} $dark={i.dark}>
                  <img src={i.image} alt="" />
                  <S.FeatureInfo $justText={!i.title}>
                    {i.title && <S.FeatureTitle>{i.text}</S.FeatureTitle>}
                    <S.FeatureText>{i.text}</S.FeatureText>
                  </S.FeatureInfo>
                </S.FeatureLine>
              ))}
            </S.Features>
          </Section>

          <Section
            title="Quero me cadastrar"
            description="Crie uma conta, cadastre seus condomínios e tenha acesso gratuito aos seus orçamentos!"
          >
            <div style={{ margin: "auto" }}>
              <S.Button>Criar minha conta</S.Button>
            </div>
          </Section>

          <Section
            title="Conexão, comunicação e responsabilidade"
            description="A CONDHELP, conhece a importância dos Prestadores de Serviços e dos desafios de ofertar
            produtos ou serviços no setor condominial. Criamos a solução que conecta o Prestador ao
            Síndico, facilitando o contato, comunicação e criando esse elo tão importante."
            big={true}
          >
            <S.Features>
              {f2.map((i, k) => (
                <S.FeatureLine key={k} $reverse={i.reverse} $dark={i.dark}>
                  {i.image && <img src={i.image} alt="" />}
                  <S.FeatureInfo $justText={!i.title}>
                    {i.title && (
                      <S.FeatureTitle $textCenter={!i.image}>
                        {i.title}
                      </S.FeatureTitle>
                    )}
                    <S.FeatureText>{i.text}</S.FeatureText>
                  </S.FeatureInfo>
                </S.FeatureLine>
              ))}
            </S.Features>
          </Section>

          <Section
            id={"providerRef"}
            title="Quero oferecer meu serviço ou produto"
          >
            <S.StartGap>
              <span>
                Saia na <strong>FRENTE</strong> do seu concorrente, realize seu
                pré-cadastro e nosso time comercial vai entrar em contato.
              </span>
              <S.StartGapContact>
                <div>
                  <Icons.Whatsapp width={48} height={48} />
                  <span>Atendimento comercial</span>
                </div>
                <S.Button onClick={handleGetIn}>Realizar pré-cadastro</S.Button>
              </S.StartGapContact>
            </S.StartGap>
          </Section>

          <Section title="Diversos produtos e serviços podem ser ofertados!">
            <S.SPGArea>
              <S.SPGExpandButton
                $opened={allServicesOpened}
                onClick={() => setAllServicesOpened(!allServicesOpened)}
              >
                <span>Todos os serviços e manutenções</span>
                <Icons.Dropdown />
              </S.SPGExpandButton>
              <S.SPGWrapper $opened={allServicesOpened}>
                <S.SPGContent $opened={allServicesOpened}>
                  <S.ServicesProductsGrid>
                    {availableServices.map((i, k) => (
                      <S.SPCategory key={k}>
                        {i.name ? (
                          <S.SPCategoryName>{i.name ?? " "}</S.SPCategoryName>
                        ) : (
                          <div style={{ height: 15, width: 1 }} />
                        )}
                        <S.SPList>
                          {i.list.map((ii, ik) => (
                            <S.SPItem key={ik}>{ii}</S.SPItem>
                          ))}
                        </S.SPList>
                      </S.SPCategory>
                    ))}
                  </S.ServicesProductsGrid>
                </S.SPGContent>
              </S.SPGWrapper>
            </S.SPGArea>
          </Section>
        </S.PageContent>
      </Container>
      <Footer />
    </S.Page>
  )
}

export default Home
