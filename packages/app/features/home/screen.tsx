import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'
import { MotiLink } from 'solito/moti'
import NavigationRail from 'app/material/components/NavigationRail'
import Header from 'app/material/components/Header'
import ContentContainer from 'app/material/components/container/ContentContainer'
import MainContainer from 'app/material/components/container/MainContainer'
import ButtonSection, {
  BlackContainer,
} from 'app/material/components/ButtonSection'
import Search from 'app/material/components/search'
import List from 'app/material/components/list/List'
import SectionContainer from 'app/material/components/container/SectionContainer'
import ListDropdown from 'app/material/components/list/ListDropdown'
import Switch from 'app/material/components/switch/Switch'

export function HomeScreen() {
  return (
    <View className="bg-surface-100 dark:bg-surfacedark-100 loaded-success font-sans text-base font-normal text-gray-700 dark:text-gray-200">
      <Header />
      <MainContainer>
        <NavigationRail />
        <ContentContainer>
          <ButtonSection />
        </ContentContainer>
        <ContentContainer>
          <SectionContainer>
            <BlackContainer>
              <div className="flex flex-col flex-wrap gap-4">
                <Search />
                <List />
                <ListDropdown />
                <Switch />
              </div>
            </BlackContainer>
          </SectionContainer>
        </ContentContainer>
      </MainContainer>
    </View>
  )
}
