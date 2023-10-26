import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'
import { MotiLink } from 'solito/moti'
import NavigationRail from 'app/material/components/NavigationRail'
import Header from 'app/material/components/Header'
import ContentContainer from 'app/material/components/container/ContentContainer'
import MainContainer from 'app/material/components/container/MainContainer'

export function HomeScreen() {
  return (
    <View className="bg-surface-100 dark:bg-surfacedark-100 loaded-success font-sans text-base font-normal text-gray-700 dark:text-gray-200">
      <Header />
      <MainContainer>
        <NavigationRail />
        <ContentContainer>
          <div
            className="preloader loaded-success bg-neutral-10 fixed inset-0 z-50 dark:bg-neutral-900"
            style={{ fontFamily: 'Roboto, Bangla521, sans-serif' }}
          >
            <div className="flex h-screen w-full items-center justify-center">
              <svg className="circular-loader relative h-[100px] w-[100px]">
                <circle
                  className="path stroke-primary-600 dark:stroke-primary-200"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke-width="5"
                  stroke-miterlimit="10"
                ></circle>
              </svg>
            </div>
          </div>

          <View className=" items-center justify-center p-3">
            <H1 className="bg-red-100 dark:bg-blue-100">Welcome to Solito.</H1>

            <button className="btn-elevated bg-surface-100 hover:bg-surface-200 focus:bg-surface-400 text-primary-600 dark:bg-surfacedark-100 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400 dark:text-primary-200 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] shadow-lg">
              Elevated
            </button>

            <View className="max-w-xl">
              <P className="text-center">
                Here is a basic starter to show you how you can navigate from
                one screen to another. This screen uses the same code on Next.js
                and React Native.
              </P>
              <P className="text-center">
                Solito is made by{' '}
                <A
                  href="https://twitter.com/fernandotherojo"
                  hrefAttrs={{
                    target: '_blank',
                    rel: 'noreferrer',
                  }}
                >
                  Fernando Rojo
                </A>
                .
              </P>
              <P className="text-center">
                NativeWind is made by{' '}
                <A
                  href="https://twitter.com/mark__lawlor"
                  hrefAttrs={{
                    target: '_blank',
                    rel: 'noreferrer',
                  }}
                >
                  Mark Lawlor
                </A>
                .
              </P>
            </View>
            <View className="h-[32px]" />
            <Row className="space-x-8">
              <TextLink href="/user/fernando">Regular Link</TextLink>
              <MotiLink
                href="/user/fernando"
                animate={({ hovered, pressed }) => {
                  'worklet'

                  return {
                    scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                    rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
                  }
                }}
                transition={{
                  type: 'timing',
                  duration: 150,
                }}
              >
                <Text selectable={false} className="text-base font-bold">
                  Moti Link
                </Text>
              </MotiLink>
            </Row>
          </View>
        </ContentContainer>
      </MainContainer>
    </View>
  )
}
