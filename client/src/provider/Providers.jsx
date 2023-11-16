import { homecityLogo } from "../assets/svg"
// ceo third part provider
import { Helmet, HelmetProvider } from 'react-helmet-async'

// providers
import { LanguageProvider } from '../context/LanguageContext'
import { MenuProvider } from '../context/MenuContext'
import { SearchProvider } from '../context/SearchContext'
import { SmoothScrollingProvider } from "../context/SmoothScrollingContext"
import { LivePriceProvider } from "../context/LivePriceContext"

const Providers = ({ children }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="icon" type="image/svg+xml" href={homecityLogo} />
          {/* <script src="./src/lib/customScript.js" type='text/javascript' crossorigin="anonymous" async></script> */}
          <title>Homecity | Investment | Real state </title>
        </Helmet>
        <LanguageProvider>
          <MenuProvider>
            <SearchProvider>
              <SmoothScrollingProvider>
                <LivePriceProvider>
                  {children}
                </LivePriceProvider>
              </SmoothScrollingProvider>
            </SearchProvider>
          </MenuProvider>
        </LanguageProvider>
      </HelmetProvider >
    </>
  )
}
export default Providers