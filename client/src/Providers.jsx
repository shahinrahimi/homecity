
// ceo third part provider
import { Helmet, HelmetProvider } from 'react-helmet-async'

// providers
import { LanguageProvider } from './context/LanguageContext'
import { MenuProvider } from './context/MenuContext'
import { SearchProvider } from './context/SearchContext'

const Providers = ({ children }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {/* <script src="./src/lib/customScript.js" type='text/javascript' crossorigin="anonymous" async></script> */}
          <title>Hello Word Added by Helmet</title>
        </Helmet>
        <LanguageProvider>
          <MenuProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </MenuProvider>
        </LanguageProvider>
      </HelmetProvider >
    </>
  )
}
export default Providers