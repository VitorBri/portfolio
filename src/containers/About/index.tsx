import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre min</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum, est
      nesciunt possimus ut, incidunt numquam corporis dolore nobis dolor nemo
      sapiente voluptatum soluta iste doloribus atque aperiam quaerat provident.
    </Paragrafo>
    <GithubSection>
      <img
        src="https://github-readme-stats.vercel.app/api?username=VitorBri&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt=""
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=VitorBri&layout=compact&langs_count=7&theme=dracula"
        alt=""
      />
    </GithubSection>
  </section>
)

export default About
