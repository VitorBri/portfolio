import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}> João Vítor Brito</Title>
      <Paragrafo tipo="secundario" font-size={16}>
        VitorBri
      </Paragrafo>
      <Description tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Description>
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
