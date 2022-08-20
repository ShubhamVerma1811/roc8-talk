import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/provider'

export const TamaguiLayout: React.FC = (props) => {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider onChangeTheme={setTheme}>
      <Provider disableRootThemeClass defaultTheme={theme}>
        {props.children}
      </Provider>
    </NextThemeProvider>
  )
}
